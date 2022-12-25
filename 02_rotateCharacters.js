/**
 * makeRotate expects string, returns rotate(), 
 * rotate() returns string with all char rotated by 1
 */

function makeRotate(sentence) {
  	let sentenceArray = sentence.split(""); // split input string into array
  	let returnArray = sentenceArray; // var used to store string to be returned later 
  
	function rotate() {
		for(let char = 0; char < sentenceArray.length; char++) {
			if(sentenceArray[char] === " "){
				continue;
			} else {
				let charAlphabetIndex = sentenceArray[char].charCodeAt() - 97; // the n-th letter of the alphabet, but 0 indexed. a is 0
				let rotatedAlphabetIndex = (charAlphabetIndex + 1) % 26;      // char after it has been rotated
				let returnChar = String.fromCharCode(rotatedAlphabetIndex + 97);
				returnArray[char] = returnChar;
			}
    	} 
		return returnArray.join("");
  	}
  	return rotate;
}

module.exports = makeRotate

const rotate = makeRotate("hello world")

console.log(rotate()) // ifmmp xpsme
console.log(rotate()) // jgnnq yqtnf
console.log(rotate()) // khoor zruog
console.log(rotate()) // lipps asvph
console.log(rotate()) // mjqqt btwqi
console.log(rotate()) // nkrru cuxrj
console.log(rotate()) // olssv dvysk
console.log(rotate()) // pmttw ewztl
console.log(rotate()) // qnuux fxaum
console.log(rotate()) // rovvy gybvn
console.log(rotate()) // spwwz hzcwo
console.log(rotate()) // tqxxa iadxp
console.log(rotate()) // uryyb jbeyq
console.log(rotate()) // vszzc kcfzr
console.log(rotate()) // wtaad ldgas
console.log(rotate()) // xubbe mehbt
console.log(rotate()) // yvccf nficu
console.log(rotate()) // zwddg ogjdv
console.log(rotate()) // axeeh phkew
console.log(rotate()) // byffi qilfx
console.log(rotate()) // czggj rjmgy
console.log(rotate()) // dahhk sknhz
console.log(rotate()) // ebiil tloia
console.log(rotate()) // fcjjm umpjb
console.log(rotate()) // gdkkn vnqkc
console.log(rotate()) // hello world