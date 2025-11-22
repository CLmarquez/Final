const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn) {
    menuBtn.onclick = () => {
        mainNav.style.display = mainNav.style.display === "flex" ? "none" : "flex";
    };
}

const timeBox = document.getElementById("currentTime");
if (timeBox) {
    const updateTime = () => {
        timeBox.textContent = "Current Time: " + new Date().toLocaleString();
    };
    updateTime();
    setInterval(updateTime, 1000);
}

const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let msg = document.getElementById("message").value.trim();
        let output = document.getElementById("formMsg");

        if (name === "" || email === "" || msg === "") {
            output.style.color = "red";
            output.textContent = "Please fill out all fields.";
        } else {
            output.style.color = "green";
            output.textContent = "Message successfully sent!";
            form.reset();
        }
    });
}
