const fagFolkBody = document.body;

// --------------------------------- Modal window skeleton ----------------------------------
function loadFagFolkModuleModal () {

    // fagfolk-supplier-module-modal
    const fagFolkSupplierModuleModal = document.createElement('div');
    fagFolkSupplierModuleModal.classList.add('fagfolk-supplier-module-modal');
    fagFolkSupplierModuleModal.setAttribute('id', 'fagfolk-supplier-module-modal');
    fagFolkBody.appendChild(fagFolkSupplierModuleModal);

    // fagfolk-supplier-module-modal-content
    const fagFolkSupplierModuleModalContent = document.createElement('div');
    fagFolkSupplierModuleModalContent.classList.add('fagfolk-supplier-module-modal-content');
    fagFolkSupplierModuleModal.appendChild(fagFolkSupplierModuleModalContent);

    // fagfolk-supplier-module-modal-close
    const fagFolkSupplierModuleModalClose = document.createElement('div');
    const fagFolkSupplierModuleModalCloseNode = document.createTextNode('\u00D7');
    fagFolkSupplierModuleModalClose.appendChild(fagFolkSupplierModuleModalCloseNode);
    fagFolkSupplierModuleModalClose.classList.add('fagfolk-supplier-module-modal-close');
    fagFolkSupplierModuleModalClose.setAttribute('id', 'fagfolk-supplier-module-modal-close');
    fagFolkSupplierModuleModalContent.appendChild(fagFolkSupplierModuleModalClose);

    // fagfolk-supplier-module-modal-unique
    const fagFolkSupplierModuleModalContentUnique = document.createElement('div');
    fagFolkSupplierModuleModalContentUnique.classList.add('fagfolk-supplier-module-modal-unique');
    fagFolkSupplierModuleModalContent.appendChild(fagFolkSupplierModuleModalContentUnique);

    // ---------------------------------- Modal window skeleton CSS -------------------------
    fagFolkSupplierModuleModal.style.display = 'none';
    fagFolkSupplierModuleModal.style.position = 'fixed';
    fagFolkSupplierModuleModal.style.zIndex = '1';
    fagFolkSupplierModuleModal.style.left = '0';
    fagFolkSupplierModuleModal.style.top = '0';
    fagFolkSupplierModuleModal.style.width = '100%';
    fagFolkSupplierModuleModal.style.height = '100%';
    fagFolkSupplierModuleModal.style.overflow = 'auto';
    fagFolkSupplierModuleModal.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    fagFolkSupplierModuleModal.style.justifyContent = 'center';
    fagFolkSupplierModuleModal.style.alignItems = 'center';
    fagFolkSupplierModuleModalContent.style.margin = '30px';
    fagFolkSupplierModuleModalContent.style.padding = '20px';
    fagFolkSupplierModuleModalContent.style.width = '80%';
    fagFolkSupplierModuleModalContent.style.height = '80%';
    fagFolkSupplierModuleModalContent.style.display = 'flex';
    fagFolkSupplierModuleModalContent.style.flexDirection = 'column';
    fagFolkSupplierModuleModalContent.style.justifyContent = 'space-between';
    fagFolkSupplierModuleModalContent.style.alignItems = 'center';
    fagFolkSupplierModuleModalClose.style.color = '#aaaaaa';
    fagFolkSupplierModuleModalClose.style.fontSize = '28px';
    fagFolkSupplierModuleModalClose.style.fontWeight = 'bold';
    fagFolkSupplierModuleModalClose.style.cursor = 'pointer';
    fagFolkSupplierModuleModalClose.style.textDecoration = 'none';
    fagFolkSupplierModuleModalClose.style.width = '100%';
    fagFolkSupplierModuleModalClose.style.display = 'flex';
    fagFolkSupplierModuleModalClose.style.justifyContent = 'right';
    fagFolkSupplierModuleModalContentUnique.style.display = 'flex';
    fagFolkSupplierModuleModalContentUnique.style.justifyContent = 'center';
    fagFolkSupplierModuleModalContentUnique.style.alignItems = 'center';

    // ----------------------------------- Buttons -------------------------------------
    // Buttons bottom
    const fagFolkButtonsBottom = document.createElement('div');
    fagFolkButtonsBottom.classList.add('fagfolk-buttons-bottom');
    fagFolkSupplierModuleModalContent.appendChild(fagFolkButtonsBottom);

    fagFolkButtonsBottom.style.marginBottom = '20px';
}

// Button next
function loadFagFolkButtonNext (page) {
    const fagFolkButtonsBottom = document.querySelector('.fagfolk-buttons-bottom');
    const fagFolkButtonNext = document.createElement('button');
    const fagFolkButtonNextNode = document.createTextNode('Next');
    fagFolkButtonNext.setAttribute('id', 'fagfolk-button-next');
    fagFolkButtonNext.classList.add('fagfolk-navigation-button');
    fagFolkButtonNext.appendChild(fagFolkButtonNextNode);
    fagFolkButtonsBottom.appendChild(fagFolkButtonNext);
    // When the user clicks the button, open the fagFolkModal
    const setFagFolkButtonNext = document.querySelector('#fagfolk-button-next');
    setFagFolkButtonNext.onclick = function () {
        displayFagFolkContent(page);
    };
}

// Button back
function loadFagFolkButtonBack (page) {
    const fagFolkButtonsBottom = document.querySelector('.fagfolk-buttons-bottom');
    const fagFolkButtonBack = document.createElement('button');
    const fagFolkButtonBackNode = document.createTextNode('Back');
    fagFolkButtonBack.setAttribute('id', 'fagfolk-button-back');
    fagFolkButtonBack.classList.add('fagfolk-navigation-button');
    fagFolkButtonBack.appendChild(fagFolkButtonBackNode);
    fagFolkButtonsBottom.appendChild(fagFolkButtonBack);
    // When the user clicks the button, open the fagFolkModal
    const setFagFolkButtonBack = document.querySelector('#fagfolk-button-back');
    setFagFolkButtonBack.onclick = function () {
        displayFagFolkContent(page);
    };
}

function setFagFolkButtonsStyle () {
    const fagFolkNavigationButtons = document.getElementsByClassName('fagfolk-navigation-button');
    for (let i = 0; i < fagFolkNavigationButtons.length; i++) {
        fagFolkNavigationButtons[i].style.padding = '7px 14px';
        fagFolkNavigationButtons[i].style.margin = '0 20px';
    }
}

// ---------------------------------- Navigation ------------------------------------
// Add click event to bottom button
function displayFagFolkContent (page) {
    switch (page) {
        case '1':
            loadFagFolkModalContent1();
            break;
        case '2':
            loadFagFolkModalContent2();
            break;
        default:
            break;
    }
}

// --------------------------------- Content page 1 ----------------------------------
// A place to configure all the first page item
function loadFagFolkModalContent1 () {
    // Clear all content in modal window
    const fagFolkSupplierModuleModalContentUnique = document.querySelector('.fagfolk-supplier-module-modal-unique');
    fagFolkSupplierModuleModalContentUnique.innerHTML = '';

    // Clear all content in buttons bottom
    const fagFolkButtonsBottom = document.querySelector('.fagfolk-buttons-bottom');
    fagFolkButtonsBottom.innerHTML = '';

    const fagFolkModalContent1 = document.createElement('div');
    fagFolkModalContent1.classList.add('fagfolk-modal-content-1');
    fagFolkSupplierModuleModalContentUnique.appendChild(fagFolkModalContent1);
    const fagFolkModalContent1Header = document.createElement('h1');
    const fagFolkModalContent1HeaderNode = document.createTextNode('1');
    fagFolkModalContent1Header.classList.add('fagfolk-modal-content-1-header');
    fagFolkModalContent1Header.appendChild(fagFolkModalContent1HeaderNode);
    fagFolkModalContent1.appendChild(fagFolkModalContent1Header);
    const fagFolkModalContent1Content = document.createElement('p');
    const fagFolkModalContent1ContentNode = document.createTextNode('Some text in the Modal Page 1');
    fagFolkModalContent1.classList.add('fagfolk-modal-content-1-content');
    fagFolkModalContent1Content.appendChild(fagFolkModalContent1ContentNode);
    fagFolkModalContent1.appendChild(fagFolkModalContent1Content);

    // Load style from supplier
    fagFolkModalContent1Style();

    // Add button to next page
    loadFagFolkButtonNext('2');

    setFagFolkButtonsStyle ();
}

// --------------------------------- Content page 2 ----------------------------------
// A place to configure all the elements of the second party
function loadFagFolkModalContent2 () {
    // Clear all content in buttons bottom
    const fagFolkSupplierModuleModalContentUnique = document.querySelector('.fagfolk-supplier-module-modal-unique');
    fagFolkSupplierModuleModalContentUnique.innerHTML = '';

    // Clear all content in modal window
    const fagFolkButtonsBottom = document.querySelector('.fagfolk-buttons-bottom');
    fagFolkButtonsBottom.innerHTML = '';

    const fagFolkModalContent2 = document.createElement('div');
    fagFolkModalContent2.classList.add('fagfolk-modal-content-2');
    fagFolkSupplierModuleModalContentUnique.appendChild(fagFolkModalContent2);
    const fagFolkModalContent2Header = document.createElement('h1');
    const fagFolkModalContent2HeaderNode = document.createTextNode('2');
    fagFolkModalContent2Header.classList.add('fagfolk-modal-content-2-header');
    fagFolkModalContent2Header.appendChild(fagFolkModalContent2HeaderNode);
    fagFolkModalContent2.appendChild(fagFolkModalContent2Header);
    const fagFolkModalContent2Content = document.createElement('p');
    const fagFolkModalContent2ContentNode = document.createTextNode('Some text in the Modal Page 2');
    fagFolkModalContent2.classList.add('fagfolk-modal-content-2-content');
    fagFolkModalContent2Content.appendChild(fagFolkModalContent2ContentNode);
    fagFolkModalContent2.appendChild(fagFolkModalContent2Content);

    // Load style from supplier
    fagFolkModalContent2Style();

    // Add button to next page
    loadFagFolkButtonBack('1');

    // Add button to next page
    loadFagFolkButtonNext(3);
    setFagFolkButtonsStyle ();
}


// --------------------------------- Control ----------------------------------
function loadFagFolkControl () {
    // Get the fagFolkModal
    const fagFolkModal = document.querySelector('#fagfolk-supplier-module-modal');
    // Get the <civ> element that closes the fagFolkModal
    const fagFolkModalClose = document.querySelector('#fagfolk-supplier-module-modal-close');
    // When the user clicks on <span> (x), fagfolk-supplier-module-modal-close the fagFolkModal
    fagFolkModalClose.onclick = function () {
        fagFolkModal.style.display = 'none';
    };

    // When the user clicks anywhere outside of the fagFolkModal, fagfolk-supplier-module-modal-close it
    window.onclick = function (event) {
        if (event.target === fagFolkModal) {
            fagFolkModal.style.display = 'none';
        }
    };
}
