(async () => {
  const getIP = async () => {
    try {
      const res = await fetch('https://api.ipify.org?format=json');
      const data = await res.json();
      return data.ip;
    } catch (e) {
      return 'Unavailable';
    }
  };

  const fingerprint = [
    navigator.userAgent,
    navigator.language,
    screen.width + "x" + screen.height,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
    navigator.platform,
    window.devicePixelRatio
  ].join('|');

  const payload = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    languages: navigator.languages,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timezoneOffset: new Date().getTimezoneOffset(),
    locale: Intl.NumberFormat().resolvedOptions().locale,
    screenSize: screen.width + "x" + screen.height,
    devicePixelRatio: window.devicePixelRatio,
    platform: navigator.platform,
    vendor: navigator.vendor,
    connection: navigator.connection ? {
      downlink: navigator.connection.downlink,
      effectiveType: navigator.connection.effectiveType,
      rtt: navigator.connection.rtt
    } : "Unavailable",
    referrer: document.referrer,
    page: window.location.href,
    ip: await getIP(),
    identifier: new URLSearchParams(window.location.search).get("id"),
    fingerprint: fingerprint,
    touchSupport: 'ontouchstart' in window,
    timestamp: new Date().toISOString()
  };

  fetch('https://script.google.com/macros/s/AKfycbyWookWgzb3wVcNftGwGJ_vdoVrLBcQrlEJwW6VHFNy-AP8tn9btaYgysacm3k3TVnujw/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
})();
