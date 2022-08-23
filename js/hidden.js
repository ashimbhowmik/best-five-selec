document.getElementById('hidden-btn').addEventListener('click', function () {
    const showHiddenPart = document.getElementById('hidden-part');

    showHiddenPart.classList.remove('hidden');

    const disabledButton = document.getElementById('disable-btn');

    disabledButton.classList.add('hidden');

    const showButton = document.getElementById('disable-btn2');

    showButton.classList.remove('hidden');
});


document.getElementById('disable-btn2').addEventListener('click', function () {

    const showHiddenPart = document.getElementById('hidden-part');

    showHiddenPart.classList.add('hidden');

    const hiddenButton = document.getElementById('disable-btn2');

    hiddenButton.classList.add('hidden');

    const disabledButtons = document.getElementById('disable-btn');

    disabledButtons.classList.remove('hidden');

});

