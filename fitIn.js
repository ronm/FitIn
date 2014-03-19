/***********
@title FitIn
@author LINK Creative
@license MIT License (http://www.opensource.org/licenses/mit-license.html)
Based on (http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/)
***********/

(function($){
	$.fn.fitIn=function(opts){
		var name = 'fitInVideo',
			ss=document.createElement('style'),
			dh=document.head||document.getElementsByTagName('head')[0],
			rules = document.createTextNode('.' + name + ' {position:relative;}'+"\n"+'.' + name + ' > * {height:100%;left:0;margin:0;padding:0;position:absolute;top:0;width:100%;}');
			
		ss.type = 'text/css';
		if(ss.styleSheet) { ss.styleSheet.cssText = rules.nodeValue; }
		else { ss.appendChild(rules); }		
		dh.appendChild(ss);
		
		return this.each(function(){
			var $this = $(this),
				aspectRatio=(100*$this.outerHeight())/$this.outerWidth(),
				$container=$('<div class="' + name + '" />').css("padding-bottom",aspectRatio+"%");
						
			$this.wrap($container); 
		});
	};
})(jQuery);