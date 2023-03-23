let vbackgroundcolor, vtextcolor, vname;

function setColor(op, color){

    if (op==1){
        document.body.style.backgroundColor=color;
        vbackgroundcolor=color;
    }else{
        document.body.style.color=color;
        vtextcolor=color;
    }
}

function save(){
    vname = document.getElementById("fname").value;
    
    let form = document.getElementById("fconf");
    form.style.display="none"; 

    localStorage.backgroundColor = vbackgroundcolor;
    localStorage.textcolor = vtextcolor;
    localStorage.name = vname;


}


function showOptions(){
    let form = document.getElementById("fconf");

    form.style.display="block";
}

function init(){
    if (localStorage.name){
        vbackgroundcolor = localStorage.backgroundColor;
        vtextcolor = localStorage.textcolor;
        vname = localStorage.name;

        setColor(1, vbackgroundcolor);
        setColor(2, vtextcolor);
        document.getElementById("painel").innerHTML="Welcome back " + vname + " <hr>"
    }
}

window.addEventListener("load", init);