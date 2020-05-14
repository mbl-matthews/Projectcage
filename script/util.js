

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
    let fenster1 = window.open("", "welcome", "width=500,height=250,left=600,top=400");
    fenster1.document.write("<h1>Wilkommen auf Projketportal</h1><h2 id='lang'></h2>");
    let lang = fenster1.document.getElementById("lang");
    lang.innerHTML += "Language: " + getLanguage();
    fenster1.setTimeout("close()", 5000);
}