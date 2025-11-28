/**
 * Time Complexity: O(m) per operation (m = length of word/prefix)
 * Space Complexity: O(n) (n = total characters stored across the trie)
 * Approach:
 * 1. Use a `TrieNode` with a `children` map and a boolean `isEndOfWord`; the Trie holds a `root` node.
 * 2. Insert: iterate each character of `word`, create child nodes as needed, and mark the final node's `isEndOfWord = true`.
 * 3. Search: traverse characters from the root; if any character is missing return `false`; after traversal return `node.isEndOfWord`.
 * 4. startsWith: traverse characters from the root; if any character is missing return `false`; if traversal completes successfully return `true`.
 */
class TrieNode {
    constructor() {
        this.children = {}
        this.isEndOfWord = false
    }
}
class Trie {
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let node = this.root
        for(let char of word) {
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true
    }

    search(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEndOfWord
    }

    startsWith(prefix){
        let node = this.root;
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return true
    }
}