function speak() {
      let text = window.speechSynthesis;
      let voice = new SpeechSynthesisUtterance(`${textbox.value}`);
      text.speak(voice);
}