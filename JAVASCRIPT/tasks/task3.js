

function checkTrafficLight() {
    let lightColor = document.getElementById("lightColor").value;

    if(lightColor=="Red"){
        console.log("Stop");
    }
    else if(lightColor=="Orange"){
        console.log("Slow down");
    }
else{
    console.log("Go");
}
}