#!/usr/bin/python3 
for char_code in range(ord('a'), ord('z') + 1):
    if char_code != ord('q') and char_code != ord('e'):
        print(chr(char_code), end="")
