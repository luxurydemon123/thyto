document.addEventListener("DOMContentLoaded", function(event) {
	
	window.addEventListener('scroll', function(){
		var backToTop = window.pageYOffset;
		var buttonTop = document.querySelector('.back-to-top');
		if (backToTop >= 700) {
			buttonTop.classList.add('show-back-to-top');
		} else {
			buttonTop.classList.remove('show-back-to-top');
		}

		buttonTop.addEventListener('click', function(){
			$('html').animate({scrollTop : 1}, 500);
		});
	});

	$('.btn_contact').click(function(event) {
		
		$('html').animate({scrollTop: $('.contact').offset().top},900);
	});

	$('.add-course').click(function(event) {
		$('.contain-add-course').addClass('show');
		console.log("hihi");
	});
	$('.btn-exit').click(function(event) {
		$('.contain-add-course').removeClass('show');
	});

	$('.btn-add-course').click(function(event) {
		$title = $('.title-course').val();
		console.log($title);
		// $.ajax({
		// 	url: 'Main_controller/add_course',
		// 	type: 'POST',
		// 	dataType: 'json',
		// 	data: {

		// 	},
		// })
		// .done(function() {
		// 	console.log("success");
		// })
		// .fail(function() {
		// 	console.log("error");
		// })
		// .always(function() {
		// 	console.log("complete");
		// });
		//return false;
		
	});
	$('.btn-save').click(function(event) {
		$('.form-edit').submit();
	});


	$('.btn-add-lesson').click(function(event) {
		$('.form-add-lesson').submit();
	});

	$('.btn-code').click(function(event) {
		$('.form-add-code').submit();
	});

	$('.btn-docs').click(function(event) {
		$('.form-add-documents').submit();
	});

	// var x = $('.btn-edit');
	// x.click(function(event) {
	// 	var y = $(this).val();
	// 	console.log(y);
	// });

	$('.btn-edit').click(function(event) {
		var title = $(this).parent().prev().prev().text();
		var image = $(this).parent().parent().prev().attr("src");
		var id = $(this).parent().parent().prev().prev().val();
		console.log(id);
		$('.image-course1').attr('src', image);
		$('.title-edit').val(title);
		$('.id-edit').val(id);
		$('.image-course2').val(image);
	});

	$('.btn-edit-detail').click(function(event) {
		var title_edit = $(this).parent().prev().prev().prev().text();
		var file_upload2 = $(this).parent().prev().children('').attr("href");
		var id_edit = $(this).next().next().val();
		var type = $(this).next().next().next().val(); //type : 1-lesson  2-code_example 3-documents

		$('.type').val(type);
		$('.id-edit').val(id_edit);
		$('.title-edit').val(title_edit);
		$('.file-upload2').val(file_upload2);
		
	});
});