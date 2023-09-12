#!/usr/bin/python3
"""
function tat read a filename
"""


def read_file(filename=""):
    """read filename"""
    with open('filename', "r", encoding="utf-8") as f:
        read_data = f.read()
         print(f.read(), end="")
