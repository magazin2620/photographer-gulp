$(window).on("load", function () {
	$(".preloader").addClass("loaded");
})

$(document).ready(function () {

	// nav toggle
	$(".nav-toggle").click(function () {
		$(".main-nav").slideToggle();
	})
	$(".main-nav a").click(function () {
		if ($(window).width() < 768) {
			$(".main-nav").slideToggle();
		}
	})

	// fixed page-header
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$(".page-header").addClass("fixed")
		}
		else {
			$(".page-header").removeClass("fixed");
		}
	})

	// add smooth scrolling to all links
	$("a").on('click', function(event) {

		// make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  event.preventDefault();
  		  var hash = this.hash;
  
		  $('html, body').animate({
			 scrollTop: $(hash).offset().top
		  }, 800, function(){
  
			 window.location.hash = hash;
		  });
		}
	 });

	// set lightbox img max height
	const wHeight = $(window).height();
	$(".lightbox__img").css("max-height", wHeight + "px");

	// lightbox
	$(".works__item-inner").click(function () {
		index = $(this).parent(".works__item").index();
		$(".lightbox").addClass("open");
		lightboxSlideShow();
	})
	$(".lightbox .prev").click(function () {
		if (index == 0) {
			index = totalWorkItems - 1;
		}
		else {
			index--;
		}
		lightboxSlideShow();
	})
	$(".lightbox .next").click(function () {
		if (index == totalWorkItems - 1) {
			index=0
		}
		else {
			index++;
		}
		lightboxSlideShow();
	})

	$(".lightbox__close").click(function () {
		$(".lightbox").removeClass("open");
	})

	// close lightbox when clicked outside
	$(".lightbox").click(function (event) {
		if ($(event.target).hasClass("lightbox")) {
			$(this).removeClass("open");
		}
	})

})

let index = 0;
const totalWorkItems = $(".works__item").length;
function lightboxSlideShow() {
	const imgSrc = $(".works__item").eq(index).find("img").attr("data-large");
	const category = $(".works__item").eq(index).find("h4").html();
	$(".lightbox__img").attr("src", imgSrc);
	$(".lightbox__category").html(category);
	$(".lightbox__counter").html((index+1) + "/" + totalWorkItems);
}