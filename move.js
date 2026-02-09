const no = document.getElementById("move");
const comment = document.getElementById('comment');
const yes = document.getElementById("yes");
const yesrow = 1;
const yescol = 3;
let norow = 1;
let nocol = 4;
let count = 0;

const nextImage = new Image();
nextImage.src = 'graphics/please.gif';

no.addEventListener('mouseover', moveButton);
no.addEventListener('click', moveButton);

yes.addEventListener('click', function() {
    window.location.href = 'accept.html';
});

function moveButton() {
        while(true) {
        let newcol = Math.floor(Math.random() * 6) + 1;
        let newrow = Math.floor(Math.random() * 6) + 1;
        const hitsYes = (newrow === yesrow && newcol === yescol);
        const hitsSelf = (newrow === norow && newcol === nocol);

        if (!hitsYes && !hitsSelf) {
            norow = newrow;
            nocol = newcol;
            break; 
        }
    }
    // Update the parent div's grid position
    no.style.gridColumnStart = nocol;
    no.style.gridRowStart = norow;
    count++;
    if(count > 10) {
        comment.innerText = "Please stop playing babyyyyyy.";
        document.getElementById('topgif').src = nextImage.src;
    }
}