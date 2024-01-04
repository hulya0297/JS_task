
let imgArr=['img1.jpg','img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
let index = 0;



const defaultimg = document.querySelector(".inside_img");
const leftswipe = document.querySelector(".left_icon");
const rightswpie = document.querySelector(".right_icon");
const defaultslider = imgArr.length;


rightswpie.addEventListener('click', function(){
    index++;
    if(index === defaultslider){
        index = 0;
       
    }
    defaultimg.setAttribute('src', `task6img/${imgArr[index]}`);

 

})
leftswipe.addEventListener('click', function(){
    index--;
    if(index < 0){
        index = defaultslider-1;

    }
    defaultimg.setAttribute('src', `task6img/${imgArr[index]}`);

})


    
    

