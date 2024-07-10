class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(head=null){
        this.head = head;
        this.length = 0;
    }

    append(value){
        let newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
        }else{
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.length += 1;
    }
    size(){
        return this.length;
    }
    headFirst(){
        return this.head.data;
    }
    tail(){
        let currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        return currentNode.data;
    }

    insertAt(index,value){
        let newNode = new Node(value);
        let node = this.head;
        if(index == 0){
            newNode.next = node;
            this.head = newNode;
            return;
        }

        while(--index){
            if(node.next !== null){
                node  = node.next;
            }else{
                throw Error('Index out of bound');
            }
        }
        let tempVal = node.next;
        node.next = newNode;
        newNode.next = tempVal;
    }

    prepend(value){
        this.insertAt(0,value)
        this.length += 1;
    }
    at(index){
        let currentNode = this.head;
        let count = 0;
        while(count < index){
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.data;
    }
    removeAt(index){
        let node = this.head;
        if(index == 0){
            if(node !== null){
                node = node.next;
                this.head = node;
            }else{
                throw Error('Index out of bound');
            }
            return;
        }
        while(--index){
            if(node.next !== null){
                node = node.next;
            }else{
                throw Error('Index out of bound');
            }
        }
        node.next = node.next.next;
    }
    pop(){
        this.removeAt(this.size()-1);
        this.length--;
    }
    contains(value){
        let currentNode = this.head;
        let count = 0;
        while(currentNode.next !== nul && currentNode.data !== value){
            currentNode = currentNode.next;
            count++;
        }
        return currentNode.data === value;
    }

    find(value){
        let currentNode = this.head;
        let count = 0;
        while(currentNode.next !== null && currentNode.data !== value){
            currentNode = currentNode.next;
            count++;
        }
        return currentNode.data === value ? count : null;
    }

    toString(){
        let currentNode = this.head;
        let result = `(${currentNode.data})->`
        while(currentNode.next !== null ){
            currentNode = currentNode.next;
            result += `(${currentNode.data})->`
        }
        return result;
    }
}
let l = new LinkedList()
l.append(17)
l.append(90)
l.append(34)
l.append(87)
l.prepend(76)
console.log(l.size())
console.log(l.toString())