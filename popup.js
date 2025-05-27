document.getElementById('csvFile').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    const lines = event.target.result.split('\n').filter(line => line.trim() !== '');
    const data = [];

    for (let i = 0; i < lines.length; i++) {
      if (i === 0 && lines[i].includes("no")) continue; // Skip header
      const [no, msg] = lines[i].split(',');
      if (no && msg) {
        data.push({ no: no.trim(), msg: msg.trim() });
      }
    }

    chrome.runtime.sendMessage({ type: "start_sending", data });
  };

  reader.readAsText(file);
});