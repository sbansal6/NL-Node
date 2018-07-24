// 1 .Tokenization

"use strict"
const natural  = require('natural');
const print = console.log
const WordTokenizer = new natural.WordTokenizer();
const SentenceTokenizer = new natural.SentenceTokenizer();
const text = "Mary had a little lamb. Her fleece was white as snow."

const sents = SentenceTokenizer.tokenize(text)
//print(sents)
const words = sents.map((s) => {
   return WordTokenizer.tokenize(s)
})
//print(words)

// 2. Stop word removal

