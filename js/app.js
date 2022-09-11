var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var phrases = [''];
var recognition = new SpeechRecognition();

var diagnostic = document.querySelector('.output');

var maricon = 0;
document.getElementById("inputobj2").onclick = function () {

    phrases = document.getElementById("inputobj1").value.split(',');
    phrases.forEach(function (v, i, a) {
        console.log(v, i);
    });

    var speechRecognitionList = new SpeechGrammarList();

    var grammar = '#JSGF V1.0; grammar phrase; public <phrase> = ' + phrases.join(' | ') + ';';
    var recognition = new SpeechRecognition();
    var speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.constinuous = true;
    recognition.lang = 'es-ES';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;


    recognition.start();

    recognition.onresult = function (event) {
        var speechResult = event.results[0][0].transcript.toLowerCase();
        console.log('Speech received: ' + speechResult + '.');
        for (let i = 0; i < phrases.length; i++) {
            if (speechResult === phrases[i]) {
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
        recognition.stop();
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

    recognition.onend = function (event) {

        console.log('SpeechRecognition.onend');
        recognition.start();
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
}





