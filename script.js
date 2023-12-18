const extendHex = (shortHex) => {
  // write your code here
	let i=shortHex.length-3;      // starting index
	let isCapital=false;
	let output="#";
	while(i<shortHex.length){
		let code=shortHex.charCodeAt(i);
		if(code>=65 && code<=90) isCapital=true;
		output+= shortHex[i] + shortHex[i];
	}
	return isCapital ? output.toUpperCase() : output;
};

// Do not change the code below.
// const shortHex = prompt("Enter Short Hex.");
// alert(extendHex(shortHex));
