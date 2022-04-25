$(function () {
	// 繧ｹ繝ｯ繧､繝代�

	var swiper = new Swiper(".swiper-container", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		spaceBetween: 40,
		initialSlide: 1,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: true,
		},
		speed: 500,
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			clickable: true,
		},

		breakpoints: {
			767: {
				slidesPerView: 2,
			},
			1180: {
				slidesPerView: 2.6,
			},
		},
		slidesPerView: 1.33,
	});

	// WOW

	new WOW({
		mobile: false,
	}).init();

	// 繝上Φ繝舌�繧ｬ繝ｼ繝｡繝九Η繝ｼ

	$(".drawer").drawer();

	// 繝上Φ繝舌�繧ｬ繝ｼ繝｡繝九Η繝ｼ縲�幕髢画凾縺ｮ蜃ｦ逅�

	$(".drawer").on("drawer.opened", function () {
		$(".hamburger-icon").hide();
		$(".close").show();
	});

	$(".drawer").on("drawer.closed", function () {
		$(".close").hide();
		$(".hamburger-icon").show();
	});

	// Q&A

	$(".question-item").click(function () {
		$(this).find(".plus").toggleClass("minus");

		var $answer = $(this).find(".answer");

		if ($answer.hasClass("open")) {
			$answer.removeClass("open");
			$answer.slideUp();
		} else {
			$answer.addClass("open");
			$answer.slideDown();
		}
	});

	// 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ

	var windowWidth = $(window).width();
	var windowSm = 767; // 繧ｹ繝槭�縺ｫ蛻�ｊ譖ｿ繧上ｋ讓ｪ蟷�
	if (windowWidth <= windowSm) {
		var headerHight = 68; // 繧ｹ繝槭�縺ｮ繝倥ャ繝繝ｼ遲峨�鬮倥＆蛻��謨ｰ蛟､繧貞�繧後ｋ
	} else {
		var headerHight = 0; // PC 縺ｮ繝倥ャ繝繝ｼ遲峨�鬮倥＆蛻��謨ｰ蛟､繧貞�繧後ｋ
	}

	jQuery('header a[href^="#"]').click(function () {
		var speed = 1000;
		var href = jQuery(this).attr("href");
		var target = jQuery(href == "#" || href == "" ? "html" : href);
		var position = target.offset().top - headerHight;
		jQuery("body,html").animate(
			{
				scrollTop: position,
			},
			speed,
			"swing"
		);
		return false;
	});

	// toTop

	// $(window).on("scroll", function ($) {
	//   if ($(this).scrollTop() > 500) {
	//     $('.totop').fadeIn();
	//   } else {
	//     $('.totop').hide();
	//   }
	// });

	$("#totop").click(function () {
		$("body,html").animate(
			{
				scrollTop: 0,
			},
			1000,
			"swing"
		);
		return false;
	});

	jQuery(window).on("scroll", function ($) {
		if (jQuery(this).scrollTop() > 500) {
			jQuery(".totop").fadeIn();
		} else {
			jQuery(".totop").hide();
		}
	});
});
