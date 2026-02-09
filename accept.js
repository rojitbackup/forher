let count = 0;
let giftBtn = document.getElementById("giftbtn");
let giftImage = document.getElementById("giftimage");
let giftText = document.getElementById("gifttext");

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
            giftImage.src = "graphics/propose.webp";
            giftText.innerText = "Here's your Propose Ring💍. WILL YOU BE MINE FOREVER??";
            count++;
            break;

        case 2:
            giftImage.removeAttribute("hidden");
            giftImage.src = "graphics/chocolate.webp";
            giftText.innerText = "Enjoy your Chocolate 🍫 HEHE!";
            count++;
            break;

        case 3:
            giftImage.removeAttribute("hidden");
            giftImage.src = "graphics/teddy-bear.gif";
            giftText.innerText = " A BIGGG Teddy Bear 🧸 ";
            count++;
            break;

        case 4:
            giftImage.removeAttribute("hidden");
            giftImage.src = "graphics/promise.gif";
            giftText.innerText = " I Promise to Love You Forever MYCHAAA!!!";
            count++;
            break;

        case 5:
            giftImage.removeAttribute("hidden");
            giftImage.src = "graphics/hug.webp";
            giftText.innerText = " HEHEHE A BIG WARM HUG FOR MY BABY.";
            count++;
            break;

        case 6:
            giftImage.removeAttribute("hidden");
            giftImage.src = "graphics/kiss.webp";
            giftText.innerText = "MUAHHHHHHHHHHHHHHHH";
            count++;
            break;

        case 7:
            giftImage.removeAttribute("hidden");
            giftImage.src = "graphics/bite.gif";
            giftText.innerText = "HAPPY VALENTINE'S MY BABY MYCHA!!! I LOVE YOU SO MUCHHHHHHHHHHHHHH";
            count++;
            break;

        default:
            giftText.innerText = "You're the Best! I Hope You Loved Your Gifts MYCHA. I LOVE YOU SO MUCHHH";
            giftBtn.disabled = true;
            giftBtn.innerText = "SAKKYOOO HEHE. HAPPY VALENTINE'S MYCHA!!!";
    }


});