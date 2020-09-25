
// write a function printReverse() that takes an array as an arguement
// and prints out the element in the array in reverse order
// dont reverse the array itself

var nums = [1,2,3,4];

function printReverse(nums){
	for (var i = 1; i <= nums.length; i++){
		console.log(nums[nums.length-i])
	}
}
printReverse(nums);

// write a function isUniform() which takes an array as an arguement and returns true 
// if all elements in the array are identical

var nonUniform = [1,2,3,4];
function isUniform(arr){
	for (var i = 0; i < arr.length; i++){
		if (arr[0] !== arr[i]){
			return false;
		}
	}
	return true;
}

isUniform(nonUniform);


