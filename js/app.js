var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var language = '';

if(location.hash == '#es'){
    language = 'es-ES';
} else if(location.hash == '#fr'){
    language = 'fr-FR';
} else if(location.hash == '#de'){
    language = 'de-DE';
} else if(location.hash == '#it'){
    language = 'it-IT';
} else if (location.hash == '#en'){
    language = 'en-US';
}

var phrases = [''];
var button = 0;
var recognition = new SpeechRecognition();

var diagnostic = document.querySelector('.output');

document.getElementById("inputobj2").onclick = function () {

    phrases = document.getElementById("inputobj1").value.split(',');

    phrases.forEach(function (v, i, a) {
        console.log(v, i);
    });
    

    var speechRecognitionList = new SpeechGrammarList();
    
    var grammar = '#JSGF V1.0; grammar phrase; public <phrase> = ' + phrases.join(' | ')+ ';';
    var recognition = new SpeechRecognition();
    var speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.constinuous = true;
    recognition.lang = language;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    if (button == 0) {
        recognition.start();
        button = 1;
    } else if(button == 1) {
        recognition.onend = function (event) {
            console.log('SpeechRecognition.onend');
            recognition.stop();
            button = 0;
        }
    }
  
    recognition.onresult = function (event) {
        var speechResult = event.results[0][0].transcript.toLowerCase();
        console.log('Speech received: ' + speechResult + '.');

        for (let i = 0; i < phrases.length; i++) {

            
            if (speechResult === phrases[i].toLocaleLowerCase()) {
                console.log('I heard the correct phrase!');
                document.body.style.background = 'lime';
                break;
            } else {
                document.body.style.background = 'red';
            }
        }

        diagnostic.textContent = 'Resultado recibido: ' + speechResult + '.';
        console.log('Confidence: ' + event.results[0][0].confidence);
    }

    recognition.onspeechend = function () {
        //recognition.stop();
        
    }

    recognition.onerror = function (event) {
        console.log('Error occurred in recognition: ' + event.error);
    }

    recognition.onaudiostart = function (event) {

        console.log('SpeechRecognition.onaudiostart');
    }

    recognition.onaudioend = function (event) {
        console.log('SpeechRecognition.onaudioend');

    }

    recognition.onnomatch = function (event) {
        console.log('SpeechRecognition.onnomatch');
    }

    recognition.onsoundstart = function (event) {
        
        console.log('SpeechRecognition.onsoundstart');
    }

    recognition.onsoundend = function (event) {
        
        console.log('SpeechRecognition.onsoundend');
    }

    recognition.onspeechstart = function (event) {
        
        console.log('SpeechRecognition.onspeechstart');
    }
    recognition.onstart = function (event) {
         console.log('SpeechRecognition.onstart');
         
    }
    recognition.onend = function (event) {
        console.log('SpeechRecognition.onend');
        recognition.start();
    }
    

    
}




