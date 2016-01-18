var s, App = {
	settings: {

		// Nav Toggle
		toggle: jQuery('.nav__toggle'),

		// Nav element
		nav: jQuery('.nav__list')
	},

	init: function() {

		// Establish settings object to the 's' variable
		s = this.settings;

		// Bind the click handler to the nav toggle
		s.toggle.on('click', this.toggleNav);

		// Activate Carousel
		this.activateCarousel();
	},
	toggleNav: function(e) {

		// Don't do the default action
		e.preventDefault();

		// Toggle the 'open' class to the <nav> element
		s.nav.toggleClass('nav__list--open');
	},
	activateCarousel: function() {
		jQuery('.carousel__content').slick({
			adaptiveHeight: true,
			prevArrow: jQuery('.carousel__button--prev'),
			nextArrow: jQuery('.carousel__button--next'),
			infinite: false,
			autoplay: true,
			responsive: [{
				breakpoint: 1024,
				settings: {
					autoplay: false
				}
			}]
		});
	}
};

// Fire the application
App.init();

