const fontButtons = document.querySelectorAll('.font-select-button');

function setFontBodyClass(fontNum) {
    document.body.classList.remove('font1');
    document.body.classList.remove('font2');
    document.body.classList.remove('font3');
    document.body.classList.add(`font${fontNum}`);

    window.localStorage.setItem('font-active', fontNum);
}

function unsetActiveButtons () {
    const activeFontButtons = document.querySelectorAll('.font-select-button[data-font-active="true"]');
        
    activeFontButtons.forEach(activeButton => {
        activeButton.dataset.fontActive = "false";
    });
}

function setActiveButton (fontNum) {
    const button = document.querySelector(`.font-select-button[data-select-font="${fontNum}"]`);
    button.dataset.fontActive = "true";
}

fontButtons.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault();
        
        setFontBodyClass(button.dataset.selectFont);
        unsetActiveButtons();
        button.dataset.fontActive = "true";
    })
});

window.addEventListener('load', e => {
    const activeFont = window.localStorage.getItem('font-active');

    setFontBodyClass(activeFont);
    unsetActiveButtons();
    setActiveButton(activeFont);
});