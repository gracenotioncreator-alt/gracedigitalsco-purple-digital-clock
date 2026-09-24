function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();

  // Keep 24-hour format optional, or you can convert to 12-hour without AM/PM
  // Here, just 12-hour without AM/PM
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 becomes 12

  // Update time in HH:MM format
  const timeString = `${hours}:${String(minutes).padStart(2, '0')}`;
  document.getElementById("time").textContent = timeString;

  // Update date: Month Day, Year
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  document.getElementById("Date").textContent = now.toLocaleDateString('en-US', options);
}

// Update every second
setInterval(updateClock, 1000);
updateClock();
