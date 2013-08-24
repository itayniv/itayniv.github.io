$(document).ready(function () {
	var slideri=0;
	
	$.localScroll.defaults.axis = 'x';
	$.localScroll();
	
	for (i=1;i<21;i++) {
		item='#slider'+i;
		$(item).slides({effect: 'fade'});
	}
	
	$("#prevbtn").click(function() {
		if (slideri*1>0) {
			slideri--; 
		 	if (slideri*1>0) {$("#prevbtn").attr("href","#box"+(slideri*1-1)); }
		}
		else {	$("#prevbtn").attr("href","#box"+(slideri*1)); }	
		$("#nextbtn").attr("href","#box"+(slideri*1+1));
	});

	$("#nextbtn").click(function() {
		
		if (slideri*1<20) { 
			slideri++; 
			if (slideri*1<20) { $("#nextbtn").attr("href","#box"+(slideri*1+1)); }
		}
		else { $("#nextbtn").attr("href","#box"+(slideri*1)); }

		$("#prevbtn").attr("href","#box"+(slideri*1-1));
	});

	$("a.nav").click(function(e) {
		name=this.href;
		mtlocation=name.search("#box");
		name=name.substr(mtlocation+4,2);
		name=name*1;
		slideri=name;
		if (slideri<23) { $("#nextbtn").attr("href","#box"+(slideri*1+1)); }
		else { $("#nextbtn").attr("href","#box"+(slideri)); }
		
		if (slideri>0) { $("#prevbtn").attr("href","#box"+(slideri*1-1)); }
		else { $("#prevbtn").attr("href","#box"+(slideri)); }
		
	});
	
	$("a[rel=7deadlysins]").fancybox({
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over"> ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});

	$("a[rel=chupachups]").fancybox({
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over"> ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});

	$("a[rel=chupachupsvid]").fancybox({
		'hideOnContentClick': true,
		'width'				: 1000,
		'height'			: 562,
		'type'				: 'iframe',
	});

	$("a[rel=starsweb]").fancybox({
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over"> ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
	
	$("a[rel=starswebvid]").fancybox({
		'hideOnContentClick': true,
		'width'				: 1000,
		'height'			: 469,
		'type'				: 'iframe',
	});
	

	$("a[rel=stufffromweb]").fancybox({
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over"> ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});

	$("a[rel=monstersweb]").fancybox({
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over"> ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
	
	$("a[rel=zappaweb]").fancybox({
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over"> ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});

	$("a[rel=adreamvid]").fancybox({
		'hideOnContentClick': true,
		'width'				: 1000,
		'height'			: 562,
		'type'				: 'iframe',
	});




	$("a[rel=adreamweb]").fancybox({
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over"> ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
	
	$("a[rel=443vid]").fancybox({
		'hideOnContentClick': true,
		'width'				: 920,
		'height'			: 600,
		'type'				: 'iframe',
	});

	$("a[rel=tzavtaweb]").fancybox({
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over"> ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});

	$("a[rel=masaotweb]").fancybox({
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over"> ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
	
	$("a[rel=israelweb]").fancybox({
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over"> ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
	
	$("a[rel=rapcatsweb]").fancybox({
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over"> ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
	
	$("a[rel=miscweb]").fancybox({
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over"> ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
	
	$("a[rel=genreweb]").fancybox({
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over"> ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});

	$("a[rel=genrevid]").fancybox({
		'hideOnContentClick': true,
		'width'				: 1000,
		'height'			: 562,
		'type'				: 'iframe',
	});
	
	$("a[rel=synesthesiaweb]").fancybox({
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over"> ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
	
	$("a[rel=synesvid]").fancybox({
		'hideOnContentClick': true,
		'width'				: 1000,
		'height'			: 562,
		'type'				: 'iframe',
	});

	$("a[rel=familytreevid]").fancybox({
		'hideOnContentClick': true,
		'width'				: 640,
		'height'			: 512,
		'type'				: 'iframe',
	});	
	
	$("a[rel=lightweb]").fancybox({
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over"> ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
	
	$("a[rel=addictweb]").fancybox({
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over"> ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
	
	$("a[rel=classweb]").fancybox({
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over"> ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
	
	$("a[rel=chordvid]").fancybox({
		'hideOnContentClick': true,
		'width'				: 1000,
		'height'			: 585,
		'type'				: 'iframe',
	});
	
	
	$("a[rel=iovid]").fancybox({
		'hideOnContentClick': true,
		'width'				: 1040,
		'height'			: 585,
		'type'				: 'iframe',
	});
	
	
	$("a[rel=woodvid]").fancybox({
		'hideOnContentClick': true,
		'width'				: 1000,
		'height'			: 650,
		'type'				: 'iframe',
	});
	
$("a[rel=wikitags]").fancybox({
		'hideOnContentClick': true,
		'width'				: 900,
		'height'			: 562,
		'type'				: 'iframe',
	});

	
	$("a[rel=misc2danimation1]").fancybox({
		'hideOnContentClick': true,
		'width'				: 1000,
		'height'			: 562,
		'type'				: 'iframe',
	});
	
	
	$("a[rel=misc2danimation2]").fancybox({
		'hideOnContentClick': true,
		'width'				: 1000,
		'height'			: 562,
		'type'				: 'iframe',
	});
	
	
	
	$.scrollTo('#box3');
});

