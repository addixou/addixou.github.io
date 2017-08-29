
(function ($) {
	$(document).ready(function () {
		$('.bxslider').bxSlider({
			adaptiveHeight: true,
			auto: true,
			controls: false,
			mode: 'fade',
			speed: '100',
			easing: 'ease-in-out',
			pause: '7000'
		});
	})
	
    $(function() {
        
        // Nav Toggle Button
        $('#nav-toggle').click(function(){
        	var $mene = $('#global-nav');
        	$mene.toggleClass('active');
        	var $toggle = $('#nav-toggle');
        	$toggle.toggleClass('active');
        });
        
        $('#howto-box1-button').click(function(){
        	var $button1 = $('#howto-box1-button');
        	var $button2 = $('#howto-box2-button');
        	var $button3 = $('#howto-box3-button');
        	var $box1 = $('#howto-box1');
        	var $box2 = $('#howto-box2');
        	var $box3 = $('#howto-box3');
        	var $tablehint = $("#table-hint");
        	
        	$box1.toggleClass('show');
        	$box2.removeClass('show');
        	$box3.removeClass('show');
        	var txt = $button1.html();
        	if ($box1.hasClass('show')) {
        		$box1.fadeIn();
        		$tablehint.hide();
        		$button1.html(txt.replace(/▼/g,"▲"));
        	} else {
        		$box1.hide();
        		$tablehint.fadeIn();
        		$button1.html(txt.replace(/▲/g,"▼"));
        	}
        	$box2.hide();
        	$box3.hide();
        	txt = $button2.html();
        	$button2.html(txt.replace(/▲/g,"▼"));
        	txt = $button3.html();
        	$button3.html(txt.replace(/▲/g,"▼"));
        });
        $('#howto-box2-button').click(function(){
        	var $button1 = $('#howto-box1-button');
        	var $button2 = $('#howto-box2-button');
        	var $button3 = $('#howto-box3-button');
        	var $box1 = $('#howto-box1');
        	var $box2 = $('#howto-box2');
        	var $box3 = $('#howto-box3');
        	var $tablehint = $("#table-hint");
        	
        	$box1.removeClass('show');
        	$box2.toggleClass('show');
        	$box3.removeClass('show');
        	var txt = $button2.html();
        	if ($box2.hasClass('show')) {
        		$box2.fadeIn();
        		$tablehint.hide();
        		$button2.html(txt.replace(/▼/g,"▲"));
        	} else {
        		$box2.hide();
        		$tablehint.fadeIn();
        		$button2.html(txt.replace(/▲/g,"▼"));
        	}
        	txt = $button1.html();
        	$box1.hide();
        	$button1.html(txt.replace(/▲/g,"▼"));
        	txt = $button3.html();
        	$box3.hide();
        	$button3.html(txt.replace(/▲/g,"▼"));
        });
        $('#howto-box3-button').click(function(){
        	var $button1 = $('#howto-box1-button');
        	var $button2 = $('#howto-box2-button');
        	var $button3 = $('#howto-box3-button');
        	var $box1 = $('#howto-box1');
        	var $box2 = $('#howto-box2');
        	var $box3 = $('#howto-box3');
        	var $tablehint = $("#table-hint");
        	
        	$box1.removeClass('show');
        	$box2.removeClass('show');
        	$box3.toggleClass('show');
        	var txt = $button3.html();
        	if ($box3.hasClass('show')) {
        		$box3.fadeIn();
        		$tablehint.hide();
        		$button3.html(txt.replace(/▼/g,"▲"));
        	} else {
        		$box3.hide();
        		$tablehint.fadeIn();
        		$button3.html(txt.replace(/▲/g,"▼"));
        	}
        	txt = $button2.html();
        	$box2.hide();
        	$button2.html(txt.replace(/▲/g,"▼"));
        	txt = $button1.html();
        	$box1.hide();
        	$button1.html(txt.replace(/▲/g,"▼"));
        });
    });
})(jQuery);