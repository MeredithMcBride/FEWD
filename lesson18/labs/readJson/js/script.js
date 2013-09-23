/*
THere may be restrictions in accessing javascript files from a different domain.
this restriction will still apply to source code. It is not on a http server yet.

*/
// chrome.exe --allow-file-access-from-files
	console.log('123');

$('#btn').click(function(event){
	var data = $('#data').val();
	console.log(data);

//empty the result div every time the user clicks the button
	$.getJSON(data, function(json, textStatus, jqXHR){
		$('#result').append('<p>This is the result:</p>');


//loop through the returned array
		for (var i = 0; i < json.length; i++) {
			$('#result').append('<p>name: ' + json[i].name + '</p>');

		}
	})

});

