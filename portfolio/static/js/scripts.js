const buttons = document.querySelectorAll(".content nav p")
const about = document.querySelector("#about")
const exp = document.querySelector("#experience")
const projects = document.querySelector("#projects")

const btnProject = document.querySelector("#btn-project")
const btnAbout = document.querySelector("#btn-about")
const btnExp = document.querySelector("#btn-exp")
const darkModeButton = document.getElementById("dark-mode-btn")
const icon = darkModeButton.querySelector("i");

// Funções
function showAbout() {
    about.classList.remove('hiden');
    exp.classList.add("hiden");
    projects.classList.add("hiden");
}
function showExp() {
    exp.classList.remove('hiden');
    about.classList.add("hiden");
    projects.classList.add("hiden");
}
function showProjects() {
    projects.classList.remove('hiden');
    exp.classList.add("hiden");
    about.classList.add("hiden");
}

// Eventos
buttons.forEach((btn) => {
    btn.addEventListener("click", (botao) =>{
        buttons.forEach ((btn) => {
            btn.classList.remove("selected");
        });

        const button = botao.target;

        button.classList.add("selected");
    })
})

btnAbout.addEventListener("click", () => {
    showAbout();
})
btnProject.addEventListener("click", () => {
    showProjects();
})
btnExp.addEventListener("click", () => {
    showExp();
})


document.addEventListener("DOMContentLoaded", () => {
    const darkModeButton = document.getElementById("dark-mode-btn");
    const icon = darkModeButton.querySelector("i");

    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        icon.classList.remove("fa-moon-o");
        icon.classList.add("fa-sun-o");
    }

    darkModeButton.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");
        darkModeButton.classList.toggle("dark");

        if (isDark) {
            icon.classList.remove("fa-moon-o");
            icon.classList.add("fa-sun-o");
            localStorage.setItem("dark-mode", "enabled");
        } else {
            icon.classList.remove("fa-sun-o");
            icon.classList.add("fa-moon-o");
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});


