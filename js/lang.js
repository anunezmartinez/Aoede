function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}
var translations = {
    'en': {
        'button_text': 'Submit',
        'langselector': 'Select language',
        'comment': 'Input words separated by commas',
        'placeholder': 'Enter your words here',
        'message': 'You have said the following words:',
    },
    'fr': {
        'button_text': 'Soumettre',
        'langselector': 'Choisissez la langue',
        'comment': 'Entrez les mots séparés par des virgules',
        'placeholder': 'Entrez vos mots ici',
        'message': 'Vous avez dit les mots suivants:',
    },
    'es': {
        'button_text': 'Enviar',
        'langselector': 'Seleccionar idioma',
        'comment': 'Introduzca palabras separadas por comas',
        'placeholder': 'Introduzca sus palabras aquí',
        'message': 'Ha dicho las siguientes palabras:',
    },
    'de': {
        'button_text': 'Senden',
        'langselector': 'Sprache auswählen',
        'comment': 'Geben Sie Wörter mit Komma getrennt ein',
        'placeholder': 'Geben Sie Ihre Wörter hier ein',
        'message': 'Sie haben die folgenden Wörter gesagt:',
    },
    'it': {
        'button_text': 'Invia',
        'langselector': 'Seleziona la lingua',
        'comment': 'Inserisci parole separate da virgole',
        'placeholder': 'Inserisci le tue parole qui',
        'message': 'Hai detto le seguenti parole:',
    },
};
var input = document.getElementById ("inputobj1");
var input2 = document.getElementById ("inputobj2");
// Check if a hash value exists in the URL
if (window.location.hash) {

    if (window.location.hash == "#es") {
        comment.textContent = translations.es.comment;
        input.placeholder = translations.es.placeholder;
        message.textContent = translations.es.message;
        input2.value = translations.es.button_text;
    } else if (window.location.hash == "#fr") {
        comment.textContent =  translations.fr.comment;
        input.placeholder = translations.fr.placeholder;
        message.textContent = translations.fr.message;
        input2.value = translations.fr.button_text;
    } else if (window.location.hash == "#de") {
        comment.textContent =  translations.de.comment;
        input.placeholder = translations.de.placeholder;
        message.textContent = translations.de.message;
        input2.value = translations.de.button_text;
    } else if (window.location.hash == "#it") {
        comment.textContent =  translations.it.comment;
        input.placeholder = translations.it.placeholder;
        message.textContent = translations.it.message;
        input2.value = translations.it.button_text;
    } else if (window.location.hash == "#en") {
        comment.textContent =  translations.en.comment;
        input.placeholder = translations.en.placeholder;
        message.textContent = translations.en.message;
        input2.value = translations.en.button_text;
    }

}
