class Queue{
    constructor(){
        this.items = []
    }

    enqueue(ele){
        return this.items.push(ele)
    }

    dequeue(){
        if(this.items.length <= 0) return null
        return this.items.shift()
    }

    peek(){
        if(this.items.length <= 0) return null
        return this.items[0]
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }

    clear(){
        return this.items = []
    }
}

let queue = new Queue()

queue.enqueue(5)
queue.enqueue(2)


console.log(queue.peek())