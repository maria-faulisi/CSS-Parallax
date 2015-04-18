(function(){
	'use strict'

$('#veraTxt').waypoint(function(direction){
	if (direction === 'down'){
		$('#veraTxt').addClass('show');
	} else {
		$('#veraTxt').removeClass('show');
	}
},{
	offset: '10%'
});


$('#bebawBW').waypoint(function(direction){
	if(direction === 'down'){
		$('#bebawBW').addClass('visible');
		$('#bebawBWCap').addClass('visible');
	}else{
		$('#bebawBW').removeClass('visible');
		$('#bebawBWCap').removeClass('visible');
	}
},{
	offset: '30%'
});

$('#gravy').waypoint(function(direction){
	if(direction === 'down'){
		$('#gravy').addClass('move');	
	} else {
		$('#gravy').removeClass('move');	
	}
},{
	offset: '90%'
});

$('.kids').waypoint(function(dir) {
	if(dir === 'down'){
		$(this).addClass('move');
	}else{
		$(this).removeClass('move');
	}
},{	
	offset: '80%'	
});

$('#chucks').waypoint(function(dir){
	if(dir === 'down'){
		$(this).addClass('spin');
	}else{
		$(this).removeClass('spin');
	}
},{
	offset: '50%'	
});

$('#bebawTxt').waypoint('sticky');

$('#bbColor').waypoint(function(dir){
	if(dir === 'down'){
		$(this).addClass('show');
	}else{
		$(this).removeClass('show');
	}
},{
	offset: '95%'
})

})(window.jQuery);




