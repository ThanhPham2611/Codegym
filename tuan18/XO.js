const broad_el = document.querySelector('#broad');
const cell_els = document.querySelectorAll('#broad .cell');
const combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let currentTurn;
setup();

function setup() {
    broad_el.classList.remove('turn-x','turn-o');
    
    for(let cell of cell_els){
        cell.classList.remove('x','o');
        cell.addEventListener('click',fillCell, { once: true});
    }

    currentTurn = Math.round(Math.random(0,1)) == 1 ? 'o' : 'x';
    broad_el.classList.add('turn-' + currentTurn); 
}

function fillCell() {
    this.classList.add(currentTurn);

    if(checkWin()){
        const restart = confirm(currentTurn.toUpperCase() + " is the winner! Restart ?")

        if(restart) setup();
    }
    else if(checkDraw()){
        const restart = confirm("It's draw! Restart?");

        if(restart) setup();
    }
    else{
        currentTurn = currentTurn == 'x' ? 'o' :'x';
        broad_el.classList.remove('turn-o', 'turn-x'); 
        broad_el.classList.add('turn-' + currentTurn); 
    }
}

function checkWin() {
    return combinations.some(combination => {
        return combination.every(c =>{
            if(cell_els[c].classList.contains(currentTurn)){
                return true;
            }
            else{
                return false;
            }
        });
    });
}

function checkDraw() {
    return [...cell_els].every(c =>{
        if(c.classList.contains('x') || c.classList.contains('o')){
            return true;
        }
        else{
            return false;
        }
    })
}