/* note: this implementation has a so many collision,
i will solve this collision problem as soon as possible.
*/

class hashTable {
    table = new Array(2);
    sizeCounter = 0; // if array is full dont add any item
    loadfactor = this.sizeCounter / this.table.length; // for later work for size fix

    hashStringToInt(key){
        let hashValue = 0;
        const stringKey = key.toString();
      
        for (let index = 0; index < stringKey.length; index++) {
          const charCode = stringKey.charCodeAt(index);
          hashValue += charCode;
        }
      
        return hashValue;
    };

    setItem(key, value){
        const idx = this.hashStringToInt(key);
        if (this.sizeCounter <= this.table.length){
            if (!this.table[idx]){
                this.sizeCounter++
                this.table[idx] = value;
            }
            else{
                console.log("this key already taken");
            }
        }
        else{
            console.log("size is full please update size") // maybe we can write later function about fix the size 
        }
    };

    getItem(key){
        const idx = this.hashStringToInt(key);
        return this.table[idx];
    };
};

const myHashmap = new hashTable;

myHashmap.setItem("first", "aynen");
myHashmap.setItem("second", "oyle");
myHashmap.setItem("third", "kolay gelsin");
console.log("first:", myHashmap.getItem("first"));
console.log("second:", myHashmap.getItem("second"));
console.log("third:",myHashmap.getItem("third"));

console.log(myHashmap.table);
