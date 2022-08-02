'use strict';

{
  var scroll = new SmoothScroll('a[href*="#"]');

  var humbuger = function humbuger() {
    var target = document.querySelector('[data-smenu="target"]'),
        trigger = document.querySelector('[data-smenu="trigger"]');
    trigger.addEventListener('click', function () {
      target.classList.toggle('active');
      trigger.classList.toggle('active');
    });
    target.addEventListener('click', function () {
      if (target.classList.contains('active')) {
        trigger.classList.remove('active');
        target.classList.remove('active');
      }
    });
  };

  humbuger();
    
  var humbuger_Language = function humbuger_Language() {
    var target_Language = document.querySelector('[data-smenu="target_Language"]'),
        trigger_Language = document.querySelector('[data-smenu="trigger_Language"]');
    trigger_Language.addEventListener('click', function () {
      target_Language.classList.toggle('active_Language');
      trigger_Language.classList.toggle('active_Language');
    });
    target_Language.addEventListener('click', function () {
      if (target_Language.classList.contains('active_Language')) {
        trigger_Language.classList.remove('active_Language');
        target_Language.classList.remove('active_Language');
      }
    });
  };
  humbuger_Language();
    
  
  ScrollReveal().reveal('[data-anime="fuwa"]', {
    duration: 800,
    // アニメーションの完了にかかる時間
    viewFactor: 0.2,
    // 0~1,どれくらい見えたら実行するか
    reset: true // 何回もアニメーション表示するか

  });
    
    

    
    
}