/*
/ * cAll.js 1.0
/ *
/ * @author: Renato Santos
/ * Date 17/10/2013
/ * plugin jquery 1.10.2
*/

// HOW TO USE
// use on html page $(element).cAll(function(){----your code---})
// that way the click will switch to appropriate device

;(function (window,document,undefined) 
{
	$.fn.cAll = function (_function,_elemento) 
	{
		//animacao boca
		if("ontouchstart" in window)
		{
			//touchscreen
			_elemento.addEventListener("touchstart",function(){_function()}, false);
		}
		else if(!_elemento.addEventListener)
		{
			//ie 8-
			_elemento.attachEvent("onclick", function(){_function()});
		}
		else
		{
			//mozilla, webkit
			_elemento.addEventListener("click", function(){_function()}, false);
		}

	}

})(window,document);





