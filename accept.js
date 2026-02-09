let count = 0;
let giftBtn = document.getElementById("giftbtn");
let giftImage = document.getElementById("giftimage");
let giftText = document.getElementById("gifttext");

const propose = new Image();
propose.src = 'graphics/propose.webp';
const chocolate  = new Image();
chocolate.src = 'graphics/chocolate.webp';
const promise = new Image();
promise.src = 'graphics/promise.gif';
const teddy  = new Image();
teddy.src = 'graphics/teddy-bear.gif';
const hug = new Image();
hug.src = 'graphics/hug.webp';
const kiss = new Image();
kiss.src = 'graphics/kiss.webp';
const bite = new Image();
bite.src = 'graphics/bite.gif';

giftBtn.addEventListener("click", function() {
    switch(count) {
        case 0:
            giftImage.removeAttribute("hidden");
            giftText.innerText = "Roses for my Rose 💝";
            count++;
            giftBtn.innerText = "CLICK AGAIN FOR MORE SURPRISES BABYYY.";
            break;

        case 1:
            giftImage.removeAttribute("hidden");
            giftImage.src = propose.src;
            giftText.innerText = "Here's your Propose Ring💍. WILL YOU BE MINE FOREVER??";
            count++;
            break;

        case 2:
            giftImage.removeAttribute("hidden");
            giftImage.src = chocolate.src;
            giftText.innerText = "Enjoy your Chocolate 🍫 HEHE!";
            count++;
            break;

        case 3:
            giftImage.removeAttribute("hidden");
            giftImage.src = teddy.src;
            giftText.innerText = " A BIGGG Teddy Bear 🧸 ";
            count++;
            break;

        case 4:
            giftImage.removeAttribute("hidden");
            giftImage.src = promise.src;
            giftText.innerText = " I Promise to Love You Forever MYCHAAA!!!";
            count++;
            break;

        case 5:
            giftImage.removeAttribute("hidden");
            giftImage.src = hug.src;
            giftText.innerText = " HEHEHE A BIG WARM HUG FOR MY BABY.";
            count++;
            break;

        case 6:
            giftImage.removeAttribute("hidden");
            giftImage.src = kiss.src;
            giftText.innerText = "MUAHHHHHHHHHHHHHHHH";
            count++;
            break;

        case 7:
            giftImage.removeAttribute("hidden");
            giftImage.src = bite.src;
            giftText.innerText = "HAPPY VALENTINE'S MY BABY MYCHA!!! I LOVE YOU SO MUCHHH!!";
            count++;
            break;

        default:
            giftText.innerText = "You're the Best! I Hope You Loved Your Gifts MYCHA. I LOVE YOU SO MUCHHH!!";
            giftBtn.disabled = true;
            giftBtn.innerText = "SAKKYOOO HEHE. HAPPY VALENTINE'S MYCHA!!!";
    }
});