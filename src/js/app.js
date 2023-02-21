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

getHole = index => document.getElementById(`hole${index}`) 
for (index=1; index <= 9; index++) {        
    getHole(index).onclick = (click) => {
        if (click.target.className.includes('hole hole_has-mole')) {
            dead = document.getElementById(`dead`);            
            dead.textContent = Number(dead.textContent) + 1
            click.target.className = 'hole'
            if (Number(dead.textContent) === 10) {
                dead.textContent = 0
                lost.textContent = 0
                alert('Вы выиграли')
            }
        }    
        else {
            lost = document.getElementById(`lost`);            
            lost.textContent = Number(lost.textContent) + 1
            if (Number(lost.textContent) === 10) {
                dead.textContent = 0
                lost.textContent = 0
                alert('Вы проиграли')                
            }
        }    
        
    }    
}
} else {
  // console.log('You are on the server');
}
