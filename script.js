let v = 10;// 10 starts us at a flat line

ScrollTrigger.create({
  trigger: "#s1",
  onUpdate: (s) => {
    let _v = gsap.utils.clamp(-2000, 2000, s.getVelocity());
    v = gsap.utils.mapRange(-2000,2000, 0, 20,_v);
    _v = Math.abs(_v);
    if (_v < 200) return; // ignore velocity below this amount
    gsap.killTweensOf('.edge');
    gsap.timeline()
      .to('.edge', {
        duration:.1,
        ease:'none',
        attr:{ d:'M100,10 100,30 0,30 0,10 C0,10 19,'+v+' 50,'+v+' C81,'+v+' 100,10 100,10' }
      })
      .to('.edge', {
        duration:.5+_v/4000, // veloicty impacts duration
        ease:'elastic.out('+_v/1500+')', // and amount of elastic ease
        attr:{ d:'M100,10 100,30 0,30 0,10 C0,10 19,10 50,10 C81,10 100,10 100,10' }
      })
  }
});


// animate the up/down arrows
gsap.to('.arrow-down', {
  duration:0.3,
  opacity:0,
  yPercent:-50,
  easeReverse:'back.out(3)',
  ease:'sine.inOut',
  scrollTrigger:{
    trigger: "#s1",
    start:'0 -3%',
    toggleActions:'play none none reverse',
    fastScrollEnd:true
  }
})

gsap.from('.arrow-up', {
  duration:0.3,
  opacity:0,
  yPercent:50,
  ease:'back.out(3)',
  easeReverse:'sine.inOut',
  scrollTrigger:{
    trigger: "#s2",
    start:'0 2%',
    toggleActions:'play none none reverse',
    fastScrollEnd:true
  }
})



var rand = Math.random();

var map = document.querySelector('#starmap');

function makeStar() {
  var newstar = document.createElement('div');
  newstar.style.backgroundColor = '#fff';
  newstar.style.borderRadius = '50%';
  newstar.style.position = 'absolute';
  newstar.style.top = Math.random()*100 + '%';
  newstar.style.left = Math.random()*100 + '%';
  newstar.style.height = Math.random()*10 + 'px';
  newstar.style.width = newstar.style.height;
  newstar.classList.add('star');
  var glow = Math.random()*1;
  newstar.style.boxShadow = '0 0 ' + glow + 'px' + " " + glow/2 + 'px #fff';
  newstar.style.animationDuration = Math.random()*3+1 + 's';
  map.appendChild(newstar);
  
  var stArr = document.querySelectorAll('.star');
  if (stArr.length >= 500){
    clearInterval(fadeInt);
  }
  }

var fadeInt = setInterval(makeStar, 100);




