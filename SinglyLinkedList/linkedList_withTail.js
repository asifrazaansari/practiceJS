// singly linked list with tail it will help to push element in TC O(1)

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        let curr = this.head
        while (curr.next.next !== null) {
            curr = curr.next
        }
        this.tail = curr
        let poped = curr.next
        curr.next = null
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return poped
    }

    shift() {
        if (!this.head) return undefined

        let curr = this.head
        this.head = curr.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return curr
    }

    unshift(val) {
        let newNode = new Node(val)

        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null

        let count = 0
        let curr = this.head

        while (count !== index) {
            curr = curr.next
            count++
        }
        return curr
    }

    set(index, val) {
        let foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val
            return true
        }
        return false
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        let newNode = new Node(val)
        let prev = this.get(index - 1)
        let temp = prev.next
        prev.next = newNode
        newNode.next = temp
        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop()

        let prev = this.get(index - 1)
        let removedNode = prev.next
        prev.next = removedNode.next
        this.length--
        return removedNode
    }

    reverse() {
        //[this.head, this.tail] = [this.tail, this.head]

        let node = this.head
        this.head = this.tail
        this.tail = node

        let prev = null
        for (let i = 0; i < this.length; i++) {
            let next = node.next
            node.next = prev

            prev = node
            node = next
        }
        return this
    }

    print() {
        const arr = []
        let current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
       return arr
    }

}

let list = new SinglyLinkedList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)
// list.pop()
// list.unshift(5)
console.log(list.print())
list.reverse()
console.log(list.print())
// console.log(list)