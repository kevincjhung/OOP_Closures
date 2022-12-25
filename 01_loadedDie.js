function makeLoadedDie(list) {
	let theRoll = 0;
	let maxPos = list.length;
	
	function roll() {
		let theActualRoll = list[theRoll];
		
		if(theRoll == maxPos - 1){
			theRoll = 0;
		} else {
			theRoll++;
		}
		return theActualRoll;
	}
	return roll;
}
module.exports = makeLoadedDie;

const roll = makeLoadedDie([5, 4, 6])

console.log(roll());  // 5
console.log(roll());  // 4
console.log(roll());  // 6
console.log(roll());  // 5
console.log(roll());  // 4
console.log(roll());  // 6
console.log(roll());  
console.log(roll());  
