let score = 0;

function mouseOver1() {
  document.getElementById("penguin1").src = "./images/mound_hover.png";
}

function mouseOut1() {
  document.getElementById("penguin1").src = "./images/mound.png";
}

function mouseOver2() {
  document.getElementById("penguin2").src = "./images/mound_hover.png";
}

function mouseOut2() {
  document.getElementById("penguin2").src = "./images/mound.png";
}

function mouseOver3() {
  document.getElementById("penguin3").src = "./images/mound_hover.png";
}

function mouseOut3() {
  document.getElementById("penguin3").src = "./images/mound.png";
}

function mouseOver4() {
  document.getElementById("penguin4").src = "./images/mound_hover.png";
}

function mouseOut4() {
  document.getElementById("penguin4").src = "./images/mound.png";
}

function mouseOver5() {
  document.getElementById("penguin5").src = "./images/mound_hover.png";
}

function mouseOut5() {
  document.getElementById("penguin5").src = "./images/mound.png";
}

function mouseOver6() {
  document.getElementById("penguin6").src = "./images/mound_hover.png";
}

function mouseOut6() {
  document.getElementById("penguin6").src = "./images/mound.png";
}

function mouseOver7() {
  document.getElementById("penguin7").src = "./images/mound_hover.png";
}

function mouseOut7() {
  document.getElementById("penguin7").src = "./images/mound.png";
}

function mouseOver8() {
  document.getElementById("penguin8").src = "./images/mound_hover.png";
}

function mouseOut8() {
  document.getElementById("penguin8").src = "./images/mound.png";
}

function mouseOver9() {
  document.getElementById("penguin9").src = "./images/mound_hover.png";
}

function mouseOut9() {
  document.getElementById("penguin9").src = "./images/mound.png";
}

let images = new Array();

images[0] = "./images/penguin0.png";
images[1] = "./images/penguin1.png";
images[2] = "./images/penguin2.png";
images[3] = "./images/penguin3.png";
images[4] = "./images/penguin4.png";
images[5] = "./images/penguin5.png";
images[6] = "./images/penguin6.png";
images[7] = "./images/penguin7.png";
images[8] = "./images/yeti.png";

let shuffled = [];

while (images.length) {
  shuffled.push(images.splice(Math.random() * images.length, 1));
}

function click1() {
  document.getElementById("penguin1").src = shuffled[0];
  document.getElementById("penguin1").removeAttribute("onmouseout");
  document.getElementById("penguin1").removeAttribute("onmouseover");
  document.getElementById("penguin1").removeAttribute("onclick");

  if (shuffled[0] == "./images/yeti.png") {
    stopGame();
  } else {
    score++;
    document.getElementById("scorepara").innerHTML = "Score: " + score;
    if (score === 8) {
      stopGame();
    }
  }
}

function click2() {
  document.getElementById("penguin2").src = shuffled[1];
  document.getElementById("penguin2").removeAttribute("onmouseout");
  document.getElementById("penguin2").removeAttribute("onmouseover");
  document.getElementById("penguin2").removeAttribute("onclick");

  if (shuffled[1] == "./images/yeti.png") {
    stopGame();
  } else {
    score++;
    document.getElementById("scorepara").innerHTML = "Score: " + score;
    if (score === 8) {
      stopGame();
    }
  }
}

function click3() {
  document.getElementById("penguin3").src = shuffled[2];
  document.getElementById("penguin3").removeAttribute("onmouseout");
  document.getElementById("penguin3").removeAttribute("onmouseover");
  document.getElementById("penguin3").removeAttribute("onclick");

  if (shuffled[2] == "./images/yeti.png") {
    stopGame();
  } else {
    score++;
    document.getElementById("scorepara").innerHTML = "Score: " + score;
    if (score === 8) {
      stopGame();
    }
  }
}

function click4() {
  document.getElementById("penguin4").src = shuffled[3];
  document.getElementById("penguin4").removeAttribute("onmouseout");
  document.getElementById("penguin4").removeAttribute("onmouseover");
  document.getElementById("penguin4").removeAttribute("onclick");

  if (shuffled[3] == "./images/yeti.png") {
    stopGame();
  } else {
    score++;
    document.getElementById("scorepara").innerHTML = "Score: " + score;
    if (score === 8) {
      stopGame();
    }
  }
}

function click5() {
  document.getElementById("penguin5").src = shuffled[4];
  document.getElementById("penguin5").removeAttribute("onmouseout");
  document.getElementById("penguin5").removeAttribute("onmouseover");
  document.getElementById("penguin5").removeAttribute("onclick");

  if (shuffled[4] == "./images/yeti.png") {
    stopGame();
  } else {
    score++;
    document.getElementById("scorepara").innerHTML = "Score: " + score;
    if (score === 8) {
      stopGame();
    }
  }
}

function click6() {
  document.getElementById("penguin6").src = shuffled[5];
  document.getElementById("penguin6").removeAttribute("onmouseout");
  document.getElementById("penguin6").removeAttribute("onmouseover");
  document.getElementById("penguin6").removeAttribute("onclick");

  if (shuffled[5] == "./images/yeti.png") {
    stopGame();
  } else {
    score++;
    document.getElementById("scorepara").innerHTML = "Score: " + score;
    if (score === 8) {
      stopGame();
    }
  }
}

function click7() {
  document.getElementById("penguin7").src = shuffled[6];
  document.getElementById("penguin7").removeAttribute("onmouseout");
  document.getElementById("penguin7").removeAttribute("onmouseover");
  document.getElementById("penguin7").removeAttribute("onclick");

  if (shuffled[6] == "./images/yeti.png") {
    stopGame();
  } else {
    score++;
    document.getElementById("scorepara").innerHTML = "Score: " + score;
    if (score === 8) {
      stopGame();
    }
  }
}

function click8() {
  document.getElementById("penguin8").src = shuffled[7];
  document.getElementById("penguin8").removeAttribute("onmouseout");
  document.getElementById("penguin8").removeAttribute("onmouseover");
  document.getElementById("penguin8").removeAttribute("onclick");

  if (shuffled[7] == "./images/yeti.png") {
    stopGame();
  } else {
    score++;
    document.getElementById("scorepara").innerHTML = "Score: " + score;
    if (score === 8) {
      stopGame();
    }
  }
}

function click9() {
  document.getElementById("penguin9").src = shuffled[8];
  document.getElementById("penguin9").removeAttribute("onmouseout");
  document.getElementById("penguin9").removeAttribute("onmouseover");
  document.getElementById("penguin9").removeAttribute("onclick");

  if (shuffled[8] == "./images/yeti.png") {
    stopGame();
  } else {
    score++;
    document.getElementById("scorepara").innerHTML = "Score: " + score;
    if (score === 8) {
      stopGame();
    }
  }
}

function stopGame() {
  let hscore = parseInt(localStorage.getItem("hscore"));
  if (hscore) {
    let maxScore = Math.max(hscore, score);
    localStorage.setItem("hscore", maxScore);
    document.getElementById("hscorepara").innerHTML = "High Score: " + maxScore;
  } else {
    localStorage.setItem("hscore", score);
    document.getElementById("hscorepara").innerHTML = "High Score: " + score;
  }
  let startbtn = document.getElementById("startbtn");
  startbtn.setAttribute("class", "d-inline-block btn btn-primary");
  startbtn.setAttribute("onclick", "start()");

  if (score !== 8) {
    document.getElementById("para").innerHTML = "ROOOOOAAAARRRRRR!!!!";
  } else {
    document.getElementById("para").innerHTML = "WINNNNEEERRRRRR!!!!";
    celebrate();
  }

  document.getElementById("penguin1").removeAttribute("onmouseout");
  document.getElementById("penguin1").removeAttribute("onmouseover");
  document.getElementById("penguin1").removeAttribute("onclick");
  document.getElementById("penguin2").removeAttribute("onmouseout");
  document.getElementById("penguin2").removeAttribute("onmouseover");
  document.getElementById("penguin2").removeAttribute("onclick");
  document.getElementById("penguin3").removeAttribute("onmouseout");
  document.getElementById("penguin3").removeAttribute("onmouseover");
  document.getElementById("penguin3").removeAttribute("onclick");
  document.getElementById("penguin4").removeAttribute("onmouseout");
  document.getElementById("penguin4").removeAttribute("onmouseover");
  document.getElementById("penguin4").removeAttribute("onclick");
  document.getElementById("penguin5").removeAttribute("onmouseout");
  document.getElementById("penguin5").removeAttribute("onmouseover");
  document.getElementById("penguin5").removeAttribute("onclick");
  document.getElementById("penguin6").removeAttribute("onmouseout");
  document.getElementById("penguin6").removeAttribute("onmouseover");
  document.getElementById("penguin6").removeAttribute("onclick");
  document.getElementById("penguin7").removeAttribute("onmouseout");
  document.getElementById("penguin7").removeAttribute("onmouseover");
  document.getElementById("penguin7").removeAttribute("onclick");
  document.getElementById("penguin8").removeAttribute("onmouseout");
  document.getElementById("penguin8").removeAttribute("onmouseover");
  document.getElementById("penguin8").removeAttribute("onclick");
  document.getElementById("penguin9").removeAttribute("onmouseout");
  document.getElementById("penguin9").removeAttribute("onmouseover");
  document.getElementById("penguin9").removeAttribute("onclick");
}

function start() {
  window.location.reload();
}

window.onload = function () {
  let hscore = parseInt(localStorage.getItem("hscore"));
  if (!isNaN(hscore) && hscore !== 8) {
    document.getElementById("hscorepara").innerHTML = "High Score: " + hscore;
  } else {
    document.getElementById("hscorepara").innerHTML = "High Score: 0";
    localStorage.setItem("hscore", 0);
  }
};

// animations
function celebrate() {
  for (i = 0; i < 100; i++) {
    // Random rotation
    var randomRotation = Math.floor(Math.random() * 360);
    // Random Scale
    var randomScale = Math.random() * 1;
    // Random width & height between 0 and viewport
    var randomWidth = Math.floor(
      Math.random() *
        Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    );
    var randomHeight = Math.floor(
      Math.random() *
        Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 500
        )
    );

    // Random animation-delay
    var randomAnimationDelay = Math.floor(Math.random() * 15);
    console.log(randomAnimationDelay);

    // Random colors
    var colors = [
      "#0CD977",
      "#FF1C1C",
      "#FF93DE",
      "#5767ED",
      "#FFC61C",
      "#8497B0",
    ];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Create confetti piece
    var confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.top = randomHeight + "px";
    confetti.style.right = randomWidth + "px";
    confetti.style.backgroundColor = randomColor;
    // confetti.style.transform='scale(' + randomScale + ')';
    confetti.style.obacity = randomScale;
    confetti.style.transform = "skew(15deg) rotate(" + randomRotation + "deg)";
    confetti.style.animationDelay = randomAnimationDelay + "s";
    document.getElementById("confetti-wrapper").appendChild(confetti);
  }
}
