
const dict = {
    en: {
        //navbar & projects
        'Projekte': 'Projects',
        'Neues Projekt': 'New Project',
        'Projektinfo': 'Project information',
        'Kurzbeschreibung': 'Brief description',
        'Details': 'Details',
        'Projektziele': 'Project goals',
        'Bewertung': 'Rating',
        'Kommentare': 'Comments',
        'Kommentar': 'Comment',
        //footer
        'Impressum': 'Imprint',
        'Datenschutzerklärung': 'Privacy policy',
        'Haftungsausschluss': 'Disclaimer ',
        'Zur Spitze': 'To the top',
        'Kontakt': 'Contact',
        //index
        'Herzlich Willkommen bei ProjectCage!': 'Welcome to ProjectCage!',
        'index_welcomePart1': 'We are ProjectCage we offer great opportunities to publish projects',
        'index_welcomePart2': 'Create a user account and display your own projects on the page',
        'Beschreibung der Seite': 'Page description',
        'Liste der neusten Projekte' : 'List of the latest projects',
        //login
        'Einloggen':'Login',
        'Passwort':'Password',
        'Benutzername':'Username',
        'kein Konto?': 'no account?',
        'Registrieren': 'Register',
        //Übersicht Projekte
        'Übersicht der Projekte':'Overview of the projects',
        'Suchen...':'search...',
        'Suchen':'Search',
        'nach Anfangsdatum':'by start date',
        'nach Projektlaufzeit':'by Project duration',
        'nach Projektleiter':'by Project Manager',
        'Projektzeitraum' : 'Project period',
        'Autor' : 'Author',
        //Projekt & erstellen
        'Titel' : 'Title',
        'Laufzeit' : 'Duration',
        'bis' : 'to',
        'Bewertung abschicken' : 'Submit rating',
        'Ziel':'goal',
        'Projekt erstellen':'Create project',
        'Ziel hinzufügen':'Add goal',
        'Projektziel hinzufügen':'Add project goal',
        //registrieren
        'Geburtsdatum': 'Date of birth',
        'Langbeschreibung': 'Long description',
        'Passwort wiederholen': 'Repeat password',
        'Ziele': 'Goals',
        'Profilbild': 'Profile picture',
        'agb': 'I have read the AGB and terms of use and agree to them!'

    },
    de: {
        //navbar & projects
        'Projekte': 'Projekte',
        'Neues Projekt': 'Neues Projekt',
        'Projektinfo': 'Projektinfo',
        'Kurzbeschreibung': 'Kurzbeschreibung',
        'Details': 'Details',
        'Projektziele': 'Projektziele',
        'Bewertung': 'Bewertung',
        'Kommentare': 'Kommentare',
        'Kommentar': 'Kommentar',
        //footer
        'Impressum': 'Impressum',
        'Datenschutzerklärung': 'Datenschutzerklärung',
        'Haftungsausschluss': 'Haftungsausschluss',
        'Zur Spitze': 'Zur Spitze',
        'Kontakt': 'Kontakt',
        //index
        'Herzlich Willkommen bei ProjectCage!': 'Herzlich Willkommen bei ProjectCage!',
        'index_welcomePart1': 'Wir sind ProjectCage wir bieten tolle Möglichkeiten Projekte zu publizieren',
        'index_welcomePart2': 'Sie können ein Benutzerkonto erstellen und ihre eigenen Projekte auf der Seite darstellen',
        'Beschreibung der Seite': 'Beschreibung der Seite',
        'Liste der neusten Projekte' : 'Liste der neusten Projekte',
        //login
        'Einloggen':'Einloggen',
        'Passwort':'Passwort',
        'Benutzername':'Benutzername',
        'kein Konto?': 'kein Konto?',
        'Registrieren': 'Registrieren',
        //Übersicht Projekte
        'Übersicht der Projekte':'Übersicht der Projekte',
        'Suchen...':'Suchen...',
        'Suchen':'Suchen',
        'nach Anfangsdatum':'nach Anfangsdatum',
        'nach Projektlaufzeit':'nach Projektlaufzeit',
        'nach Projektleiter':'nach Projektleiter',
        'Projektzeitraum' : 'Project period',
        'Autor' : 'Autor',
        //Projekt & erstellen
        'Titel' : 'Titel',
        'Laufzeit:' : 'Laufzeit:',
        'bis' : 'bis',
        'Bewertung' : 'Bewertung',
        'Bewertung abschicken' : 'Bewertung abschicken',
        'Ziel':'Ziel',
        'Projekt erstellen':'Projekt erstellen',
        'Ziel hinzufügen':'Ziel hinzufügen',
        'Projektziel hinzufügen':'Projektziel hinzufügen',
        //registrieren
        'Geburtsdatum': 'Geburtsdatum',
        'Langbeschreibung': 'Langbeschreibung',
        'Ziele': 'Ziele',
        'Profilbild': 'Profilbild',
        'Passwort wiederholen': 'Passwort wiederholen',
        'agb': 'Ich habe die AGB und Nutzungsbedingungen gelesen und stimme diesen zu!'

    }
}

function getLanguage() {
    let lang = window.navigator.language;
    lang = lang.split("-");
    return lang[0];
}

function translate(word) {
    console.log("saddd  ",word)
    let lang = getLanguage()
    word = word.replace(/[\{\}]/g, '').trim()
    console.log("saddd2  ",word)
    return dict[lang][word];
}



function translatePage() {
    let words = document.getElementsByClassName('translate');
    console.log(words)
    for (let i = 0; i < words.length; i++) {
        let text = ""
        if(words[i].nodeName=="INPUT" || words[i].nodeName=="TEXTAREA"){
            if(words[i].hasAttribute("value")){

                text=words[i].getAttribute("value")
               // console.log("1"+text)
                words[i].setAttribute("value",translate(text))
            }else{

                text=words[i].getAttribute("placeholder")
             //   console.log("2"+text)
                words[i].setAttribute("placeholder",translate(text))
            }
        }else{
            console.log("sdfsdf  ",words[i].textContent)
            text = translate(words[i].textContent);
            console.log(text)
            words[i].textContent = text;
        }
    }
}


/*
function applyTemplate(tmpl) {
    //match string with/between {{}}
 //  const regex = /\{\{(.)+\}\}/g
 //   return tmpl.replace(regex, function (word) {
//        return translate(dict, lang, word.replace(/[\{\}]/g, ''));
 //   });
    return translate(tmpl.replace(/[\{\}]/g, ''));

}*/

/*
function translatePage() {
    let words = document.getElementsByClassName('translate');
    let translation  = document.getElementsByClassName('translation');
    console.log(words.length)

  //  console.log(translation)
    for(let i=0;i<words.length;i++){
        let test=words[i].textContent;
      //  console.log(test)
        let html = applyTemplate(test);
      //  console.log("aaa:    ",translation[i])
        translation[i].textContent=html;
    }
    console.log(words.length)
}*/



