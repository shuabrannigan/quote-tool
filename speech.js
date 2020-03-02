    /*
        Speech Recogniiton, currently only compatible with Chrome desktop browser.
    */
    
    const length = document.getElementById('length')
    const width = document.getElementById('width')
    
    const SpeechRecognition = (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)
    const recognition = new SpeechRecognition();

    //add litener 

    function speechLength() {
        recognition.onstart = function() {
            console.log('voice is activated')
        };
    
        recognition.onresult = function(event) {
            console.log(event);
            const current = event.resultIndex;
    
            const transcript = event.results[current][0].transcript
            console.log(transcript)
            length.value = parseFloat(transcript, 10);
        }

        recognition.start();
    }

    function speechWidth() {
        recognition.onstart = function() {
            console.log('voice is activated')
        };
    
        recognition.onresult = function(event) {
            console.log(event);
            const current = event.resultIndex;
    
            const transcript = event.results[current][0].transcript
            console.log(transcript)
            width.value = parseFloat(transcript, 10);
        }

        recognition.start();
    }