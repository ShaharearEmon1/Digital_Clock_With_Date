function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById("clock");
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();

    clockElement.innerHTML = `Time: ${timeString} <br> Date: ${dateString}`;
}

setInterval(updateClock, 1000);
updateClock();