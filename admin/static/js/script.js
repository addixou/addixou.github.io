;$(function () {
	var ui_status = parseInt(Cookies.get('ui-status')) || 0;
	$('body').on('ui-change', function (e, status) {
		$(this).attr('data-ui-status', ui_status);
	}).trigger('ui-change');
	$('#menu-toggle').on('click', function () {
		console.log(typeof ui_status);
		ui_status = ui_status ? 0 : 1;
		console.log(typeof ui_status);
		Cookies.set('ui-status', ui_status);
		$('body').trigger('ui-change', ui_status);
	});

	$('input[type="file"]').on('change', function (e) {
		var $self = $(this);
		var file = e.target.files[0];
		$self.siblings('.filename').html(file.name);
	});
});