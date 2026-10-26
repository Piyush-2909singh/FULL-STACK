
let profile = "";

function generateProfile() {
    let firstname = document.getElementById("firstname").value;

    let favouritenumber = document.getElementById("favouritenumber").value;

    let isstudent = document.getElementById("isstudent").checked;

    profile = firstname + " " + favouritenumber + " " + isstudent;

    console.log(profile);
}
