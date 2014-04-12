// this will pop an overlay
(function() {	// protect the lemmings!

	var shim = function( anchSel, parent, shimSel ) { 
		var self = this;
		self.init( anchSel, parent, shimSel ); 
	};

	shim.prototype = {
		init: function( anchSel, parentSel, shimSel ) {
			var self = this;

			// set up vars
			self.par = $( parentSel );
			self.anchs = $( anchSel, parentSel );

			self.el = $( shimSel );
			self.iframe = self.el.find('iframe');

			// when clicking on the anch, show shim
			self.par.on(
				'click'
				, anchSel
				, self.onInitShim()
			);

			// when clicking on shim, hide shim + remove src attribute
			self.el.on(
				'click'
				, self.onClickShim()
			);
		}

		, onClickShim: function() {
			var self = this;
			return function( e ) {
				// prevent click from bubbling, doing default etc
				e.preventDefault();
				e.stopPropagation();

				// fadeout + remove attr AFTER fadeout
				self.el.fadeOut('fast', function() {
					self.iframe.removeAttr( 'src' );
				});
				
			}
		}

		, onInitShim: function() {
			var self = this;
			return function( e ) {
				e.preventDefault();

				// grab the src
				var src = $( this ).attr('data-url');

				// set iframe source
				self.iframe.attr( 'src', src );

				// show 
				self.el.fadeIn('fast');
			}
		}
	}

	// start plugin
	var s = new shim( 
		'.item img'			// clicking on this starts shim
		, '.container'		// this is the parent of all the .item imgs on top
		, '#fewd-shim' 		// the shim div is called this
	);

})();