// Import
const Block = require("./block");

/***  Test der Block-Funktionalität  */
// 

// console.log(Block.genesis().toString());


const testBlock = Block.mineBlock(Block.genesis(),"Bank an Kasse 1000,-")
console.log(testBlock.toString());
