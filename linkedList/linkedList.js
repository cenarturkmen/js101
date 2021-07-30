
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    } 
}

class linkedList{
    constructor(){
        this.head = null;
    };
    // insert new node at front of the list
    push(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    // insert new node at end of the list
    append(data){
        const newNode = new Node(data);

        if(this.head == null){
            this.head = newNode;
        }

        let temp = this.head;

        while (temp.next != null){
            temp = temp.next;
        }
        temp.next = newNode;
    }
    // delete node that given value 
    deleteNode(key){
        let temp = this.head;
        let prev = temp;
        if(temp != null){
            if (temp.data == key){
                this.head = temp.next;
                temp = null;
            }
        }
        while(temp != null){
            if(temp.data == key){
                break;
            }
            prev = temp;
            temp = temp.next;
        }
        if(temp == null){
            return
        }
       prev.next = temp.next;
       temp = null;
    }
    // length of linked list
    lengthLL(){
        let counter = 0
        let temp = this.head;
        while(temp != null){
            counter++;
            temp = temp.next;
        }
        return counter;
    }
    // return index of the given value 
    search(searchData){
        let idx = 0;
        let temp = this.head;
        if(temp != null){
            while(temp.next != null){
                if(temp.data == searchData){
                    return idx;
                }
                else{
                    temp = temp.next;
                    idx++;
                }
            }
        }
    
    }
    // reverse of linkedlist 
    reverse(){
        let prev = null;
        let current = this.head;
        let next = null;
        while(current != null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        return this.printLL();
    }  

    // utility function* print ll
    printLL(){
        let temp = this.head;
        while (temp != null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

const myLinkedList = new linkedList;
myLinkedList.push(22);
myLinkedList.push(23);
myLinkedList.push(24);
myLinkedList.push(25);
myLinkedList.push(26);
myLinkedList.append(1);
myLinkedList.deleteNode(24);
myLinkedList.printLL();
//console.log(myLinkedList.lengthLL());
//console.log(myLinkedList.search(23));
//console.log("reverse");
myLinkedList.reverse();
console.log("end.")