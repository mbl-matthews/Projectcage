/*
Keine ID ohne Datenbank
*/

function storeUser() {
//    console.log(document.querySelector("#name").value);
    let username,email,password1,password2,agb,gebdate,brief_desc,long_desc,goals,goals1,goals2,picture;

    username=document.querySelector("#username").value
    email=document.querySelector("#email").value;
    password1=document.querySelector("#pw1").value;
    password2=document.querySelector("#pw2").value;
    gebdate=document.querySelector("#gebdate").value;
    brief_desc=document.querySelector("#brief_desc").value;
    long_desc=document.querySelector("#long_desc").value;
    goals=document.querySelector("#goals").value;
    goals1=document.querySelector("#goals1").value;
    goals2=document.querySelector("#goals2").value;
    picture=document.querySelector("#picture").value;
    agb=document.querySelector("#agb").checked;

    if(password1 !== password2){
        alert("Passwoerter stimmen nicht ueberein!");
    }else if(!agb){
        alert("Bitte AGBs akzeptieren!");
    }else{
        let user = new User(20,username,email,password1,gebdate,picture,brief_desc,long_desc, {goals,goals1,goals2});
        localStorage.setItem(username, generateJson(user));
        alert("Erfolgrech");
    }
/*
    let storage_User = localStorage.getItem("username");
	console.log("Stored Object:",generateObject(storage_User));*/
}

function storeProject(){

    let picture,title,autor,slz,elz,shortdesc,longdesc,goals,goals1,goals2;

    title=document.querySelector("#titel").value;
    picture=document.querySelector("#file-input").value;
    autor=document.querySelector("#autor").value;
    slz=document.querySelector("#slz").value;
    elz=document.querySelector("#elz").value;
    shortdesc=document.querySelector("#shortdesc").value;
    longdesc=document.querySelector("#longdesc").value;
    goals=document.querySelector("#goals").value;
    goals1=document.querySelector("#goals1").value;
    goals2=document.querySelector("#goals2").value;

    let project = new Project(10,title,slz,elz,picture,autor,{goals,goals1,goals2},undefined,undefined,shortdesc,longdesc);
    localStorage.setItem(title, generateJson(project));
    alert("Erfolgrech");
}

function storeComment(){
    let comment, r1,r2,r3,r4,r5,rating;

    r1=document.querySelector("#r1").checked;
    r2=document.querySelector("#r2").checked;
    r3=document.querySelector("#r3").checked;
    r4=document.querySelector("#r4").checked;
    r5=document.querySelector("#r5").checked;
    comment=document.querySelector("#comment").value

    if(r1){
        rating=1;
    }else if(r2){
        rating=2;
    }else if(r3){
        rating=3;
    }else if(r4){
        rating=4;
    }else if(r5){
        rating=5;
    }else{
        console.log("weird error while processing ratings")
    }

    let comm = new Comments(100,comment,rating,undefined)
    //ohne db keine id
    localStorage.setItem(comment, generateJson(comm));
}



