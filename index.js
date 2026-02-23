const menuList = document.querySelectorAll('.menu-item');

menuList.forEach((element)=>{
    element.addEventListener('click',function(e){
        const thisElementId = e.target.id;
        menuList.forEach((element)=>{
            if(element.id == thisElementId){
                element.classList.add('selected');
            }else{
                element.classList.remove('selected');
            }
        })
      
    })
})