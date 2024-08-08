var swiperCategories = new Swiper(".categories__container", {
    spaceBetween:24,
    loop:true,
    
    navigation: {
      nextEl: ".fi-rs-angle-small-right",
      prevEl: ".fi-rs-angle-small-left",
    },

    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
  });


  var swiperProducts = new Swiper(".new__container", {
    spaceBetween:24,
    loop:true,
    
    navigation: {
      nextEl: ".fi-rs-angle-small-right",
      prevEl: ".fi-rs-angle-small-left",
    },

    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
  });

  const tabs = document.querySelectorAll('[data-target]'),
  tabContents= document.querySelectorAll('[content]');

  tabs.forEach((tab)=>{
    tab.addEventListener('click', ()=>{
        const target= document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContent)=>{
            tabContent.classList.remove('active-tab');
        });
        target.classList.add('active-tab');

        tabs.forEach((tab)=>{
            tab.classList.remove('active-tab');
        });
        tab.classList.add('active-tab');
    })
  })
  function idHandleFun (idValue){
    const idValueof =  document.getElementById(idValue)
  return idValueof
 }
 function classHandleFun (classValue){
    const classValueof =  document.querySelector(classValue)
  return classValueof
 }

 


const navbar = classHandleFun('.nav__list')
 const search = idHandleFun('search-icon')
 const input = classHandleFun('.form__input')

 const menuIcon = idHandleFun("menu-icon");


 function menufn(){
  input.classList.toggle('active')
  navbar.classList.remove('active')
 }

 function navfn(){
  navbar.classList.toggle('active')
  input.classList.remove('active')
 }

 search.addEventListener("click", menufn);
 menuIcon.addEventListener('click',navfn)

//  menuIcon.addEventListener("click", menufn)


//  function handleClickEvent(addValue, removeValue ){
//   addValue.classList.toggle('active');

//       removeValue.classList.remove('active');

// }

//  menuIcon.addEventListener("click" ,()=>{handleClickEvent(navbar,search)})
//  inputSearch.addEventListener("click" ,()=>{handleClickEvent(search,navbar)})