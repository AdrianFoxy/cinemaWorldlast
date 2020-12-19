$('#jform__phone').css("display", "none");
$('#jlabel').css("display", "none");
$('#form :checkbox').change(function() {
    // this will contain a reference to the checkbox   
    if (this.checked) {
    	$('#jlabel').css("display", "block")
        $('#jform__phone').css("display", "block")
        
    } else {
		$('#jlabel').css("display", "none")
        $('#jform__phone').css("display", "none")
    }
});

$('#warn').click(function(){
	$('#warn').hide('slow', function() {
	$('#result').html("");
	});
});
$('#warn1').click(function(){
	$('#warn1').hide('slow', function() {
	$('#result').html("");
	});
});
$('#warn2').click(function(){
	$('#warn2').hide('slow', function() {
	$('#result').html("");
	});
});
