class Stack {
    constructor() {
        this.items = []
    }

    push(ele){
       this.items.push(ele)
       return this
    }

    pop(){
        if(this.items.length <= 0) return null
        return this.items.pop()
    }

    peek(){
        if(this.items.length <= 0) return null
        return this.items[this.items.length - 1]
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

let stack = new Stack()

stack.push(4)
stack.push(2)
stack.push(9)
//stack.clear()

console.log(stack)