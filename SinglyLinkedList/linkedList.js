class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}


class SinglyLinkedList {
    constructor(){
        this.head = null
        this.length = 0
    }

    unshift(val){
        let newNOde = new Node(val)
        if(!this.head){
            this.head = newNOde
        }else{
            newNOde.next = this.head
            this.head = newNOde
        }
        this.length++
        return this
    }

    shift(){
        if(!this.head) return undefined
        let currHead = this.head
        this.head = currHead.next
        this.length--
        return currHead
    }

    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
        }else{
            let currHead = this.head
            while(currHead.next !== null){
                currHead = currHead.next
            }
            currHead.next = newNode
            this.length++
            return this
        }
    }

    pop(){
        if(!this.head) return undefined
        let currHead = this.head
        while(currHead.next.next !== null){
            currHead = currHead.next
        }
        let poped = currHead.next
        currHead.next = null
        this.length--
        return poped
    }

    get(index){
        if(index < 0 || index >= this.length) return null
        let count = 0
        let current = this.head
        while(index !== count){
            current = current.next
            count++
        }
        return current
    }

    set(index, val){
        let foundNode = this.get(index)

        if(foundNode){
            foundNode.val = val
            return true
        }
        return false
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false
        if(index === 0) return !!this.unshift(val) // !! using for returning true instead of value
        if(index === this.length) return !!this.push(val)

        let newNode = new Node(val)
        let prevNode = this.get(index - 1)
        let temp = prevNode.next
        prevNode.next = newNode
        newNode.next = temp
        this.length++
        return true
    }

    remove(index){
        if(index < 0 || index >= this.length) return false
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()

        let prev = this.get(index - 1)
        let removed = prev.next
        prev.next = removed.next
        this.length--
        return removed
    }

    reverse(){
        let prev = null
        let curr = this.head

        while(curr !== null){
            // save next
            let next = curr.next
            //reverse
            curr.next = prev
            // updation
            prev = curr
            curr = next
        }
        this.head = prev
    }

    print() {
        var arr = []
        var current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
    
    // recurReverse(){
    //     if(this.head === null || this.head.next === null) return this.head

    //     let newHead = this.recurReverse(this.head.next)
    //     this.head.next.next = this.head
    //     this.head.next = null

    //     return newHead
    // }
}




let list = new SinglyLinkedList()
list.unshift(4)
//list.unshift(9)
//list.shift()
list.push(6)
list.push(5)
//console.log(list.pop())
list.reverse()
console.log(list.shift())
// console.log(list.get(1))
// console.log(list.set(1,3))
//console.log(list)