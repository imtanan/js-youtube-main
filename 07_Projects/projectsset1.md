## PROJECT 1 Solution:
let btnList = document.querySelectorAll(".button")
let body = document.querySelector('body')
btnList.forEach(function(btn){
   btn.addEventListener('click', function(e){
     switch (e.target.id){
     case e.target.id:
     body.style.backgroundColor = `${e.target.id}`;
     break;
     }
   })
})