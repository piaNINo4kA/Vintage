$(document).ready(function(){
	var menu = $('.menu__lang, .menu__arrow');
	var fullMenu = $('.menu__nav');
	var menuItems = $('.lang__item');
	var activeItem = $('.item__active');
	var arrow = $('.arrow');
	var sandwich = $('.nav__item, .menu__info');
	var nI1 = $('.nav__item1');
	var nI2 = $('.nav__item2');
	var nI3 = $('.nav__item3');
	var sandwichShow = $('.sandwich');
	var close = $('.menu__info');
	var sandwichLang = $('.sandwich__lang');
	var mainTitle = $('.main__delimiter, .title__line');
	var play = $('.play');
	var playTitle = $('.play__title');
	var mouse = $('.mouse');
	var sandwichSocial = $('.sandwich__social');

	var sandwichItems = $('.sandwich__menu_item');

	menu.hover( function(){
		var tl = new TimelineMax();
		tl.to(menuItems, .5, {autoAlpha: 1}, 'menuItemsHover');
		tl.to(arrow, .5, {rotation: -90}, 'menuItemsHover');
	}, function(){
		var tl = new TimelineMax();
		tl.to(menuItems, .5, {autoAlpha: 0}, 'menuItems');
		tl.to(activeItem, .5, {autoAlpha: 1}, 'menuItems');
		tl.to(arrow, .5, {rotation: 90}, 'menuItems');
	}
	);

	sandwich.hover(function(){
		if (sandwichShow.css('display') == 'none'){
			var tl = new TimelineMax();
			tl.to(nI1, .5, {x:1, y:-7}, 'sandwichSlide');
			tl.to(nI3, .5, {x:-2, y:7}, 'sandwichSlide');	

		}
	}, function(){
		if (sandwichShow.css('display') == 'none'){
			var tl = new TimelineMax();
			tl.to(nI1, .5, {x:0, y:0}, 'sandwichSlideOut');
			tl.to(nI3, .5, {x:0, y:0}, 'sandwichSlideOut');			
		}
		
	});

		var tl = new TimelineMax({paused:true});
		tl.to(nI1, .5, {rotation: 110, x:11, y:0}, 'sandwichCross');
		tl.to(nI2, .5, {autoAlpha: 0}, 'sandwichCross');
		tl.to(nI3, .5, {rotation: 20, x:-5, y:0}, 'sandwichCross');		
		tl.to(sandwichShow, .5, {autoAlpha: 1, display:'block', right:0}, 'sandwichCross');
		tl.to(menu, 1, {autoAlpha: 0, x:15}, 'sandwichCross');
		tl.staggerTo(sandwichItems, .4, {autoAlpha: 1, y:0}, .3);
		tl.to(sandwichLang, 1, {autoAlpha: 1, x:0}, 1, 'sandwichCross');
		tl.to(sandwichSocial, 1, {autoAlpha: 1, x:0}, 1, 'sandwichCross');


		tl.call(changeButton, ["ЗАКРЫТЬ"]);
		function changeButton(newtext) {
		close.text(newtext)
		}

		tl.eventCallback('onReverseComplete', function() {
			close.text("Меню")
		})

		tl.reversed() ? tl.play() : tl.reverse() == false;
	sandwich.on('click', function(event){
		event.preventDefault();
		if (tl.reversed()) {
			tl.play()

		} else {
			tl.reverse()
		}

	});

		var tl1 = new TimelineMax();
		tl1.to(menu, 1, {autoAlpha: 1, y:0}, 'menuApear');
		tl1.to(menu, 1, {autoAlpha: 1, y:0}, 'menuApear');
		tl1.to(fullMenu, 1, {autoAlpha: 1, y:0}, 'menuApear');
		tl1.staggerTo(mainTitle, .8, {autoAlpha: 1, x:0, y:0}, .2);
		tl1.to(play, .5, {rotation: -360, scale: 1, autoAlpha: 1});
		tl1.to(playTitle, .7, {y:0, autoAlpha: 1})
		tl1.to(mouse, .5, {autoAlpha: 1}, 'mouse');
		tl1.to(mouse, .35, {y: 0, repeatDelay:.4, repeat:-1, yoyo:true, ease: Power0.easeNone}, 'mouse');
});