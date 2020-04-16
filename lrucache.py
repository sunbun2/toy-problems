class LRU:
    
    def __init__(self,c):
        self.c=c
        self.list=[]
        self.inputs={}
        pass
    
    def put(self,key,value):
        if (key in self.list):
            self.list.pop(self.list.index(key))
            self.list.append(key)
            self.inputs[key]=value
        else:
            if (len(self.list) == self.c):
                temp = self.list.pop(0)
                del(self.inputs[temp])
            self.list.append(key)
            self.inputs[key]= value

        pass

    def get(self,key):
        if key in self.inputs:
            return self.inputs[key]
            self.list.append(key)
        return -1

    def get_cache(self):
        return str(self.list)
        pass