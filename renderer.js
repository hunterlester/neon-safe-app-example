let shell = require('electron').shell;
let ipcRenderer = require('electron').ipcRenderer;

const genAuthButton = document.getElementById('genAuthUri');
genAuthButton.addEventListener('click', () => {
  ipcRenderer.send('gen-auth');
});

const listenForAuthReponse = (event, response) => {
  console.log('auth response!!!!!');
  console.log(response);
  const outputElem = document.getElementById('output');
  const pEl = document.createElement('p');
  pEl.innerText = response;
  outputElem.appendChild(pEl);
};

ipcRenderer.on('auth-response', listenForAuthReponse);
