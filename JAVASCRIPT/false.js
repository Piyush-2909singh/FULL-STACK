// let a = 0;

// if (a) {
//     console.log("True");
// } else {
//     console.log("False");
// }


// let name = "";

// if (name) {
//     console.log("Name exists");
// } else {
//     console.log("Name is empty");
// }



// console.log(Boolean(false));     // false
// console.log(Boolean(0));         // false
// console.log(Boolean(""));        // false
// console.log(Boolean(null));      // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(NaN));       // false

// console.log(Boolean("false"));   // true
// console.log(Boolean("0"));       // true
// console.log(Boolean([]));        // true
// console.log(Boolean({}));        // true







// let arr=[1,2,3,4,5];
// console.log(arr);
// let newarr=arr.map((n)=>{return n**2;});
// console.log(newarr);


let arr=[1,2,3,4,5];
 console.log(arr);
// let newarr=arr.map(
//         if(n%2==0){
//             return 
//         }

// );
// console.log(newarr);

let naArr=arr.filter(n=>n>3);
console.log(naArr);

let narr1=arr.find(n=>n>3);
console.log(narr1);

let nArr2=arr.reduce((sum,n)=>sum+n,0);
console.log(nArr2);

let nArr3=arr.reduce((sub,n)=>sub-n,0);
console.log(nArr3);
