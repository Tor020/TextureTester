
const btns = document.querySelectorAll('button')
for(let i = 0; i<btns.length; i++){
    btns[i].addEventListener('click', function(){
      data = this.dataset.png;
    //         document.body.style.backgroundImage=`url("textures/${data}");`

                document.body.style.backgroundImage=`url("textures/${data}")`;
}
    )}

gist = document.querySelector('.gist');

document.body.addEventListener('click', function(){
    // console.log('working');
    // gist.style.display='none';
gist.classList.toggle('hide');

})