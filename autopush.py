import subprocess
out = subprocess.Popen(['git','status'],stdout=subprocess.PIPE,stderr=subprocess.STDOUT)
stdout,_ = out.communicate()
stdout = str(stdout).lower()
if 'nothing to commit' in stdout:
    print('Meow')