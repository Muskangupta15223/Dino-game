score = 0;
cross = true;
document.onkeydown = function (e) {
  // console.log ('key code is:', e.keyCode);
  if (e.keyCode == 38) {
    let dino = document.querySelector ('.dino');
    dinoX = parseInt (
      window.getComputedStyle (dino, null).getPropertyValue ('left')
    );
    dino.classList.add ('animatedino');
    setTimeout (() => {
      dino.style.left = dinoX + 190 + 'px';
      dino.classList.remove ('animatedino');
    }, 1300);
  }
  if (e.keyCode == 39) {
    dino = document.querySelector ('.dino');
    dinoX = parseInt (
      window.getComputedStyle (dino, null).getPropertyValue ('left')
    );
    dino.style.left = dinoX + 120 + 'px';
  }
  if (e.keyCode == 37) {
    dino = document.querySelector ('.dino');
    dinoX = parseInt (
      window.getComputedStyle (dino, null).getPropertyValue ('left')
    );
    dino.style.left = dinoX - 120 + 'px';
  }
};
setInterval (() => {
  dino = document.querySelector ('.dino');
  monster = document.querySelector ('.monster ');
  over = document.querySelector ('.over');
  scorebox = document.querySelector ('.scorecont');
  dx = parseInt (
    window.getComputedStyle (dino, null).getPropertyValue ('left')
  );
  dy = parseInt (window.getComputedStyle (dino, null).getPropertyValue ('top'));
  mx = parseInt (
    window.getComputedStyle (monster, null).getPropertyValue ('left')
  );
  my = parseInt (
    window.getComputedStyle (monster, null).getPropertyValue ('top')
  );

  offsetX = Math.abs (dx - mx);
  offsetY = Math.abs (dy - my);
  console.log (offsetX, offsetY);
  if (offsetX < 350 && offsetY < 300) {
    over.style.visibility = 'visible';
    monster.classList.remove ('monsterAnime');
  } else if (offsetX < 45 && cross) {
    score += 1;
    updateScore (score);
    cross = false;
    setTimeout (() => {
      cross = true;
    }, 500);
    setTimeout (() => {
      aniDur = parseFloat (
        window
          .getComputedStyle (monster, null)
          .getPropertyValue ('animation-duration')
      );
      newDur = aniDur - 0.3;
      monster.style.animationDuration = newDur + 's';
    }, 700);
  }
}, 70);

function updateScore (score) {
  scorebox.innerHTML = 'Your score:' + score;
}
