
const selectionPlayerDiasbled = document.getElementsByClassName('player-selection');
for (let i = 0; i < selectionPlayerDiasbled.length; i++) {
    let selectionPlayer = selectionPlayerDiasbled[i];
    selectionPlayer.addEventListener('click', function (event) {
        event.target.style.backgroundColor = 'gray';
        document.getElementById('selectionPlayer');
        selectionPlayer.setAttribute('disabled', true);
    });

    function addToSelectedPlayer(element) {

        const playerSelected = element.parentNode.children[1].innerText;

        const addPlayer = document.getElementById('list-container');

        const list = document.querySelectorAll('ol li');
        if (list.length < 5) {
            const li = document.createElement('li');
            li.innerText = playerSelected;
            li.classList.add('listPlayer');
            addPlayer.appendChild(li);
        }
        else {
            alert('You Can not select player')
        }

        // const listed = document.querySelectorAll('li');
        // for (const lists of listed) {
        //     lists.style.margin = '100px';
        // }

        const listed = document.getElementsByClassName('listPlayer');
        for (const lists of listed) {
            lists.style.margin = '10px';
        }
    }
}
