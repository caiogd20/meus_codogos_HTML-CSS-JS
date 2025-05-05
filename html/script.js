// Function to get the current time
const getTime = () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return { time: `${hours}:${minutes}:${seconds}`, hours };
};

// Function to get the current date
const getDate = () => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

// Function to update the time and date on the page
const updateTimeAndDate = () => {
    const { time, hours } = getTime();
    document.getElementById('hora').innerText = time;
    document.getElementById('date').innerText = getDate();

    // Update background color based on the time
    if (hours >= 6 && hours < 18) {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "black";
    }
};

// Update the time and date every second
setInterval(updateTimeAndDate, 1000);

// Set the initial time, date, and background color
updateTimeAndDate();