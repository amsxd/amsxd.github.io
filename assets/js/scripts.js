document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.querySelector(".loading-screen");
    setTimeout(() => {
        document.querySelector(".loading-screen").style.opacity = "0";
        setTimeout(() => document.querySelector(".loading-screen").style.display = "none", 500);
    }, 1000);

    const textArray = [
        "An FCAI Student",
        "PHP Backend Developer",
        "Lua Developer",
        "A Problem Solver",
        "Uhh... You Can Scroll Down Now!",
        "Wait... You're Still Here?",
        "Guess I’ll Loop This Again :D"
    ];
    let textIndex = 0;
    let charIndex = 0;
    const typingText = document.querySelector(".typing-text");
    const typingSpeed = 100;
    const eraseSpeed = 50;
    const delayBetween = 2000;

    function type() {
        if (charIndex < textArray[textIndex].length) {
            typingText.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetween);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, eraseSpeed);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, 500);
        }
    }

    setTimeout(type, 1000);
});