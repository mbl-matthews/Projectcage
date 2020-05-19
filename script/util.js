function sortProject_manager(projectlist) {
    function compare(a, b) {
        const ma = a._manager.toUpperCase();
        const mb = b._manager.toUpperCase();

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
        return a._start - b._start;
    }

    projectlist.sort(compare);
}

function sortProject_duration(projectlist) {
    function compare(a, b) {
        return -1 * (a.calcDuration() < b.calcDuration());
    }

    projectlist.sort(compare);
}


function getLanguage() {
    let language = window.navigator.language;
    return language;
}


function welcome() {
    let fenster1 = window.open("", undefined, "width=500,height=250,left=600,top=400");
    fenster1.document.write("<h1>Wilkommen auf Projketportal</h1><h2 id='lang'></h2>");
    let lang = fenster1.document.getElementById("lang");
    lang.innerHTML += "Language: " + getLanguage();
    fenster1.setTimeout("close()", 5000);
}

function loginBox(){
    localStorage.setItem("currentUserID","0");
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
    name.setAttribute("placeholder","Benutzername");

    pw.setAttribute("type","password");
    pw.setAttribute("id","pw");
    pw.setAttribute("placeholder","Passwort");

    sub.setAttribute("type","submit");
    sub.setAttribute("form","login_form");
    sub.setAttribute("value","Einloggen");

    a.setAttribute("href","sites/registrieren.html");
    span.textContent="kein Konto?";
    a.textContent="Registrieren";
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
    btn.addEventListener("click", e => loginBox());
    new_login.appendChild(btn);
}


function login(){
    let users=allStorage()[2];
    let user = document.querySelector("#uname").value;
    let pw = document.querySelector("#pw").value;

    for(let x of users){
        if(x._name==user){
            if(x._password==pw){
                localStorage.setItem("currentUserID",x._id);
                logoutBox();
            }else{
                //alert("Passwort falsch")
            }
        }
    }

}

/*


registrieren typw password IN JAVASCRIPT

 */





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
        a.textContent=projects[i]._name;

       // a.setAttribute("href","sites/Projekt.html");
        a.addEventListener('click', (e) => {e.preventDefault(); setProjectID(projects[i]._id) , window.location.href="sites/Projekt.html"});
        list.appendChild(li);
    }
}

function setProjectID(id){
    localStorage.setItem("ProjectID",id);
}

function showAllProjects(){
    let projects=allStorage()[1];
    projects.sort((a,b) => (a._id-b._id)*-1);
    console.log(projects)
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

        h2.textContent=projects[i]._name + " - " + projects[i]._manager;
        p.textContent=projects[i]._brief_desc;

        let date = projects[i]._start.toISOString().substring(0, 10).split("-")
        span.textContent="Projektzeitraum: " + date[2] + "." + date[1] + "." + date[0] ;

        a.textContent=" Details"
        a.setAttribute("href","Projekt.html");
        a.setAttribute("onClick","localStorage.setItem('ProjectID',"+projects[i]._id+")");
        section.appendChild(article);
    }
}

function showProject(id){
    let project = generateObject(localStorage.getItem(id));
    if(!project){
        alert("showProject kaputt");
        return -1;
    }

    let header = document.getElementById("topcontainer");
    let logo = document.getElementById("logo");
    let milestones = document.getElementById("milestones");
    let startdate = project._start.toISOString().substring(0, 10).split("-");
    let enddate = project._end.toISOString().substring(0, 10).split("-");

  /*
    logo.setAttribute("src",project._picture)*/
    header.getElementsByTagName("h1")[0].textContent=project._name;
    header.getElementsByTagName("h2")[0].textContent="Autor:" +project._manager;

    header.getElementsByTagName("p")[0].textContent="Laufzeit: " + startdate[2] + "." + startdate[1] + "." + startdate[0]  + " bis " + enddate[2] + "." + enddate[1] + "." + enddate[0];

    document.getElementById("shortdesc").getElementsByTagName("p")[0].textContent=project._brief_desc;
    document.getElementById("longdesc").getElementsByTagName("p")[0].textContent=project._long_desc;

    milestones = milestones.getElementsByTagName("ol")[0];
    let new_milestones = milestones.cloneNode(false);
    milestones.parentNode.replaceChild(new_milestones, milestones);

    for(let x of project._goals){
        let li = document.createElement("li");
        li.textContent=x;
        new_milestones.appendChild(li);
    }
    console.log(project)

    //Kommentare
    let comms = document.getElementById("comments")
    if(project._comments == null)return ;
    for(let id of project._comments){

        let object = generateObject(localStorage.getItem(id));
        let h4 = document.createElement("h4");
        let stars = document.createElement("h5");
        let text = document.createElement("p");
        console.log(object)
        console.log(generateObject(localStorage.getItem(object._user)))
        h4.textContent=generateObject(localStorage.getItem(object._user))._name;
        stars.textContent="Sterne: "+object._rating;
        text.textContent=object._comment;

        comms.appendChild(h4);
        comms.appendChild(stars);
        comms.appendChild(text);
    }
}

