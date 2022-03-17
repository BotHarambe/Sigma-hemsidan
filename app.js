var typeText = document.querySelector(".typeText");
var text = "Sigma Male, Money Grinder , Moneymaker";
var nummer = 0,
  plus = true;

function playAnim() {
  setTimeout(function () {
    typeText.innerText = text.slice(0, nummer);
    if (plus) {
      if (nummer > text.length) {
        plus = false;

        setTimeout(function () {
          playAnim();
        });
        return;
      } else {
        nummer++;
      }
    } else {
      if (nummer === 0) {
        plus = true;
      } else {
        nummer--;
      }
    }

    playAnim();
  }, 120);
}

playAnim();

///////////////////////////////////////////
var typeText2 = document.querySelector(".typeText2");
var text2 = "Money Grinder , Money Maker, Lone Wolfs";
var nummer2 = 0,
  plus2 = true;

function playAnim2() {
  setTimeout(function () {
    typeText2.innerText = text2.slice(0, nummer);
    if (plus2) {
      if (nummer2 > text2.length) {
        plus2 = false;

        setTimeout(function () {
          playAnim2();
        });
        return;
      } else {
        nummer2++;
      }
    } else {
      if (nummer2 === 0) {
        plus2 = true;
      } else {
        nummer2--;
      }
    }

    playAnim2();
  }, 120);
}

playAnim2();

/////////////////////////////////////////////////////////////
