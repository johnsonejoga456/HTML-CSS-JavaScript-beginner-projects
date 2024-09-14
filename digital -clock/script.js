function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Add leading zeros
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the time
    document.getElementById('hours').textContent = formattedHours;
    document.getElementById('minutes').textContent = formattedMinutes;
    document.getElementById('seconds').textContent = formattedSeconds;
    document.getElementById('ampm').textContent = ampm;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the clock immediately
updateClock();
