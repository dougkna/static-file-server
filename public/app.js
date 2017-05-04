// go to localhost:2222/home
$(document).ready(function() {
	var texts = ['txt', 'js'];
	var images = ['jpg', 'jpeg', 'png', 'gif'];
	$.get('/', appendToList);

	function appendToList(res){
		var dir = []
		if (res.files[0].error){
			alert('Folder is empty.')
		} else {
			for (var i in res.files){
				if (res.files[i].type === 'file'){
					var gly = '<span class="glyphicon glyphicon-file align-left" aria-hidden="true"></span>'
				} 
				else if (res.files[i].type === 'dir'){
					var gly = '<span class="glyphicon glyphicon-folder-close align-left" aria-hidden="true"></span>'
				}
				var el = $('<li class="dirLink" data-folder='+res.files[i].type+' id='+res.files[i].url+'><button>'+ gly + ' ' + res.files[i].name + '</button></li>')
				dir.push(el);
				$('.list').append(dir)

				el.click(function(){
					var whatType = $(this).data('folder');
					var urlPath = $(this).closest('.dirLink').prop('id');
					var endingType = urlPath.split('.').pop();
					if (whatType === 'file' && $.inArray(endingType, texts) >= 0 ){
						$('.display').load($(this).prop('id'))
					}
					if (whatType === 'file' && $.inArray(endingType, images) >= 0 ){
						var image = $('<img></img>');
						image.attr('src', urlPath);
						$('.display').append(image);
					}
					$('.dirLink').remove();
					$('.goBack').remove();
					var backButton = $('<h5><button class="goBack"><== Go Back</button></h5>')
					$('.goBackHere').append(backButton);
					$.get(urlPath, appendToList);

					backButton.click(function(){
						$('.dirLink').remove();
						$('.display').empty();
						urlPath = trimPath(urlPath)
						$.get('/'+urlPath, appendToList)
					})
				})

				function trimPath(fullURL){
					var lastIdx = fullURL.lastIndexOf('/');
					if (lastIdx === -1) {
						$('.goBack').remove();
						return '';
					} 
					var prevPath = fullURL.slice(0, lastIdx);
					return prevPath;
				}
			}
		}
	}
})

