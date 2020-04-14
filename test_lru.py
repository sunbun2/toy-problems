import unittest
from lrucache import *

class Testcases(unittest.TestCase):

    def test_lru_get(self):
        l = ['one','two','three','four','five']
        for i in range(1,6):
            put(i,l[i-1])
        
