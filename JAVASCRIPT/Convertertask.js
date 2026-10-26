function convert() {
    let num = Number(document.getElementById("num").value);

    console.log("Decimal Number: " + num);
    console.log("Binary Number: " + num.toString(2));
    console.log("Hexadecimal Number: " + num.toString(16).toUpperCase());
}