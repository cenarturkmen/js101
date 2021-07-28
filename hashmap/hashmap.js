class hashTable {
    table = new Array(44);
    sizeCounter = 0; // if array is full dont add any item
    loadfactor = this.sizeCounter / this.table.length; // for later work for size fix

    hashStringToInt(key){
        let hash = 17;
        //for (let i = 0; i<key.length; i++){
        hash = (13 * hash * key.charCodeAt()) % this.table.length;
        //}
        return hash;
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
console.log(myHashmap.getItem("first"));
console.log(myHashmap.getItem("second"));
console.log(myHashmap.getItem("third"));

// must be return "this key already taken"
myHashmap.setItem("first", "evet");
// must be return "aynen"
console.log(myHashmap.getItem("first"));

console.log(myHashmap.table);
