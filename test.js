document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".skill").forEach(skill => {
        skill.addEventListener("click", () => {
            alert(`Skill: ${skill.querySelector("h3").innerText}`);
        });
    });
});
