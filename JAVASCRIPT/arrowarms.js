
function checkArmstrong() {
    let input = document.getElementById("num").value;
    let num = Number(input);

   
    let arr = String(num).split("");
    let power = arr.length;
    let sum = 0;

    for (let digit of arr) {
        sum += Number(digit) ** power;
    }

    if (sum === num) {
        document.getElementById("result").innerText =
            num + " is an Armstrong Number.";
    } else {
        document.getElementById("result").innerText =
            num + " is not an Armstrong Number.";
    }
}
