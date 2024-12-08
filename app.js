// app.js
document.addEventListener('DOMContentLoaded', (event) => {
    const appleImage = document.getElementById('apple');
    const bananaImage = document.getElementById('banana');
    const pizzaImage = document.getElementById('pizza')

    appleImage.addEventListener('click', () => {
        speak('Apple');
    });

    bananaImage.addEventListener('click', () => {
        speak('Banana');
    });
    pizzaImage.addEventListener('click', () => {
        speak('Pizza');
    });
    function speak(text) {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'en-US';
        window.speechSynthesis.speak(speech);
    }
});

