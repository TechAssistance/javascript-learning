//Create a data structure that implements the requirements of a Least Recently Used (LRU) cache with O(1) average time complexity.

//Initialize an object with a maxium capacity of elements.
//getItem Return the value of the key. Update cache with the most recently used key.
//putItem Create or update a key value pair in the cache. Evict the least recently used key if the size of keys exceeds the max capacity.


//LRU Cache object declaration
class LRUCache {
    
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = [];
        this.cache.length = capacity;
    }   

    getItem(x) {
        return this.cache[x]
    }

    putItem(x) {
        if (this.cache.length > this.capacity) {
            this.cache.shift();
        }
        this.cache.push(x);
    }

}

//LRU Cache initialization
const cache = new LRUCache(4);
console.log(cache);
cache.putItem(1);
cache.putItem(2);
cache.putItem(3);
cache.putItem(4);
console.log(cache);
cache.putItem(5);
console.log(cache);
cache.putItem(5);
console.log(cache);
console.log(cache.getItem(0));


//What we missed:
//1. USE KEYS (here we dont use keys)
//2. We also fail the puts as we didnt use a map to then use keys so we are not finding them by key name. Things like "lastPageViewed" key or something we could then update in the LRU etc. 
