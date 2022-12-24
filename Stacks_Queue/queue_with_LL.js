//FIFO Princple

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val){  // add at end
        let newNode = new Node(val)

        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }

        return ++this.size
    }

    dequeue(){   // remove from beginning
        if(!this.size) return null

        let remove = this.first
        this.first = remove.next
        if(this.length === 0){
            this.last = null
        }
        this.size--
        return remove.val
    }

    peek(){
        return this.first.val
    }
}

let queue = new Queue()

queue.enqueue(5)
queue.enqueue(2)
queue.enqueue(3)



console.log(queue.peek())