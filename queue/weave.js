const Queue = require('./index')
const queue1 = new Queue();
const queue2 = new Queue();
queue1.enqueue(1)
queue1.enqueue(2)

queue2.enqueue('a')
queue2.enqueue('b')

const weave = (q1, q2) => {
    const q = new Queue();
    while (q1.peek() || q2.peek()) {
        if (q1.peek()) {
            q.enqueue(q1.dequeue())
        }
        if (q2.peek()) {
            q.enqueue(q2.dequeue())
        }
    }
    return q;
}
const q = weave(queue1, queue2)
console.log(q.dequeue())