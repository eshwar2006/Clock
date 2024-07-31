document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const colorPicker = document.getElementById('colorPicker');
    const screenElement = document.getElementById('screen');
    const brightnessButton = document.getElementById('toggleBrightness');

    let bright = true;

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();

        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
        dateElement.textContent = `${day}/${month}/${year}`;
    }

    function updateColor() {
        const color = colorPicker.value;
        screenElement.style.color = color;
        screenElement.style.textShadow = `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}, 0 0 40px ${color}`;
    }

    function toggleBrightness() {
        bright = !bright;
        if (bright) {
            screenElement.style.textShadow = `0 0 10px ${colorPicker.value}, 0 0 20px ${colorPicker.value}, 0 0 30px ${colorPicker.value}, 0 0 40px ${colorPicker.value}`;
        } else {
            screenElement.style.textShadow = 'none';
        }
    }

    colorPicker.addEventListener('input', updateColor);
    brightnessButton.addEventListener('click', toggleBrightness);

    setInterval(updateClock, 1000);
    updateClock();
});
