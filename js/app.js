function textToAudio()
{
    var msg = document.getElementById("tts");
    var speech = new SpeechSynthesisUtterance();

    speech.lang = "en-US";
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.SpeechSynthesis.speak(speech);
}