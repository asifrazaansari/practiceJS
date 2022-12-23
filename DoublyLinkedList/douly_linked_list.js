// doubly linked list with tail

class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        let newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        if(!this.head) return undefined
        let popedNode = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.tail = popedNode.prev
            this.tail.next = null
            popedNode.prev = null
        }
        this.length--
        return popedNode
    }

    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    shift(){
        if(!this.head) return undefined
        let oldHead = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }

    get(index){
        if(index < 0 || index >= this.length) return null

        let count, current

        if(index <= this.length/2){
            count = 0
            current = this.head
            while(count != index){
                current = current.next
                count++
            }
        }else{
            count = this.length - 1
            current = this.tail

            while(count !== index){
                current = current.prev
                count--
            }
        }
        return current
    }

    set(index, val){
        let foundNode = this.get(index)

        if(foundNode !== null){
            foundNode.val = val
            return true
        }
        return false
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false
        if(index === 0) return !!this.unshift(val)
        if(index === this.length) return !!this.push(val)

        let newNode = new Node(val)
        let beforeNode = this.get(index - 1)
        let afterNode = beforeNode.next

        beforeNode.next = newNode
        newNode.prev = beforeNode
        newNode.next = afterNode
        afterNode.prev = newNode

        this.length++
        return true
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()

        let removeNode = this.get(index)
        removeNode.prev.next = removeNode.next
        removeNode.next.prev = removeNode.prev
        removeNode.next = null
        removeNode.prev = null
        
        this.length--
        return removeNode
    }
}

let list = new DoublyLinkedList()

list.push(1)
list.push(12)
list.push(123)
// list.pop()
// list.pop()
list.remove(1)
console.log(list)