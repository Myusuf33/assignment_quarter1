"use strict";
let guestNames = ['yousaf', 'hamza ', 'ali'];
console.log(guestNames[2], "can't make the dinner.");
let newPerson = "hammad";
console.log("Modify list and replace ", guestNames[2], "with", newPerson);
guestNames[2] = newPerson;
for (let loop = 0; loop < guestNames.length; loop++) {
    if (loop == 2) {
        console.log("Hy", guestNames[loop], "i would like to invite dinner at zinger burger");
    }
    else {
        console.log(guestNames[loop]);
    }
}
