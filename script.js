function getElement(selector) {
   return  document.querySelector(selector);

}

const button = getElement('.submit-button')

button.addEventListener('click', function () {
    const loginNode = getElement('.login');
    const loginValue = loginNode.value;
    alert('hallo, ' + loginValue );
}, false)