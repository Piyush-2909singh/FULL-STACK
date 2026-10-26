function calculateArea(){
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    let area = length * width;
    document.getElementById("result").innerText = "Area of Rectangle is: " + area;
}