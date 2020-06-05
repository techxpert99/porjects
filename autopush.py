from subprocess import Popen as popen,PIPE,STDOUT
from time import sleep
from re import split
SAVE_FILE = "autopush.py"
COMMIT_NUMBER = int("0000043")
RUNNABLE = True
SLEEP_TIME = 5

def isModified():
    out = popen(['git','status'],stdout=PIPE,stderr=STDOUT)
    stdout,_ = out.communicate()
    stdout = str(stdout).lower()
    stdout = split('\\\\[n\'"bt\\\\]',stdout)
    for item in stdout:
        if item.startswith('deleted') or item.startswith('untracked files') or (item.startswith('modified') and item.split(':')[1].strip() != SAVE_FILE):
            return True
    return False

def push(msg):
    popen(['git','add','.'],stdout=PIPE,stderr=STDOUT)
    popen(['git','commit','-m',msg],stdout=PIPE,stderr=STDOUT)
    popen(['git','push'],stdout=PIPE,stderr=STDOUT)

def zero_encode(number,len):
    out = ["0" for index in range(len)]
    index = len-1
    while number != 0:
        out[index] = str(number%10)
        number = int(number/10)
        index-=1
    out_string = ""
    for index in range(len):
        out_string+=out[index]
    return out_string

def save(file):
    with open(file,mode="r+") as fil:
        line = fil.readline()
        while line:
            if line.startswith('COMMIT_NUMBER'):
                fil.seek(fil.tell()-len(line))
                line_splits =line.split('"')
                line_splits[1] = f'"{zero_encode(COMMIT_NUMBER,len(line_splits[1]))}"'
                line = ""
                for split in line_splits:
                    line += split
                fil.write(line)
                break
            line = fil.readline()

def start():
    global COMMIT_NUMBER
    while RUNNABLE:
        if isModified():
            print('autopush:'+str(COMMIT_NUMBER))
            push('autopush:'+str(COMMIT_NUMBER))
            COMMIT_NUMBER+=1
            save(SAVE_FILE)
        sleep(SLEEP_TIME)

if __name__ == "__main__":
    start()