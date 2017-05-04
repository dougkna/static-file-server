$(document).ready(function() {
//    $('button').on('click', function() {
//      //var price = $('<p>From $399.99</p>');
//      console.log("clicked")
//      //$('.file1').append(price);
//      $(this).remove();
// 	}); 


	// $('button').click(function(){
	// 	console.log("clicked")
	// 	$.ajax('/other', {
	// 		success: function(res){
	// 			console.log(res.files[0])
				
	// 		}
	// 	});
	// });


	$('button').click(function(){
		console.log('clicked!');
		$.get('/', appendToList);
		function appendToList(res){
			var list = [];
			for (var i in res.array){
				console.log(res.array[i])
				list.push($('<li>'+'<a href=/'+res.array[i]+'>'+ res.array[i] + '</a>'+'</li>'));
			}
			console.log(list);
			$('.list').append(list);
		}
	})

});

// var obj = { bah: foo };
// res.send(obj);