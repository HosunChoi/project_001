// js / src/ cl_about.js

(function($){

  // jQuery
  var win = $(window);
  
  var viewBox = $('#viewBox');
  var viewLetter = viewBox.find('.view_letter');
  
  
  // 변수 --------------------------------------------------
  var part = $('.part2');
  var li = part.find('li');
  // 이벤트 --------------------------------------------------
  win.on('scroll', function(e){
    var winScroll = win.scrollTop();
    // ---------------------------------------------
    var winH = win.outerHeight();
    var liOffset, liPImg, findScroll, percentScroll, per;
    
    var i=0;
    for(; i < li.length; i++){
      liPImg = li.eq(i).find('.position_img');
      liOffset = liPImg.offset().top;
      // ---------------------------------------------
      // 선택된형태가 브라우저 하단에서 0부터 값나오도록 
      findScroll = winScroll - liOffset + winH; 
      // %계산법 : 스크롤값 / 기준치 * 100
      percentScroll = parseInt(findScroll / winH * 100);
      per = percentScroll;
      if (percentScroll < 0){ per = 0; } else if (percentScroll > 100){ per = 100; } 
      // liPImg.stop().animate({marginTop: -per/3 + 'px'}, 300 );
      liPImg.css({transform:'translateY(' + -per  + '%)', transition:'all 300ms linear'});
      } // for
  });
  
  
  
  
  })(jQuery);