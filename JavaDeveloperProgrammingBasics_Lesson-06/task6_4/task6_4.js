﻿let styles = [ "Jazz", "Blues" ];
console.log(styles);

styles.push("Rock-n-roll");
console.log(styles);

styles.splice(-2, 1, "Classic");
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift("Rap", "Reggae");
console.log(styles);