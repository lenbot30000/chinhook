// Example: Log user details
window.onload = function() {
  // Get User-Agent details
  const userAgent = navigator.userAgent;

  // Get IP address (here you could fetch it from an external API)
  // For demo purposes, we'll mock it
  const userIP = "123.456.789.101"; // In production, use a free IP API

  // Send this data somewhere (e.g., Google Analytics or your server)
  console.log(`User Agent: ${userAgent}`);
  console.log(`User IP: ${userIP}`);

  // Optionally, send data to a server or logging service
  fetch('https://your-server.com/log-data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userAgent, userIP, timestamp: new Date() }),
  });

  // Optional: Show user info
  document.getElementById('pixel').innerHTML = `<p>User-Agent: ${userAgent}</p>`;
}
