/***********
@title FitIn
@author LINK Creative
@license MIT License (http://www.opensource.org/licenses/mit-license.html)
Partially Based on (http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/)
***********/

(function($){
	$.fn.fitIn=function(opts){
		var beenhere=false;
		
		return this.each(function(){
			var $this=$(this),
				tagName=this.nodeName;
			
			if(tagName.toLowerCase()==="iframe"){
				if(beenhere===false){
					var ss=document.createElement('style'),dh=document.head||document.getElementsByTagName('head')[0]
						rules = document.createTextNode('.fitInVideo {position:relative;}'+"\n"+'.fitInVideo iframe {height:100%;left:0;margin:0;padding:0;position:absolute;top:0;width:100%;}');
					ss.type = 'text/css';		
					//ss.innerHTML='';
					if(ss.styleSheet) { ss.styleSheet.cssText = rules.nodeValue; }
					else { ss.appendChild(rules); }
					dh.appendChild(ss);
					beenhere=true;
				}
					
				var aspectRatio=(100*$this.outerHeight())/$this.outerWidth(),
					$container=$('<div class="fitInVideo" />').css("padding-bottom",aspectRatio+"%");
						
				$this.wrap($container);
			} else if(this.childNodes[0].nodeType===3){
				var settings=(settings?settings:$.extend({'max':Number.POSITIVE_INFINITY,'min':Number.NEGATIVE_INFINITY},opts));
					resize=(function(){
						var d=(settings.multiplier?settings.multiplier:($this.text().length+3)/22),
							x=Math.min($this.width()/(d*10),parseFloat(settings.max)),
							y=Math.max(x,parseFloat(settings.min));
							
							$this.css('font-size',y);
						});
						
				resize();
			
				$(window).resize(resize);
			}
		});
	};
})(jQuery);