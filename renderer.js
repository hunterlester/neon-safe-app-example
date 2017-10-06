let shell = require('electron').shell;
let ipcRenderer = require('electron').ipcRenderer;

const genAuthButton = document.getElementById('genAuthUri');
genAuthButton.addEventListener('click', () => {
  ipcRenderer.send('gen-auth');
});

const appInfo = {
	'id': 'net.safe.app.base.mock',
	'name': 'SAFE app base',
	'vendor': 'MaidSafe Ltd.'
}

const containers = {
  _public: [
    'Read',
    'Insert',
    'Update',
    'Delete',
    'ManagePermissions'
  ],
  _publicNames: [
    'Read',
    'Insert',
    'Update',
    'Delete',
    'ManagePermissions'
  ]
};

const listenForAuthReponse = (event, response) => {
  console.log('auth response!!!!!');
  console.log(response);
  const outputElem = document.getElementById('output');
  const pEl = document.createElement('p');
  pEl.innerText = response;
  outputElem.appendChild(pEl);
};

ipcRenderer.on('auth-response', listenForAuthReponse);
