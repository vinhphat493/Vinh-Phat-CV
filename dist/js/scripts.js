
(function ($) {

	"use strict";

	$(".nav-link").click("on", function () {
		$(".intro-section .nav-link").removeClass("active");
		$(this).addClass("active");
	})

	// ===== Scroll to Top ==== 
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
			$('#return-to-top').fadeIn(200);    // Fade in the arrow
			$("#myNavbar").addClass("fixed-top");
			$("#myNavbar").addClass("heading-wrapper-active");
		} else {
			$('#return-to-top').fadeOut(200);   // Else fade out the arrow
			$(".intro-section .nav-link").removeClass("active");
			$('#home').addClass("active");
			$("#myNavbar").removeClass("fixed-top");
			$("#myNavbar").removeClass("heading-wrapper-active");
		}
	});
	$("#home").click(function(){
		$(this).addClass("active");
		$('body,html').animate({
			scrollTop: 0                       // Scroll to top of body
		}, 500);
	})
	$('#return-to-top').click(function () {      // When arrow is clicked
		$('body,html').animate({
			scrollTop: 0                       // Scroll to top of body
		}, 500);
	});



	// LINE PROGRESS BAR
	enableLineProgress();

	// RADIAL PROGRESS BAR
	enableRadialProgress();

	// ACCORDIAN
	panelAccordian();

	$(window).on('load', function () {

		// ISOTOPE PORTFOLIO WITH FILTER
		if (isExists('.portfolioContainer')) {
			var $container = $('.portfolioContainer');
			$container.isotope({
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});

			$('.portfolioFilter a').click(function () {
				$('.portfolioFilter .current').removeClass('current');
				$(this).addClass('current');

				var selector = $(this).attr('data-filter');
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				});
				return false;
			});
		}

	});


	$('a[href="#"]').on('click', function (event) {
		return;
	});


	if ($.isFunction($.fn.fluidbox)) {
		$('a').fluidbox();
	}

	var countCounterUp = 0;

	var a = 0;

	countCounterUp = enableCounterUp(countCounterUp);

	$(window).on('scroll', function () {

		countCounterUp = enableCounterUp(countCounterUp);

	});


})(jQuery);

function panelAccordian() {

	var panelTitle = $('.panel-title');
	panelTitle.on('click', function () {
		$('.panel-title').removeClass('active');
		$(this).toggleClass('active');

	});

}

function enableRadialProgress() {

	$(".radial-progress").each(function () {
		var $this = $(this),
			progPercent = $this.data('prog-percent');

		var bar = new ProgressBar.Circle(this, {
			color: '#aaa',
			strokeWidth: 3,
			trailWidth: 1,
			easing: 'easeInOut',
			duration: 1400,
			text: {

			},
			from: { color: '#aaa', width: 1 },
			to: { color: '#FEAE01', width: 3 },
			// Set default step function for all animate calls
			step: function (state, circle) {
				circle.path.setAttribute('stroke', state.color);
				circle.path.setAttribute('stroke-width', state.width);

				var value = Math.round(circle.value() * 100);
				if (value === 0) {
					circle.setText('');
				} else {
					circle.setText(value);
				}

			}
		});

		$(this).waypoint(function () {
			bar.animate(progPercent);
		}, { offset: "90%" })

	});
}

function enableLineProgress() {

	$(".line-progress").each(function () {
		var $this = $(this),
			progPercent = $this.data('prog-percent');

		var bar = new ProgressBar.Line(this, {
			strokeWidth: 1,
			easing: 'easeInOut',
			duration: 1400,
			color: '#FEAE01',
			trailColor: '#eee',
			trailWidth: 1,
			svgStyle: { width: '100%', height: '100%' },
			text: {
				style: {

				},
			},
			from: { color: '#FFEA82' },
			to: { color: '#ED6A5A' },
			step: (state, bar) => {
				bar.setText(Math.round(bar.value() * 100) + ' %');
			}
		});

		$(this).waypoint(function () {
			bar.animate(progPercent);
		}, { offset: "90%" })

	});
}

function enableCounterUp(a) {

	var counterElement;

	if (isExists('#counter')) { counterElement = $('#counter'); }
	else { return; }

	var oTop = $('#counter').offset().top - window.innerHeight;
	if (a == 0 && $(window).scrollTop() > oTop) {
		$('.counter-value').each(function () {
			var $this = $(this),
				countDuration = $this.data('duration'),
				countTo = $this.attr('data-count');
			$({
				countNum: $this.text()
			}).animate({
				countNum: countTo
			}, {

					duration: countDuration,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}

				});
		});
		a = 1;
	}

	return a;
}

function isExists(elem) {
	if ($(elem).length > 0) {
		return true;
	}
	return false;
}
