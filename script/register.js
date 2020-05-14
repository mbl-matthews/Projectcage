navigator.geolocation.watchPosition(showPosition);
function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude +"  Longitude: " + position.coords.longitude);
}



function registerFkt() {
//    console.log(document.querySelector("#name").value);
    let name,vname,benutzername,email,password1,password2,agb;
    name=document.querySelector("#name").value;
    vname=document.querySelector("#vname").value
    benutzername=document.querySelector("#benutzername").value
    email=document.querySelector("#mail").value;
    password1=document.querySelector("#password1").value;
    password2=document.querySelector("#password2").value;
    agb=document.querySelector("#agb").checked;
    alert("Erfolgrech");
    // console.log(name,vname,benutzername,email,password2,password1,agb)
    console.log(agb);
    new User(name)
    localStorage.setItem("name",name);
	console.log(localStorage.getItem("name"));
}