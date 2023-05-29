//Problem: https://leetcode.com/problems/memoize/description/

function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        }
        const val = fn.apply(this, args);
        cache[key] = val;
        return val;
    }
}


//Try this with an LRU to try an lower memory complexity on give more control on scalled systems 

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(limit = 1000) {
        this.size = 0;
        this.limit = limit;
        this.head = null;
        this.tail = null;
        this.cache = new Map();
    }

    get(key) {
        let node = this.cache.get(key);
        if (node) {
            this.remove(node);
            this.insertAtTop(node);
            return node.value;
        }
        return undefined;
    }

    set(key, value) {
        let node = this.cache.get(key);
        if (node) {
            this.remove(node);
            this.size--;
        } else if (this.size >= this.limit) {
            this.remove(this.tail);
            this.size--;
        }
        node = new Node(key, value);
        this.insertAtTop(node);
        this.cache.set(key, node);
        this.size++;
    }

    remove(node) {
        if (node.prev !== null) {
            node.prev.next = node.next;
        } else {
            this.head = node.next;
        }
        if (node.next !== null) {
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev;
        }
    }

    insertAtTop(node) {
        node.next = this.head;
        node.prev = null;
        if (this.head !== null) {
            this.head.prev = node;
        }
        this.head = node;
        if (this.tail === null) {
            this.tail = node;
        }
    }
}

function memoize2(fn) {
    const cache = new LRUCache();

    return function(...args) {
        const key = JSON.stringify(args);
        let val = cache.get(key);

        if (val !== undefined) {
            return val;
        }

        val = fn.apply(this, args);
        cache.set(key, val);

        return val;
    }
}

  
