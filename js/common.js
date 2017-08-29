$(function() {
  $('.menutoggle').click(function() {
    $('.menu').slideToggle();
  });
});

$(document).ready(function() {

  $.ajax({
    url: "/App/checkNotification",
    type: "post",
    success: function(response) {
      if (response) {
        $("#bell").empty().append('<img src="/img/done.png" id="bell-img">');
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {}
  });

  $("#bell").click(function() {
    $.ajax({
      url: "/App/checkedNotification",
      type: "post",
      success: function(response) {
        $("#bell").empty().append('<img src="/img/undone.png" id="bell-img">');
      },
      error: function(jqXHR, textStatus, errorThrown) {},
      complete: function(jqXHR, textStatus) {
        window.location = "/notices";
      }
    });
  });

  // $('.acdHead .registered').next().addClass('dropdown_acdArrow');
  // $(".acdBody .registered").parent().css('display', 'none');

  $("#language").change(function() {
    $lang_id = $("#language option:selected").val();
    $.ajax({
      url: "/App/setLanguage",
      type: "post",
      data: {
        'lang_id': $lang_id
      },
      success: function(response) {
        location.reload();
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      }
    });
  });

  $("#language_mb").change(function() {
    $lang_id = $("#language_mb option:selected").val();
    $.ajax({
      url: "/App/setLanguage",
      type: "post",
      data: {
        'lang_id': $lang_id
      },
      success: function(response) {
        //alert(response);
        location.reload();
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      }
    });
  });

  var url = window.location.href;
  var hashtag1 = url.indexOf('#howto-box1-button');
  var hashtag2 = url.indexOf('#howto-box2-button');
  var hashtag3 = url.indexOf('#howto-box3-button');
  if (hashtag1 != '-1') {
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
      $button1.html(txt.replace(/▼/g, "▲"));
    } else {
      $box1.hide();
      $tablehint.fadeIn();
      $button1.html(txt.replace(/▲/g, "▼"));
    }
    $box2.hide();
    $box3.hide();
    txt = $button2.html();
    $button2.html(txt.replace(/▲/g, "▼"));
    txt = $button3.html();
    $button3.html(txt.replace(/▲/g, "▼"));
  } else if (hashtag2 != '-1') {
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
      $button2.html(txt.replace(/▼/g, "▲"));
    } else {
      $box2.hide();
      $tablehint.fadeIn();
      $button2.html(txt.replace(/▲/g, "▼"));
    }
    txt = $button1.html();
    $box1.hide();
    $button1.html(txt.replace(/▲/g, "▼"));
    txt = $button3.html();
    $box3.hide();
    $button3.html(txt.replace(/▲/g, "▼"));
  } else if (hashtag3 != '-1') {
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
      $button3.html(txt.replace(/▼/g, "▲"));
    } else {
      $box3.hide();
      $tablehint.fadeIn();
      $button3.html(txt.replace(/▲/g, "▼"));
    }
    txt = $button2.html();
    $box2.hide();
    $button2.html(txt.replace(/▲/g, "▼"));
    txt = $button1.html();
    $box1.hide();
    $button1.html(txt.replace(/▲/g, "▼"));
  }
});

function getOutput() {
  getRequest(
    'readPDFfile' // URL for the PHP file
  );
  return false;
}

// helper function for cross-browser request object
function getRequest(url, success, error) {
  var req = false;
  try {
    // most browsers
    req = new XMLHttpRequest();
  } catch (e) {
    // IE
    try {
      req = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      // try an older version
      try {
        req = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        return false;
      }
    }
  }
  if (!req) return false;
  if (typeof success != 'function') success = function() {};
  if (typeof error != 'function') error = function() {};
  req.onreadystatechange = function() {
    if (req.readyState == 4) {
      return req.status === 200 ?
        success(req.responseText) : error(req.status);
    }
  }
  req.open("GET", url, true);
  req.send(null);
  return req;
}

function check() {
  // エラークラス
  var errclass = "error";
  // エラーを初期化
  $("." + errclass).removeClass(errclass);
  $(".errmsg").html("");

  // フォームをシリアライズ
  var params = $("#frm").serialize();
  // チェック処理
  $.ajax({
    url: "../report_check",
    type: "POST",
    data: {
      "params": params,
      "dn": Math.random()
    },
    dataType: "jsonp",
    cache: true,
    success: function(data, status, xhr) {
      var cnt = data.length;

      if (cnt > 0) {
        $.each(data, function(i, item) {
          // --- エラークラスを設定
          $("." + item.id).addClass(errclass);

          // --- エラーメッセージを表示
          var msg = getErrorMessage(item.errType);
          $("#" + item.id + "Msg").html("<br />" + msg).css("font-weight", "bold").css("color", "#F00");
        });

        // --- アラートを表示
        alert("<?= __('ERROR_MSG_00001') ?>");
      } else {
        if (confirm("<?= __('ERROR_MSG_00003') ?>")) {
          $("#frm").submit();
        }
      }
    }
  });
}
