function hasProperty(c, d) {
    for (let j = 0; j < d.length; j++) {
        if (d[j] === c) {
            return d[j]
        }
    }
    return null
}


function deepequal(a, b){

    if ((a === null && b != null) || (a != null && b === null)){
        return false
    }

    else if (a === null && b === null){
        return true
    } 
    
    
    else {
        if (typeof a != "object" && typeof b != "object"){
            
            if (typeof a === typeof b){
                if (a === b){
                    return true
                }  
                else {
                    return false
                }
            } 
            
            else {
                return false
            }
        } 
        
        
        else if (typeof a === "object" && typeof b === "object"){
    
            if (Object.keys(a).length != Object.keys(b).length){
                return false
            } 
            
            else {
                for (let i = 0; i < Object.keys(a).length; i++){
                    const keyofa = Object.keys(a)[i]
                    const keyofb = hasProperty(Object.keys(b), keyofa)

                    if (keyofb === null) {
                        return false
                    } 
                    
                    else {
                        if (typeof keyofa === typeof keyofb) {
                            if (!(deepequal(a[keyofa], b[keyofb]))) {
                                return false
                            }        
                        }
                    }
                }
                return true
            }
        } else {
            return false
        }
    }


    
}





const object1 = {
    f: "f",
    a: "a", 
    c: {
        e: "e",
    }
}


const object2 = {
    f: "f",
    b: "b",
    c: {
        d: "d"
    }
}

console.log(deepequal('abhi', 'abhi'))
console.log(deepequal('abhi', 'abhiram'))
console.log(deepequal(1, 'abhiram'))

console.log(deepequal(1, object1))
console.log(deepequal(object2, object1))