// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

var init_stock_lookup = function(){
	$('#stock-lookup-form').on('ajax:before', function(event, data, status){
		showSpinner();
	});
	
	$('#stock-lookup-form').on('ajax:after', function(event, data, status){
		hideSpinner();
	});

	$('#stock-lookup-form').on('ajax:success', function(event, data, status){
		// This will add the searched stock's information to the page
		$('#stock-lookup').replaceWith(data);
		init_stock_lookup();
	});

	$('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error){
		$('#stock-lookup-results').replaceWith(' ');
		$('#stock-lookup-errors').replaceWith('Stock was not found.');
		hideSpinner();
	});
}

$(document).ready(function(){
	init_stock_lookup();
});