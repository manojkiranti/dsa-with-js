class Queue {
    constructor() {
        this.data = [];
    }
    enqueue(data) {
        this.data.push(data);
    }
    dequeue() {
        if (this.isEmpty()) return null;
        return this.data.pop();
    }
    peek() {
        if (this.isEmpty()) return null;
        return this.data[this.data.length - 1]
    }
    size() {
        return this.data.length;
    }
    isEmpty() {
        return this.data.length === 0;
    }
}

// const queue = new Queue();
// queue.enqueue(1)
// queue.enqueue(1)

// console.log(queue.dequeue());

module.exports = Queue;
