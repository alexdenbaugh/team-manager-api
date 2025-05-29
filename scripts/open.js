// scripts/open.js
const { exec } = require("child_process");
const http = require("http");
const os = require("os");

const PORT = 3000;
const URL = `http://localhost:${PORT}/users`;
const RETRIES = 20;
const DELAY = 1000;

function waitForServer(retries = RETRIES) {
  return new Promise((resolve, reject) => {
    const attempt = (n = 0) => {
      if (n >= retries) return reject('Server not responding.');
      http.get(URL, res => {
        if (res.statusCode === 200) return resolve();
        setTimeout(() => attempt(n + 1), DELAY);
      }).on('error', () => {
        setTimeout(() => attempt(n + 1), DELAY);
      });
    };
    attempt();
  });
}

function openInBrowser(url) {
  const platform = os.platform();
  let command;
  if (platform === 'darwin') command = `open ${url}`;      // macOS
  else if (platform === 'win32') command = `start ${url}`; // Windows
  else command = `xdg-open ${url}`;                        // Linux
  exec(command, (err) => {
    if (err) console.error("❌ Failed to open browser:", err);
  });
}

waitForServer()
  .then(() => {
    console.log(`✅ API is live at ${URL}`);
    openInBrowser(URL);
  })
  .catch((err) => {
    console.error(`❌ ${err}`);
    process.exit(1);
  });
