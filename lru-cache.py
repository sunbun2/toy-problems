class LRU:
    def __init__(self,c):
        self.c=c
        self.list=[]
        self.inputs={}