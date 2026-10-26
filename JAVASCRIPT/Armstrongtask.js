
function checkArmstrong() {
    let a = Number(document.getElementById("num").value);
    let temp = a;
    let sum = 0;
    let digits = a.toString().length;

    while (temp > 0) {
        let b = temp % 10;
        sum = sum + b ** digits;
        temp = Math.floor(temp / 10);
    }

    if (sum === a && a >= 0) {
        showResult(a + " is an Armstrong number");
    } else {
        showResult(a + " is not an Armstrong number");
    }
}

function showResult(message) {
    document.getElementById("result").innerText = message;
}
