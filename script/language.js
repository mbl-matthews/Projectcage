
const dict = {
    en: {
        'Projekte': 'Projects',
        'Neues Projekt': 'New Project',
        'Projektinfo': 'Projectinfo',
        'Kurzbeschreibung': 'Brief description',
        'Details': 'Details',
        'Projektziele': 'Project goals',
        'Bewertung': 'Rating'
    },
    de: {
        'Projekte': 'Projekte',
        'Neues Projekt': 'Neues Projekt',
        'Projektinfo': 'Projektinfo',
        'Kurzbeschreibung': 'Kurzbeschreibung',
        'Details': 'Details',
        'Projektziele': 'Projektziele',
        'Bewertung': 'Bewertung'
    }
}

function getLanguage() {
    return window.navigator.language;
}

function translate(dict, lang, word) {
    console.log(dict)
    console.log(lang)
    console.log(word)
    return dict[lang][word];
}


function applyTemplate(tmpl, lang) {
    //match string with/between {{}}
 /*   const regex = /\{\{(.)+\}\}/g
    return tmpl.replace(regex, function (word) {
        return translate(dict, lang, word.replace(/[\{\}]/g, ''));
    });*/
    return translate(dict, lang, tmpl.replace(/[\{\}]/g, ''));

}


function translatePage() {
    let lang = getLanguage();
    let words = document.getElementsByClassName('translate');
    let translation  = document.getElementsByClassName('translation');
    console.log(words.length)

  //  console.log(translation)
    for(let i=0;i<words.length;i++){
        let test=words[i].textContent;
      //  console.log(test)
        let html = applyTemplate(test, lang);
      //  console.log("aaa:    ",translation[i])
        translation[i].textContent=html;
    }
    console.log(words.length)
}



