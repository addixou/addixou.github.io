$(function () {
  over_flg = "";
  $('.name p').click(function() { 
    if ($(this).attr('class') == 'selected') {
      // メニュー非表示
      $(this).removeClass('selected').next('div').slideUp('fast');
    } else {
      // 表示しているメニューを閉じる
      $('.name p').removeClass('selected');
      $('.name .dmenu').hide();

      // メニュー表示
      $(this).addClass('selected').next('div').slideDown('fast');
    }    
  });
  
  // マウスカーソルがメニュー上/メニュー外
  $('.name p,.name .dmenu').hover(function(){
    over_flg = true;
  }, function(){
    over_flg = false;
  });  
  
  // メニュー領域外をクリックしたらメニューを閉じる
  $('body').click(function() {
    if (over_flg == false) {
      $('.name p').removeClass('selected');
      $('.name .dmenu').slideUp('fast');
    }
  });
});