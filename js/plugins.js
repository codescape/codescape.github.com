/*! http://responsiveslides.com v1.32 by @viljamis */
(function(d,D,v){d.fn.responsiveSlides=function(h){var b=d.extend({auto:!0,speed:1E3,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!1,prevText:"Previous",nextText:"Next",maxwidth:"",controls:"",namespace:"rslides",before:function(){},after:function(){}},h);return this.each(function(){v++;var e=d(this),n,p,i,k,l,m=0,f=e.children(),w=f.size(),q=parseFloat(b.speed),x=parseFloat(b.timeout),r=parseFloat(b.maxwidth),c=b.namespace,g=c+v,y=c+"_nav "+g+"_nav",s=c+"_here",j=g+"_on",z=g+"_s",
o=d("<ul class='"+c+"_tabs "+g+"_tabs' />"),A={"float":"left",position:"relative"},E={"float":"none",position:"absolute"},t=function(a){b.before();f.stop().fadeOut(q,function(){d(this).removeClass(j).css(E)}).eq(a).fadeIn(q,function(){d(this).addClass(j).css(A);b.after();m=a})};b.random&&(f.sort(function(){return Math.round(Math.random())-0.5}),e.empty().append(f));f.each(function(a){this.id=z+a});e.addClass(c+" "+g);h&&h.maxwidth&&e.css("max-width",r);f.hide().eq(0).addClass(j).css(A).show();if(1<
f.size()){if(x<q+100)return;if(b.pager){var u=[];f.each(function(a){a=a+1;u=u+("<li><a href='#' class='"+z+a+"'>"+a+"</a></li>")});o.append(u);l=o.find("a");h.controls?d(b.controls).append(o):e.after(o);n=function(a){l.closest("li").removeClass(s).eq(a).addClass(s)}}b.auto&&(p=function(){k=setInterval(function(){f.stop(true,true);var a=m+1<w?m+1:0;b.pager&&n(a);t(a)},x)},p());i=function(){if(b.auto){clearInterval(k);p()}};b.pause&&e.hover(function(){clearInterval(k)},function(){i()});b.pager&&(l.bind("click",
function(a){a.preventDefault();b.pauseControls||i();a=l.index(this);if(!(m===a||d("."+j+":animated").length)){n(a);t(a)}}).eq(0).closest("li").addClass(s),b.pauseControls&&l.hover(function(){clearInterval(k)},function(){i()}));if(b.nav){c="<a href='#' class='"+y+" prev'>"+b.prevText+"</a><a href='#' class='"+y+" next'>"+b.nextText+"</a>";h.controls?d(b.controls).append(c):e.after(c);var c=d("."+g+"_nav"),B=d("."+g+"_nav.prev");c.bind("click",function(a){a.preventDefault();if(!d("."+j+":animated").length){var c=
f.index(d("."+j)),a=c-1,c=c+1<w?m+1:0;t(d(this)[0]===B[0]?a:c);b.pager&&n(d(this)[0]===B[0]?a:c);b.pauseControls||i()}});b.pauseControls&&c.hover(function(){clearInterval(k)},function(){i()})}}if("undefined"===typeof document.body.style.maxWidth&&h.maxwidth){var C=function(){e.css("width","100%");e.width()>r&&e.css("width",r)};C();d(D).bind("resize",function(){C()})}})}})(jQuery,this,0);

// JQuery URL Parser plugin - https://github.com/allmarkedup/jQuery-URL-Parser
// Written by Mark Perkins, mark@allmarkedup.com
// License: http://unlicense.org/ (i.e. do what you want with it!)

;(function($, undefined) {

	var tag2attr = {
		a       : 'href',
		img     : 'src',
		form    : 'action',
		base    : 'href',
		script  : 'src',
		iframe  : 'src',
		link    : 'href'
	},

	key = ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","fragment"], // keys available to query

	aliases = { "anchor" : "fragment" }, // aliases for backwards compatability

	parser = {
		strict  : /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,  //less intuitive, more accurate to the specs
		loose   :  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ // more intuitive, fails on relative paths and deviates from specs
	},

	querystring_parser = /(?:^|&|;)([^&=;]*)=?([^&;]*)/g, // supports both ampersand and semicolon-delimted query string key/value pairs

	fragment_parser = /(?:^|&|;)([^&=;]*)=?([^&;]*)/g; // supports both ampersand and semicolon-delimted fragment key/value pairs

	function parseUri( url, strictMode )
	{
		var str = decodeURI( url ),
			res   = parser[ strictMode || false ? "strict" : "loose" ].exec( str ),
			uri = { attr : {}, param : {}, seg : {} },
			i   = 14;

		while ( i-- )
		{
			uri.attr[ key[i] ] = res[i] || "";
		}

		// build query and fragment parameters

		uri.param['query'] = {};
		uri.param['fragment'] = {};

		uri.attr['query'].replace( querystring_parser, function ( $0, $1, $2 ){
			if ($1)
			{
				uri.param['query'][$1] = $2;
			}
		});

		uri.attr['fragment'].replace( fragment_parser, function ( $0, $1, $2 ){
			if ($1)
			{
				uri.param['fragment'][$1] = $2;
			}
		});

		// split path and fragement into segments

		uri.seg['path'] = uri.attr.path.replace(/^\/+|\/+$/g,'').split('/');

		uri.seg['fragment'] = uri.attr.fragment.replace(/^\/+|\/+$/g,'').split('/');

		// compile a 'base' domain attribute

		uri.attr['base'] = uri.attr.host ? uri.attr.protocol+"://"+uri.attr.host + (uri.attr.port ? ":"+uri.attr.port : '') : '';

		return uri;
	};

	function getAttrName( elm )
	{
		var tn = elm.tagName;
		if ( tn !== undefined ) return tag2attr[tn.toLowerCase()];
		return tn;
	}

	$.fn.url = function( strictMode )
	{
		var url = '';

		if ( this.length )
		{
			url = $(this).attr( getAttrName(this[0]) ) || '';
		}

		return $.url( url, strictMode );
	};

	$.url = function( url, strictMode )
	{
		if ( arguments.length === 1 && url === true )
		{
			strictMode = true;
			url = undefined;
		}

		strictMode = strictMode || false;
		url = url || window.location.toString();

		return {

			data : parseUri(url, strictMode),

			// get various attributes from the URI
			attr : function( attr )
			{
				attr = aliases[attr] || attr;
				return attr !== undefined ? this.data.attr[attr] : this.data.attr;
			},

			// return query string parameters
			param : function( param )
			{
				return param !== undefined ? this.data.param.query[param] : this.data.param.query;
			},

			// return fragment parameters
			fparam : function( param )
			{
				return param !== undefined ? this.data.param.fragment[param] : this.data.param.fragment;
			},

			// return path segments
			segment : function( seg )
			{
				if ( seg === undefined )
				{
					return this.data.seg.path;                    
				}
				else
				{
					seg = seg < 0 ? this.data.seg.path.length + seg : seg - 1; // negative segments count from the end
					return this.data.seg.path[seg];                    
				}
			},

			// return fragment segments
			fsegment : function( seg )
			{
				if ( seg === undefined )
				{
					return this.data.seg.fragment;                    
				}
				else
				{
					seg = seg < 0 ? this.data.seg.fragment.length + seg : seg - 1; // negative segments count from the end
					return this.data.seg.fragment[seg];                    
				}
			}

		};

	};

})(jQuery);
