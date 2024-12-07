document.addEventListener('DOMContentLoaded', function () {

    let text;
    if(window.location.pathname === '/' || window.location.href.includes('index.html')){
        text = "WELCOME TO\n\nCARLOS CRISTANCHO'S PORTFOLIO";
    } else if(window.location.pathname === '/' || window.location.href.includes('fftw-cplusplus-en.html')) {
        text = "THE FASTEST FOURIER TRANSFORM\n\nIN THE WEST"
    } else {
        text = "THE 7 QUESTIONS OF\n\nRCM"
    }

    let index = 0;
    const typingSpeed = 100; // Adjust the typing speed
    const typingDiv = document.querySelector('.text-overlay h1');

    // Clear the content before starting to type
    typingDiv.textContent = '';

    function typeWriter() {
        if (index < text.length) {
            // If a line break (\n) is found, a <br> is added instead of printing it
            if (text.charAt(index) === "\n") {
                typingDiv.innerHTML += "<br>";
            } else {
                typingDiv.innerHTML += text.charAt(index);
            }
            index++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    typeWriter(); // Start the typing effect
});