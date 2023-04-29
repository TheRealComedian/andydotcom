from random import choice, random
from string import ascii_lowercase, digits, punctuation
import os
import threading


def main():
    chars = list(ascii_lowercase + digits + punctuation)
    images = os.listdir('./images')
    os.startfile('sounds\Im_thirsty.mp3')

    def task1():
        while True:
            if random() <= 0.00000008:
                os.startfile(f'images\\{choice(images)}')

    def task2():
        while True:
            print(choice(chars), end="")

    thread1 = threading.Thread(target=task1)
    thread2 = threading.Thread(target=task2)

    thread1.start()
    thread2.start()

    thread1.join()
    thread2.join()
        
if __name__ == '__main__':
    main()
