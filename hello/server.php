<?php

require_once('db_config.php');

$SALT_LENGTH = 10;
$CHUNK_SIZE = 8192;

function query_db($query)
{
	global  $DB_HOSTNAME, $DB_NAME, $DB_USERNAME, $DB_PASSWORD;
	try
	{
		$pdo = new PDO("mysql:host=$DB_HOSTNAME;dbname=$DB_NAME", $DB_USERNAME, $DB_PASSWORD);
		$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
		$pdo->query($query);
	}
	catch(Exception $exc)
	{
		die('Error: 0');
	}
}

function fetch_db($query)
{
	global  $DB_HOSTNAME, $DB_NAME, $DB_USERNAME, $DB_PASSWORD;
	try
	{
		$pdo = new PDO("mysql:host=$DB_HOSTNAME;dbname=$DB_NAME", $DB_USERNAME, $DB_PASSWORD);
		$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
		return $pdo->query($query)->fetchAll(PDO::FETCH_ASSOC);
	}
	catch(Exception $exc)
	{
		die('Error: 1');
	}
}

function userExists($name)
{
	$output = fetch_db("SELECT * FROM users WHERE name='$name'");
	return $output != 0 && count($output) != 0;
}

function generateSalt()
{
	global $SALT_LENGTH;
	
	$salt = '';
	for($index=0; $index<$SALT_LENGTH; $index++)
		$salt .= chr(rand(65,122));
	return $salt;
}

function evaluatePassword($name, $password)
{
	$salt = fetch_db("SELECT * FROM salts WHERE name='$name'")[0]['salt'];
	$salted_password = $salt.hash('md5',$password);
	$output = fetch_db("SELECT * FROM users WHERE name='$name'")[0];
	return !strcmp($salted_password,$output['password']);
}

function addUser($name, $password, $info)
{
	$salt = generateSalt();
	$salted_password = $salt.hash('md5',$password);
	query_db("INSERT INTO salts (name,salt) VALUES ('$name','$salt')");
	query_db("INSERT INTO users (name,password,info) VALUES ('$name','$salted_password','$info')");
}

function removeUser($name, $password)
{
	if(!userExists($name))
		die('Error: 2');
	if(!evaluatePassword($name, $password))
		die('Error: 3');
	query_db("DELETE FROM users WHERE name='$name'");
}

function loginUser($name, $password)
{
	if(isset($_SESSION['name']))
		return;
	if(!userExists($name))
		die('Error: 4');
	if(!evaluatePassword($name, $password))
		die('Error: 5');
	$_SESSION['name'] = $name;
}

function logoutUser()
{
	unset($_SESSION['name']);
}

function readPosts($file)
{
	try
	{
		$contents = '';
		$handle = fopen($file,"r");
		while(!feof($handle))
			$content.=fread($handle,$CHUNK_SIZE);
		fclose($handle);
		return unserialize($content);
	}
	catch(Exception $exc)
	{
		die('Error: 6');
	}
}

function writePosts($name,$posts)
{
	try
	{
		$contents = serialize($posts);
		$handle = fopen($file,"w");
		if(!fwrite($handle,$contents))
			die('Error: 7');
		fclose($handle);
	}
	catch(Exception $exc)
	{
		die('Error: 8');
	}
}

function post($name, $body)
{
	if(!isset($_SESSION['name']))
		die('Error: 9');
	$file = "posts/$name";
	if(file_exists($file))
		$posts = readPosts($file);
	else
		$posts = array('posts' => array() , 'read' => 0);
	$posts['posts'][] = array('from' => $_SESSION['name'], 'time' => time(), 'post' => $body);
	writePosts($file,$posts);
}

function readlatest()
{
	if(!isset($_SESSION['name']))
		die('Error: 10');
	$file = "posts/".$_SESSION['name'];
	if(!file_exists($file))
		return;
	$posts = readPosts($file);
	$index = $posts['read'];
	$retval = array();
	for(;$index<count($posts['posts']);$index++)
		$retval[] = $posts['posts'][$index];
	$posts['read'] = $index;
	writePosts($posts);
	return $retval;
}

function read($index)
{
	if(!isset($_SESSION['name']))
		die('Error: 11');
	$file = "posts/".$_SESSION['name'];
	if(!file_exists($file))
		return;
	$posts = readPosts($file);
	$retval = array();
	for(;$index<count($posts['posts']);$index++)
		$retval[] = $posts['posts'][$index];
	$posts['read'] = $index;
	writePosts($posts);
	return $retval;
}

session_start();

$RESULT = 'OK';

if(!isset($_POST['task'])) die('Error: 12');

$task = $_POST['task'];

if(!strcmp($task,'register'))
{
    if(!(isset($_POST['name']) && isset($_POST['password']) && isset($_POST['info'])))
		die('Error: 13');
	
	if(userExists($_POST['name']))
		die('Error: 14');
	
	addUser($_POST['name'],$_POST['password'],$_POST['info']);
}
else if(!strcmp($task, 'unregister'))
{
    if(!(isset($_POST['name']) && isset($_POST['password'])))
		die('Error: 15');
	removeUser($_POST['name'],$_POST['password']);
}
else if(!strcmp($task, 'login'))
{
    if(!(isset($_POST['name']) && isset($_POST['password'])))
		die('Error: 16');
	loginUser($_POST['name'],$_POST['password']);
}
else if(!strcmp($task,'logout'))
{
	logoutUser();
}
else if(!strcmp($task,'post'))
{
	if(!(isset($_POST['name']) && isset($_POST['body'])))
		die('Error: 17');
	post($_POST['name'],$_POST['body']);
}
else if(!strcmp($task,'read'))
{
	if(isset($_POST['index']))
		$RESULT = read($_POST['index']);
	else
		$RESULT = readlatest();
}
else
	die('Error: 18');
?>

<?php
echo $RESULT;
?>