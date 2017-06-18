
let main = {
hideshow:function(){
const ext = document.getElementById('extra');
const extdiv = document.querySelector('.extra');
const css = document.getElementById('css');
const cssdiv = document.querySelector('.css');
const util = document.getElementById('utilities');
const utildiv = document.querySelector('.utilities');
const dispjs = document.getElementById('dispjs');
const dispjsdiv = document.querySelector('.displayjsdiv');
const dispjsnavdiv = document.querySelector('.jsnavigation');

//event delegation may be used here
ext.addEventListener('click', function(){
extdiv.classList.toggle('extra');
})
css.addEventListener('click', function(){
cssdiv.classList.toggle('css');
})
util.addEventListener('click', function(){
utildiv.classList.toggle('utilities');
})

dispjs.addEventListener('click', function(){
dispjsdiv.classList.toggle('displayjsdiv');
dispjsnavdiv.classList.toggle('jsnavigation');

})




  }
}

main.hideshow();