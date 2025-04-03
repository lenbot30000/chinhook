fetch('https://api.ipify.org?format=json')
  .then(res => res.json())
  .then(data => {
    const payload = {
      userAgent: navigator.userAgent,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      screenSize: screen.width + "x" + screen.height,
      referrer: document.referrer,
      page: window.location.href,
      ip: data.ip,
      identifier: new URLSearchParams(window.location.search).get("id")
    };

    fetch('https://script.google.com/macros/s/1x3Qr2xvMi5GWyD1h-5JytpmbBPYhDEKebBXmD0ovbOk/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  });
