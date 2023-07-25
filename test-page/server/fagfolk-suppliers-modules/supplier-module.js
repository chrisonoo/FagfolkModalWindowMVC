const fagFolkModule = document.querySelector('.fagfolk-supplier-module');
const fagFolkModuleHeading = document.createElement('h2');
const fagFolkHeadingNode = document.createTextNode('FagFolk Modal');
const fagFolkButton = document.createElement('button');
const fagFolkButtonNode = document.createTextNode('Open Modal');

// Class fagfolk-supplier-fagFolkModule
function loadFagFolkModule () {
    fagFolkModule.style.display = 'flex';
    fagFolkModule.style.flexDirection = 'column';
    fagFolkModule.style.justifyContent = 'center';
    fagFolkModule.style.alignItems = 'center';
    fagFolkModule.style.position = 'relative';
    fagFolkModule.style.padding = '50px';
}

// Heading
function loadFagFolkModuleHeading () {
    fagFolkModuleHeading.appendChild(fagFolkHeadingNode);
    fagFolkModuleHeading.classList.add('fagfolk-supplier-module-heading');
    fagFolkModule.appendChild(fagFolkModuleHeading);
}

// Button
function loadFagFolkButton () {
    // Get the fagFolkModal
    const fagFolkModal = document.querySelector('#fagfolk-supplier-module-modal');
    fagFolkButton.appendChild(fagFolkButtonNode);
    fagFolkButton.classList.add('fagfolk-supplier-module-button');
    fagFolkButton.setAttribute('id', 'fagfolk-supplier-module-button');
    fagFolkModule.appendChild(fagFolkButton);
    // When the user clicks the button, open the fagFolkModal
    fagFolkButton.onclick = function () {
        fagFolkModal.style.display = 'flex';
    };
}
