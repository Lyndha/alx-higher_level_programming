#!/usr/bin/python3
"""create a class Square with  size"""


class Square:
    """Class Square """

    def __init__(self, size=0):
        """Constructor of a Square with the size"""
    if size != int:
        raise(TypeError("size must be an integer"))
    elif (size < 0):
        raise(ValueError("size must be >= 0"))
    else:
        self.__size = size
