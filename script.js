

const btns = document.querySelectorAll('button')



for(let i = 0; i<btns.length; i++){
  

    btns[i].addEventListener('click', function(){
      data = this.dataset.png;
    //         document.body.style.backgroundImage=`url("textures/${data}");`
console.log(typeof(this.dataset.png));

        
                document.body.style.backgroundImage=`url("textures/${data}")`;
}
    )}
