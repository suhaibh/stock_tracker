var init_friend_lookup = function(){
	$('#friend-lookup-form').on('ajax:before', function(event, data, status){
		showSpinner();
	});
	
	$('#friend-lookup-form').on('ajax:after', function(){
		hideSpinner();
	});

	$('#friend-lookup-form').on('ajax:success', function(event, data, status){
		// This will add the searched friend's information to the page
		$('#friend-lookup').replaceWith(data);
		init_friend_lookup();
	});

	$('#friend-lookup-form').on('ajax:error', function(event, xhr, status, error){
		$('#friend-lookup-results').replaceWith(' ');
		$('#friend-lookup-errors').replaceWith('User was not found.');
		hideSpinner();
	});
}

$(document).ready(function(){
	init_friend_lookup();
});