//Using module File Systemby node
//importing readFileFunctiion and writteFileSync
const { readFileSync, writeFileSync} = require('fs')

//reading the files
const first = readFileSync('./files/file1.txt')
const second = readFileSync('./files/file2.txt')

//Writing in the files
writeFileSync('./files/content.ttxt', `Here the result ${first} and ${second}`,{flag:  'a'})