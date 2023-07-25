loadFagFolkModule();
loadFagFolkModuleHeading();
loadFagFolkModuleModal();
loadFagFolkButton();
loadFagFolkModalContent1();
loadFagFolkControl();

// Class fagfolk-supplier-fagFolkModule
fagFolkModule.style.backgroundColor = 'white';
fagFolkModule.style.padding = '50px';
fagFolkModule.style.border = '1px solid gray';

// Supplier fagFolkModule elements

// Heading
fagFolkModuleHeading.style.fontFamily = 'sans-serif';
fagFolkModuleHeading.style.color = 'green';
fagFolkModuleHeading.style.textAlign = 'center';


// Button
fagFolkButton.style.padding = '7px 15px';
fagFolkButton.style.marginTop = '20px';

// Modal window
const fagFolkSupplierModuleModalContent = document.querySelector('.fagfolk-supplier-module-modal-content');
fagFolkSupplierModuleModalContent.style.border = '1px solid #888888';
fagFolkSupplierModuleModalContent.style.backgroundColor = 'white';


// Content page 1
function fagFolkModalContent1Style () {
    const fagFolkModalContent1 = document.querySelector('.fagfolk-modal-content-1')
    const fagFolkModalContent1Header = document.querySelector('.fagfolk-modal-content-1-header')
    const fagFolkModalContent1Content = document.querySelector('.fagfolk-modal-content-1-content')
    fagFolkModalContent1.style.display = 'flex';
    fagFolkModalContent1.style.flexDirection = 'column';
    fagFolkModalContent1.style.alignItems = 'center';
    fagFolkModalContent1.style.fontFamily = 'sans-serif';
    fagFolkModalContent1Header.style.fontSize = '6rem';
    fagFolkModalContent1Header.style.backgroundColor = 'red';
    fagFolkModalContent1Header.style.display = 'inline-block';
    fagFolkModalContent1Header.style.borderRadius = '50%';
    fagFolkModalContent1Header.style.borderRadius = '50%';
    fagFolkModalContent1Header.style.width = '8rem';
    fagFolkModalContent1Header.style.height = '8rem';
    fagFolkModalContent1Header.style.lineHeight = '8rem';
    fagFolkModalContent1Header.style.textAlign = 'center';
    fagFolkModalContent1Header.style.border = '0.5rem solid black';
    fagFolkModalContent1Header.style.color = 'white';
    fagFolkModalContent1Header.style.margin = '2rem';
    fagFolkModalContent1Content.style.fontSize = '2rem';
    fagFolkModalContent1Content.style.textAlign = 'center';
}

// Content page 2
function fagFolkModalContent2Style () {
    const fagFolkModalContent2 = document.querySelector('.fagfolk-modal-content-2')
    const fagFolkModalContent2Header = document.querySelector('.fagfolk-modal-content-2-header')
    const fagFolkModalContent2Content = document.querySelector('.fagfolk-modal-content-2-content')
    fagFolkModalContent2.style.display = 'flex';
    fagFolkModalContent2.style.flexDirection = 'column';
    fagFolkModalContent2.style.alignItems = 'center';
    fagFolkModalContent2.style.fontFamily = 'sans-serif';
    fagFolkModalContent2Header.style.fontSize = '6rem';
    fagFolkModalContent2Header.style.backgroundColor = 'orange';
    fagFolkModalContent2Header.style.display = 'inline-block';
    fagFolkModalContent2Header.style.borderRadius = '50%';
    fagFolkModalContent2Header.style.borderRadius = '50%';
    fagFolkModalContent2Header.style.width = '8rem';
    fagFolkModalContent2Header.style.height = '8rem';
    fagFolkModalContent2Header.style.lineHeight = '8rem';
    fagFolkModalContent2Header.style.textAlign = 'center';
    fagFolkModalContent2Header.style.border = '0.5rem solid blue';
    fagFolkModalContent2Header.style.color = 'white';
    fagFolkModalContent2Header.style.margin = '2rem';
    fagFolkModalContent2Content.style.fontSize = '2rem';
    fagFolkModalContent2Content.style.textAlign = 'center';
}
