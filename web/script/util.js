function sortProject_manager(projectlist) {
    function compare(a, b) {
        const ma = a.manager.toUpperCase();
        const mb = b.manager.toUpperCase();

        let comparison = 0;
        if (ma > mb) {
            comparison = 1;
        } else if (ma < mb) {
            comparison = -1;
        }
        return comparison;
    }

    projectlist.sort(compare);
}

function sortProject_startDate(projectlist) {
    function compare(a, b) {
        return a.start - b.start;
    }

    projectlist.sort(compare);
}

function sortProject_duration(projectlist) {
    function compare(a, b) {
        return -1 * (a.calcDuration() - b.calcDuration());
    }

    projectlist.sort(compare);
}


function welcome() {
    let fenster = window.open("", "Welcome", "width=500,height=250,left=600,top=400");
    fenster.document.write("<h1>Wilkommen auf Projketportal</h1><h2 id='lang'></h2>");
    let lang = fenster.document.getElementById("lang");
    lang.innerHTML += "Language: " + getLanguage();
    fenster.setTimeout("close()", 5000);
}

function getLoginBox(site){
    if(localStorage.getItem("currentUserID")==0){
        loginBox(site);
    }else{
        logoutBox();
    }
}

function loginBox(sites){
    let login = document.getElementById("login");
    let new_login = login.cloneNode(false);
    login.parentNode.replaceChild(new_login, login);
    let form = document.createElement("form");
    let name = document.createElement("input");
    let pw = name.cloneNode();
    let sub = document.createElement("input");
    let span = document.createElement("span");
    let a = document.createElement("a");

    form.setAttribute("action",'javascript:void(0);');
    form.setAttribute("id",'login_form')
    form.setAttribute("onsubmit","login();");

    name.setAttribute("type","text");
    name.setAttribute("id","uname");
    name.setAttribute("from","login_form");
    name.setAttribute("placeholder",translate("{Benutzername}"));

    pw.setAttribute("type","password");
    pw.setAttribute("id","pw");
    pw.setAttribute("placeholder",translate("{Passwort}"));

    sub.setAttribute("type","submit");
    sub.setAttribute("form","login_form");
    sub.setAttribute("value",translate("{Einloggen}"));

    a.setAttribute("href",sites+"registrieren.html");
    span.textContent=translate("{kein Konto?}");
    a.textContent=translate("{Registrieren}");
    span.appendChild(a);
    form.append(name,pw,sub,span)
    new_login.appendChild(form);
}

function logoutBox(){
    let login = document.getElementById("login");
    let new_login = login.cloneNode(false);
    login.parentNode.replaceChild(new_login, login);
    let btn = document.createElement("button");
    btn.textContent="Ausloggen";
    btn.setAttribute("class","logout");
    btn.addEventListener("click", e => {localStorage.setItem("currentUserID","0");loginBox("");});
    new_login.appendChild(btn);
}

function login(){


    let users=allStorage()[2];
    let user = document.querySelector("#uname").value;
    let pw = document.querySelector("#pw").value;

    if(user==""){
        localStorage.setItem("currentUserID","2");
        logoutBox();
        return;
    }
    for(let x of users){
        if(x.name==user){
            if(x.password==pw){
                localStorage.setItem("currentUserID",x.id);
                logoutBox();
                return;
            }else{
                alert("Name und Passwort stimmen nicht überein\n testuser -> Felder leer lassen")
            }
        }
    }
    alert("Name und Passwort stimmen nicht überein\n Test-User -> Felder leer lassen")
}

function index_projectList(number){
    let  list = document.getElementById("projectList");
    let projects=getLastProjects(number);
    for(let i=0; i<number; i++){
        if(projects[i]==undefined){
            continue;
        }
        let li=document.createElement("li");
        let a=document.createElement("a");
        li.appendChild(a);
        a.textContent=projects[i].name;

        a.addEventListener('click', (e) => {e.preventDefault(); setProjectID(projects[i].id) , window.location.href="sites/Projekt.html?id="+projects[i].id});
        list.appendChild(li);
    }
}

function setProjectID(id){
    localStorage.setItem("ProjectID",id);
}

function showAllProjects(){
    let projects=allStorage()[1];
    projects.sort((a,b) => (a.id-b.id)*-1);
    let section = document.getElementById("allProjects");
    for(let i=0; i<projects.length; i++){
        let article = document.createElement("article");
        let header = document.createElement("header");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let footer = document.createElement("footer");
        let span = document.createElement("span");
        let a = document.createElement("a");

        header.appendChild(h2);
        article.appendChild(header);
        article.appendChild(p);
        article.appendChild(footer);
        footer.appendChild(span);
        footer.appendChild(a);

        h2.textContent=projects[i].name + " - "+translate("{Autor}") + " : " +projects[i].manager;
        p.textContent=projects[i].brief_desc;

        if(projects[i].start == 'Invalid Date'){
            span.textContent=translate("{Projektzeitraum}")+ ": " + translate("{unbekannt}") ;
        }else{
            let date = projects[i].start.toISOString().substring(0, 10).split("-")
            span.textContent=translate("{Projektzeitraum}")+ ": " + date[2] + "." + date[1] + "." + date[0] ;
        }


        a.textContent=" Details"
        a.setAttribute("href","Projekt.html?id="+projects[i].id);
        a.setAttribute("onClick","localStorage.setItem('ProjectID',"+projects[i].id+")");
        section.appendChild(article);
    }
}

function showProject(){
	let id = null;
	let urlParams = new URLSearchParams(window.location.search);
	if(!urlParams.has('id')) {
		alert("Missing ID");
		return -1;
	} else {
		id = urlParams.get('id');
	}
	
    let project = generateObject(localStorage.getItem(id));
    if(!project){
        alert("showProject kaputt");
        return -1;
    }
	
    let header = document.getElementById("topcontainer");
    let logo = document.getElementById("logo");
    let milestones = document.getElementById("milestones");

    /*logo.setAttribute("src",project.picture)*/
    header.getElementsByTagName("h1")[0].textContent=project.name;
    header.getElementsByTagName("h2")[0].textContent=translate("{Autor}")+" : " +project.manager;


    if(project.start == 'Invalid Date'){
        if(project.end == 'Invalid Date'){
            header.getElementsByTagName("p")[0].textContent=translate("{Laufzeit}")+": " + translate("{unbekannt}") + " "+translate("{bis}")+ " " +translate("{unbekannt}");
        }else{
            let enddate = project.end.toISOString().substring(0, 10).split("-");
            header.getElementsByTagName("p")[0].textContent=translate("{Laufzeit}")+": " + translate("{unbekannt}") + " "+translate("{bis}")+ " " + enddate[2] + "." + enddate[1] + "." + enddate[0];
        }
    }else  if(project.end == 'Invalid Date'){
        let startdate = project.start.toISOString().substring(0, 10).split("-");
        header.getElementsByTagName("p")[0].textContent=translate("{Laufzeit}")+": " + startdate[2] + "." + startdate[1] + "." + startdate[0]  + " "+translate("{bis}")+ " " +translate("{unbekannt}");
    }else{
        let startdate = project.start.toISOString().substring(0, 10).split("-");
        let enddate = project.end.toISOString().substring(0, 10).split("-");
        header.getElementsByTagName("p")[0].textContent=translate("{Laufzeit}")+": " + startdate[2] + "." + startdate[1] + "." + startdate[0]  + " "+translate("{bis}")+ " " + enddate[2] + "." + enddate[1] + "." + enddate[0];
    }

    document.getElementById("shortdesc").getElementsByTagName("p")[0].innerHTML=project.brief_desc;
    document.getElementById("longdesc").getElementsByTagName("p")[0].innerHTML=project.long_desc;

    milestones = milestones.getElementsByTagName("ol")[0];
    let new_milestones = milestones.cloneNode(false);
    milestones.parentNode.replaceChild(new_milestones, milestones);

    for(let x of project.goals){
        let li = document.createElement("li");
        li.textContent=x;
        new_milestones.appendChild(li);
    }
    console.log(project)

    //Kommentare
    let comms = document.getElementById("comments")
    if(project.comments == null)return ;
    for(let id of project.comments){

        let object = generateObject(localStorage.getItem(id));
        let h4 = document.createElement("h4");
        let stars = document.createElement("h5");
        let text = document.createElement("p");
        console.log(object);
		let user_obj = generateObject(localStorage.getItem(object.user))
        console.log(user_obj);
        h4.textContent=user_obj.name;
        stars.textContent="Sterne: "+object.rating;
        text.textContent=object.comment;

        comms.appendChild(h4);
        comms.appendChild(stars);
        comms.appendChild(text);
    }



    //Seitenleiste
    let links = document.getElementById("longdesc").getElementsByTagName("p")[0]
    let desc = document.getElementById("descNav");

    let list = [];

    let all = links.getElementsByTagName("*");
    for (let i=0; i < all.length; i++) {
        if (all[i].tagName.charAt(0) == "H") {
            list.push(all[i]);
        }
    }

    let margin=5;

    let header_ref="header_"
    let header_id=0;
    for (let header of list){
        console.log(header.tagName)
        header.setAttribute("id",header_ref+header_id)
        let a = document.createElement('a');
        a.textContent=header.textContent
        a.setAttribute("style","margin-left:"+margin*header.tagName.substr(1)+"px")
        a.setAttribute("href","#"+header_ref+header_id)
        desc.appendChild(a)
        desc.appendChild(document.createElement('br'));
        header_id++;
    }

    console.log(list)

}




