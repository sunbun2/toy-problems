import unittest
from lrucache import *

class test_lru(unittest.TestCase):

    def test_get(self):
        lru = LRU(5)
        for i in range(5):
            lru.put(i,'sample '+str(i))
        for i in range(5):
            self.assertEqual(lru.get(i),'sample '+str(i))
        pass
        
    def test_get2(self):
        lru = LRU(5)
        self.assertEqual(lru.get(1),-1)
        self.assertEqual(lru.get(-1),-1)
        pass
        
    
    def test_get3(self):
        lru = LRU(3)

        for  i in range(100):
            lru.put(i,'text '+str(i))
        self.assertEqual(lru.get(0),-1)
        self.assertEqual(lru.get(97),'text 97')
        pass

    def test_get_cache(self):
        lru = LRU(5)
        for i in range(5):
             lru.put(i,'sample '+str(i))
        self.assertEqual(lru.get_cache(),'[0, 1, 2, 3, 4]')
        pass

    def test_get_cache2(self):
        lru = LRU(5)
        self.assertEqual(lru.get_cache(),'[]')
        pass

    def test_get_cache3(self):
        lru=LRU(1)
        for i in range(5):
            lru.put(i,'sample '+str(i))
        self.assertEqual(lru.get_cache(),'[4]')
        pass

    def test_put1(self):
        lru = LRU(5)
        lru.put(1,'sample test')
        self.assertEqual(lru.get(1),'sample test')

    def test_put2(self):
        lru = LRU(5)
        lru.put(1,-1)
        self.assertEqual(lru.get(1),-1)


if __name__ == '__main__':
    unittest.main()
