/*var dict = {
    "Projekt": "Project",
    "Menü": "Menu",
    "Kurzbeschreibung": "Brief description",
    "Langbeschreibung": "Long description",
    "Details": "Details",
    "Laufzeit": "Duration",
    "Projektziele": "Project goals",
    "Titel": "Title",
    "Autor": "Author",
};
*/

var dict = {
    en: {
        'Projekte': 'Project',
        'Neues Projekt': 'new Project',
        'castle': 'castle'
    },
    de: {
        'Projekte': 'Projekte',
        'Neues Projekt': 'Auf Wiedersehen',
        'castle': 'schloss'
    }
}

function translate(dict, lang, word) {
    return dict[lang][word];
}


function applyTemplate(tmpl, lang) {
    //match string with/between {{}}
    const regex = /\{\{(.)+\}\}/g
    return tmpl.replace(regex, function (word) {
        return translate(dict, lang, word.replace(/[\{\}]/g, ''));
    });
}
