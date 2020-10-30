document.onkeydown = function(e){
    console.log("key code is: ", e.keyCode)
    if(e.keyCode==38){
        guy = document.querySelector('.guy');
        guy.classList.add('animateGuy');
        setTimeout(() => {
           guy.classList.remove('animateGuy') 
        }, 1000); 
    }
}
 