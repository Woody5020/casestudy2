$(function(){
	var swiper = new Swiper(".mainSwiper", {
    pagination: {
		loop: true, 
		autoplay: { 
			delay: 5000
		},
    el: ".swiper-pagination",
    },
    });
	var subswiper = new Swiper(".subSwiper", {
    pagination: {
		loop: true, 
		autoplay: { 
			delay: 5000
		},
        el: ".swiper-pagination",
    },
    });
	$("#gnb > ul > li").mouseenter(function(){
		$(this).find("ul").stop().slideDown(300);
	});
	$("#gnb > ul > li").mouseleave(function(){
		$(this).find("ul").slideUp(300);
	});
	});