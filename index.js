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

const topContent = document.querySelector('.top-content');
const mobileMenu = document.querySelector('.mobile-menu');

const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    // Ambil tinggi header pertama
    const height = entry.borderBoxSize[0].blockSize;
    // Set nilai 'top' header kedua sesuai tinggi header pertama
    mobileMenu.style.top = `${height}px`;
  }
});

resizeObserver.observe(topContent);