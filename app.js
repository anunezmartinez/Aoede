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
    console.log(grammar);
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
            if (speechResult !== phrases[i]) {
                document.body.style.background = 'red';
            }

        }


        console.log('Confidence: ' + event.results[0][0].confidence);
    }

    recognition.onspeechend = function () {
        recognition.stop();
        /* testBtn.disabled = false;
         testBtn.textContent = 'Start new test';*/
    }

    recognition.onerror = function (event) {
        /*testBtn.disabled = false;
        testBtn.textContent = 'Start new test';*/
        /*diagnosticPara.textContent = 'Error occurred in recognition: ' + event.error;*/
    }

    recognition.onaudiostart = function (event) {
        //Fired when the user agent has started to capture audio.
        //console.log('SpeechRecognition.onaudiostart');
    }

    recognition.onaudioend = function (event) {
        //Fired when the user agent has finished capturing audio.
        //console.log('SpeechRecognition.onaudioend');

    }

    recognition.onend = function (event) {
        //Fired when the speech recognition service has disconnected.
        // console.log('SpeechRecognition.onend');
        recognition.start();
    }

    recognition.onnomatch = function (event) {
        //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
        // console.log('SpeechRecognition.onnomatch');
    }

    recognition.onsoundstart = function (event) {
        //Fired when any sound — recognisable speech or not — has been detected.
        // console.log('SpeechRecognition.onsoundstart');
    }

    recognition.onsoundend = function (event) {
        //Fired when any sound — recognisable speech or not — has stopped being detected.
        // console.log('SpeechRecognition.onsoundend');
    }

    recognition.onspeechstart = function (event) {
        //Fired when sound that is recognised by the speech recognition service as speech has been detected.
        // console.log('SpeechRecognition.onspeechstart');
    }
    recognition.onstart = function (event) {
        //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
        // console.log('SpeechRecognition.onstart');
    }
}





