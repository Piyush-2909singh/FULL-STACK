var obj=[];
document.getElementById("addnew").style("display","none");
document.getElementById("modifyThis").style("display","none");
function addobject(){
    let movie=document.getElementById("name").value;
    let rating=Number(document.getElementById("num").value);
    let newobj={name:movie,rating:rating}
    obj.push(newobj);
    console.log(obj);
}
function searchAndDisplay(){
    // let movie=document.getElementById("name").value;
    // let rating=Number(document.getElementById("num").value);
    // let index=obj.findIndex((item)=>item.name===movie);
    // if(index!==-1){
    //     obj[index].rating=rating;
    //     console.log(obj);
    // }
    // else{
    //     console.log("Movie not found");
    // }
    
}

function toggleButtons(){
    if(document.getElementById("addnew").style.display==="block"){
        document.getElementById("addnew").style.display="none";
        document.getElementById("modifyThis").style.display="block";
    }else(document.getElementById("addnew").style.display==="none"){
    document.getElementById("addnew").style.display="block";
    document.getElementById("modifyThis").style.display="none";}
}