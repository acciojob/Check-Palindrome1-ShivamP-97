// complete the given function

function palindrome(str){
	const clean=str.replace(/[^a-z0-9]/gi,"").toLowerCase();
	return clean===clean.split("").reverse().join("");
}
module.exports = palindrome
