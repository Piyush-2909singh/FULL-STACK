
function Factorial() {
    let n = Number(document.getElementById("number").value);
    function calculate(n) {
        if (n === 0 || n === 1) {
            return 1;
        }

        return n * calculate(n - 1);
    }

    let ans = calculate(n);

    document.getElementById("result").innerText =
        "Factorial is: " + ans;
}
