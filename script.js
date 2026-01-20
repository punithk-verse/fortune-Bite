document.addEventListener("DOMContentLoaded", () => {
    const breakfastSelect = document.getElementById("breakfast");
    const fortuneDiv = document.getElementById("fortune");
    const cookie = document.getElementById("cookie");
    const sound = document.getElementById("crunch");
    const openBtn = document.getElementById("openCookie");
    const darkBtn = document.getElementById("darkToggle");

const fortunes={
    idli: [
        "calm energy surrounds your day 🌤️",
        "steady progress will lead to success 🚶‍♂️",   
    ],
    dosa : [
        "creative ideas will suprise you today 🎨",
        "try something new today 🍳"
    ],
    poha:[
        "simple choices lead to happiness 😊",
        "Good news arrives before evening 📬"
    ],
    paratha: [
        "Strong focus helps you win today 🏆",
        "Somone appreciates your efforts ❤️"
    ],
    cereal: [
        "Discipline pays off today 📈",
        "A productive routine helps you shine 🌟"
    ],
    pizza: [
        "Bold risks give bold rewards 🎲",
        "unexpected fun is coming your way 🎉"
    ],
    nothing: [
        "Coffee will rescue your energy ☕",
        "Eat well next time 🍽️"
    ]
};

function getFortune() {
    const choice =breakfastSelect.value;
    
    if (!choice) {
        fortuneDiv.innerText = "Please select your breakfast!";
        return;
    }

    const options =fortunes[choice];
    const randomFortune=options[Math.floor(Math.random() * options.length)];
    const hour = new Date().getHours();
    const luck = 
       hour < 12 ? "morning luck is high ☀️" :
       hour <18 ? "Afternoon favors you 🌤️" :
                   "Evening brings calm vibes 🌙";
    fortuneDiv.innerText = `${randomFortune}\n${luck}`;
    cookie.classList.add("open");
    if (sound) sound.play().catch(() => {});

    localStorage.setItem("lastFortune", fortuneDiv.innerText);

    setTimeout(() => cookie.classList.remove("open"),800);
}
function toggleDark() {
    document.body.classList.toggle("dark");
}

function loadLastFortune() {
    const last=localStorage.getItem("lastFortune");
    if (last) {
        document.getElementById("fortune").innerText = 
        "last fortune :\n" + last;
    }
}
openBtn.addEventListener("click", getFortune);
darkBtn.addEventListener("click", toggleDark);

loadLastFortune();
});
