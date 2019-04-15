let salaries = {
	"Vasya" : 500,
	"Petro" : 1200,
	"Maria" : 800
};

let sum = 0;
for (let key in salaries) {
	sum = sum + salaries[key];
}

console.log(sum);