window.addEventListener('scroll',()=>{
  const header = document.querySelector('header');
  // console.log( window.scrollY );
  if( window.scrollY>0 ){
    header.classList.add('fix');
  }else{
    header.classList.remove('fix');
  }
});

const mainMenu = document.querySelectorAll('.gnb>ul>li');
/*
  for(let i=0; i<mainMenu.length; i++){
    mainMenu[i].addEventListener('mouseenter',(e)=>{
      if(window.innerWidth>=1200){
        if(e.currentTarget.querySelector('.sub')){
          e.currentTarget.querySelector('.sub').style.display = 'block';
        }
      }
    });
    mainMenu[i].addEventListener('mouseleave',(e)=>{
      if(window.innerWidth>=1200){
        if(e.currentTarget.querySelector('.sub')){
          e.currentTarget.querySelector('.sub').style.display = 'none';
        }
      }
    });
  }
*/
const enterFunc=(e)=>{
  if(e.currentTarget.querySelector('.sub')){
    e.currentTarget.querySelector('.sub').style.display = 'block';
  }
}
const leaveFunc=(e)=>{
  if(e.currentTarget.querySelector('.sub')){
    e.currentTarget.querySelector('.sub').style.display = 'none';
  }
}
const checkWindow=()=>{
  if( window.innerWidth>=1200 ){
    mainMenu.forEach((list)=>{
      list.addEventListener('mouseenter',enterFunc);
      list.addEventListener('mouseleave',leaveFunc);
    })
  }else{
    mainMenu.forEach((list)=>{
      list.removeEventListener('mouseenter',enterFunc);
      list.removeEventListener('mouseleave',leaveFunc);
    })
  }
}
checkWindow(); // 최초 실행
window.addEventListener('resize', checkWindow);

const toggle = document.querySelector('.toggle');
const gnb = document.querySelector('.gnb');
const bg = document.querySelector('.black_bg');
const gnbClose = document.querySelector('.close');
let toggleState = true;
toggle.addEventListener('click',()=>{
  if( toggleState ){
    gnb.style.left = 0;         
    bg.style.display = 'block';
    bg.style.zIndex = 99998;    
    toggleState = false;
  }else{
    gnb.style.left = '-70vw';
    bg.style.display = 'none';
    toggleState = true;
  }
})
gnbClose.addEventListener('click', ()=>{
  gnb.style.left = '-70vw';
  bg.style.display = 'none';
  toggleState = true;
})

mainMenu.forEach((mainMenu, index)=>{
  if(index===1){
    mainMenu.querySelector('a').addEventListener('click', (e)=>{
      //console.log( e.currentTarget.nextElementSibling.style )
      if( window.innerWidth<1200 ){       
        const sub = e.currentTarget.nextElementSibling;
        if(sub){ 
          e.preventDefault();  // console.log( this, e.target, e.currentTarget )
          if(sub.style.display=='none' || sub.style.display==''){
            sub.style.display='block';
          }else{
            sub.style.display='none';
          }
        }
      }
    });
  }
});

const searchForm = document.querySelector('#searchForm'); //('form')
searchForm.addEventListener('keypress', (event)=>{
  if( event.key==='Enter' ){ // keyCode 제어 바꾸기
    event.preventDefault();
    this.submit();
  }
});

/* swiper , gsap + scrollTrigger, textplugin  */


/* new_wrap>img slide로 만들기
  $(function(){
    const imgs = $('.latest1').children('img');  // .slides안 이미지 찾기  
    const imgNum = imgs.length;  // .slides 이미지 갯수 파악   ( .length 속성활용 )
    const imgWd = imgs.width();  // .slides 이미지 너비 파악
    $('.latest1').width( imgNum*imgWd );  // .slides 자체 너비 정의 ( 이미지width*이미지수 )
    // .slides 이동할 수치(거리) : -이미지width x ( 0,1,2,3 )
    let num = 0; //이동거리 증가변수 만들기
    $('.prev').hide();
    $('.next').on('click', function(event){
      event.preventDefault();
      if( num==0 ){
        $('.prev').fadeIn();
      }
      if( num<(imgNum-1) ){  //0<3 0++ ani --> 1<3 1++ ani --> 2<3 2++ ani ---> 3<3
        num++;   // 0, 1, 2, 3
        //if(num>=3){  num=3  }
        $('.latest1').stop().animate({ left:-imgWd*num }, 600);
      }
      if( num==(imgNum-1) ){
        $('.next').fadeOut();
      }
    });
    $('.prev').on('click', function(event){
      event.preventDefault();
      if( num==(imgNum-1) ){
        $('.next').fadeIn();
      }
      if( num>0 ){
        num--;
        $('.latest1').stop().animate({ left:-imgWd*num }, 600);
      }
      if( num==0 ){
        $('.prev').fadeOut();
      }
    })
  })
 */


// latest1>img 슬라이드 이미지
  $(function(){
    const imgs = $('.latest1').children('img');  // .slides안 이미지 찾기  
    const imgNum = imgs.length;  // .slides 이미지 갯수 파악 ( .length 속성활용 )
    const imgWd = imgs.width();  // .slides 이미지 너비 파악
    $('.latest1').width( imgNum*imgWd );  // .slides 자체 너비 정의 ( 이미지width*이미지수 )
    // .slides 이동할 수치(거리) : -이미지width x ( 0,1,2,3 )
    let num = 0; //이동거리 증가변수 만들기
    $('.prev').hide();
    $('.next').on('click', function(event){
      event.preventDefault();
      if( num==0 ){
        $('.prev').fadeIn();
      }
      if( num<(imgNum-1) ){  //0<3 0++ ani --> 1<3 1++ ani --> 2<3 2++ ani ---> 3<3
        num++;   // 0, 1, 2, 3
        //if(num>=3){  num=3  }
        $('.latest1').stop().animate({ left:-imgWd*num }, 600);
      }
      if( num==(imgNum-1) ){
        $('.next').fadeOut();
      }
    });
    $('.prev').on('click', function(event){
      event.preventDefault();
      if( num==(imgNum-1) ){
        $('.next').fadeIn();
      }
      if( num>0 ){
        num--;
        $('.latest1').stop().animate({ left:-imgWd*num }, 600);
      }
      if( num==0 ){
        $('.prev').fadeOut(); 
      }
    })
  })











