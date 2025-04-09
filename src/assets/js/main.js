const bnt = document.querySelector('.lang__mode')
const mode = document.querySelector('body')

if(localStorage.getItem('langMode') === 'lang'){
    bnt.classList.add('lang__mode--active');
    mode.classList.add('lang');
}

bnt.onclick = function() {
    const isBtn = bnt.classList.toggle('lang__mode--active');
    const isMode = mode.classList.toggle('lang');
}

const bnt1 = document.querySelector('.lang__mode__item')
const mode1 = document.querySelector('body')

if(localStorage.getItem('langMode1') === 'lang1'){
    bnt.classList.add('lang__mode--active1');
    mode.classList.add('lang1');
}

bnt1.onclick = function() {
    const isBtn = bnt1.classList.toggle('lang__mode--active1');
    const isMode = mode1.classList.toggle('lang1');
}

document.querySelector('button').addEventListener('click', function() {
    var elementOne = document.getElementById('one');
    var elementTwo = document.getElementById('two');
    
    if (elementOne.classList.contains("color")) {
      elementOne.classList.remove("color");
      elementTwo.classList.add("color");
    } else {
      elementOne.classList.add("color");
      elementTwo.classList.remove("color");
    }
  })
