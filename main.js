let add=document.getElementById('increment');
let remove=document.getElementById('decrement');
let number=document.getElementById('number');
let count=0;

add.addEventListener('click',function(){
    count+=1;
    number.innerHTML=count;
})

remove.addEventListener('click',function(){
    count-=1;
    number.innerHTML=count;
})