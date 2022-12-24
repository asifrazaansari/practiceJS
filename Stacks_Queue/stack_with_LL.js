//LIFO Princple

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

 
    add(val){
        let newNode = new Node(val)

        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else{
            newNode.next = this.first
            this.first = newNode   
        }
        this.size++
        return this
    }


    remove(){
        if(!this.first) return undefined
        let curr = this.first
        this.first = curr.next
        if(this.length === 0){
            this.last = null
        }
        this.size--
        return curr.val
    }

    peek(){
        if(this.size <= 0) return null
        return this.first.val  // need to check
    }
}

let stack = new Stack()

stack.add(5)
stack.add(3)
stack.add(2)
stack.remove()

console.log(stack)