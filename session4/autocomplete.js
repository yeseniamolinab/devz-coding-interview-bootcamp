class TrieNode {
    constructor(data) {
        this.data = data;
        this.children = new Map();
        this.isTerminal = false;
    }

    getChild(data) {
        return this.children.get(data);
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(' ');
    }

    addWord(word) {
        let current = this.root;
        
        for(let i = 0; i < word.length; i++) {
            let letter = word[i];
            let child = current.getChild(letter);
            if(child !== undefined) {
                current = child;
            }
            else {
                current.children.set(letter ,new TrieNode(letter));
                current = current.getChild(letter);
            }
        }
        current.isTerminal = true;
    }

    build(list) {
        list.forEach(word => {
            this.addWord(word);
        });
    }

    getNext(prefix) {
        let lastNode = this.getLast(prefix);
        return [...lastNode.children.keys()];
    }

    getLast(prefix) {
        let lastNode = this.root;
        for(let i = 0; i < prefix.length; i++) {
            let next = lastNode.children.get(prefix[i]);
            if(!next) {
                break;
            }
            lastNode = next;
        }

        return lastNode;
    }

    getAutoComplete(prefix) {
        let lastNode = this.getLast(prefix);
        let output = [];
        lastNode.children.forEach(child => {
            // this doesn't work if I send 'd' as prefix because since d is not terminal 
            if(child.isTerminal) { 
                output.push(prefix + child.data)
            }
        });
        
        return output;
    }
}

function test1() {
    let trie = new Trie();
    trie.build(['cat', 'car', 'cap', 'can', 'dog']);
    console.log(trie.getNext('ca'));
    console.log(trie.getAutoComplete('ca'));
    console.log(trie.getAutoComplete('do'));
}

test1();