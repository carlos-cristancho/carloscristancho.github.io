// Detects the browser language
const userLang = navigator.language || navigator.userLanguage;
if (userLang.startsWith("pt")) {
    // Redirects to the Portuguese version if the language is Portuguese
    window.location.href = "index-pt.html";
}