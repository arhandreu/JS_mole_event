if (typeof window !== 'undefined') {
  (() => {
    let playing = true;
    let activeHole = 1;

    const stop = () => playing = true;
    const getHole = (index) => document.getElementById(`hole${index}`);
    const deactivateHole = (index) => getHole(index).className = 'hole';
    const activateHole = (index) => getHole(index).className = 'hole hole_has-mole';
    const next = () => setTimeout(() => {
      if (!playing) {
        return;
      }
      deactivateHole(activeHole);
      activeHole = Math.floor(1 + Math.random() * 16);
      activateHole(activeHole);
      next();
    }, 800);

    next();
  })();

  const getHole = (index) => document.getElementById(`hole${index}`);
  for (let index = 1; index <= 9; index += 1) {
    getHole(index).onclick = (click) => {
      if (click.target.className.includes('hole hole_has-mole')) {
        const dead = document.getElementById('dead');
        dead.textContent = Number(dead.textContent) + 1;
        click.target.className = 'hole';
        if (Number(dead.textContent) === 5) {
          dead.textContent = 0;
          lost.textContent = 0;
          alert('Вы выиграли');
        }
      } else {
        const lost = document.getElementById('lost');
        lost.textContent = Number(lost.textContent) + 1;
        if (Number(lost.textContent) === 5) {
          dead.textContent = 0;
          lost.textContent = 0;
          alert('Вы проиграли');
        }
      }
    };
  }
} else {
  // console.log('You are on the server');
}
