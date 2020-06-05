import subprocess
out = subprocess.Popen(['git','status'],stdout=subprocess.PIPE,stderr=subprocess.STDOUT)
stdout,stderr = out.communicate()
if str(out).lower().__contains__('nothing to commit'):
    print('Meow')