function isEmpty(obj) {
	let counter = 0;
	for (let key in obj) {
		counter++;
	}

	if (counter == 0)
		return true
	else
		return false
}

let schedule = {};
console.log(isEmpty(schedule));

schedule["8:30"] = "good morning!";
console.log(isEmpty(schedule));