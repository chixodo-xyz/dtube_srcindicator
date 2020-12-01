var videoSourceIndicator = function(){

	$('.videoSourceIndicator').remove()
	$('.videoSourceIndicatorWide').remove()

	$('a > .verticalvideosnap').each(function(){
		if($(this).parent()[0].href.search(/.*\/Qm[\w]{44}\/?$/) != -1){
			$(this).append('<div class="videoSourceIndicatorWide srcIpfs"></div>')
		}else if($(this).parent()[0].href.search(/.*[a-zA-Z0-9_-]{11}\/?$/) != -1){
			if(localStorage.removeNonIPFS == "true"){
				$(this).parent()[0].remove()
			}else{
				$(this).append('<div class="videoSourceIndicatorWide srcYoutube"></div>')
			}
		}
	})

	$('.videosnap > a').each(function(){
		if(this.href.search(/.*\/Qm[\w]{44}\/?$/) != -1){
			$(this).parent().append('<div class="videoSourceIndicator srcIpfs"></div>')
		}else if(this.href.search(/.*[a-zA-Z0-9_-]{11}\/?$/) != -1){
			if(localStorage.removeNonIPFS == "true"){
				if($(this).parent().parent().hasClass("owl-item")){
					$(this).parent().parent().remove()
				}else{
					$(this).parent().remove()
				}
			}else{
				$(this).parent().append('<div class="videoSourceIndicator srcYoutube"></div>')
			}
		}
	})

	$('.videoSourceIndicator').parent().css({
		"position": "relative"
	})

	$('.videoSourceIndicatorWide').parent().css({
		"position": "relative"
	})

	$('.videoSourceIndicator').css({
		"position": "absolute",
	    "left": "0px",
	    "top": "0px",
	    "z-index": "999",
	    "height": "30px",
	    "width": "100%",
	    "max-width": "100%",
	    "text-align": "left",
	    "background-repeat": "no-repeat"
	})

	$('.videoSourceIndicatorWide').css({
		"position": "absolute",
	    "left": "0px",
	    "top": "0px",
	    "z-index": "999",
	    "height": "30px",
	    "width": "100%",
	    "max-width": "100%",
	    "text-align": "left",
	    "background-repeat": "no-repeat"
	})


	$('.videoSourceIndicator.srcIpfs').css({
	    "background-image": "url('https://ipfs.io/ipfs/bafkreigtdgsgv2f3bkhsmxvku3bpnnqzubcxeupf7fff5f7l7tlm2v237a')"
	});

	$('.videoSourceIndicatorWide.srcIpfs').css({
	    "background-image": "url('https://ipfs.io/ipfs/bafkreigtdgsgv2f3bkhsmxvku3bpnnqzubcxeupf7fff5f7l7tlm2v237a')"
	});

	if(localStorage.removeNonIPFS != "true"){

		$('.videoSourceIndicator.srcYoutube').css({
		    "background-image": "url('https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg')",
		    "background-position": "3px 3px",
		    "background-size": "100px"
		});

		$('.videoSourceIndicatorWide.srcYoutube').css({
		    "background-image": "url('https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg')",
		    "background-position": "3px 3px",
		    "background-size": "100px"
		});

	}

}

window.onload = function() {
	var videoSourceIndicatorTimer =  setInterval(videoSourceIndicator, 3000);
	
	chrome.runtime.onMessage.addListener(function(msg) {
		if(msg.action == "removeNonIPFS"){
			removeNonIPFS = "true"
			localStorage.removeNonIPFS = "true"

		}else{
			removeNonIPFS = "false"
			localStorage.removeNonIPFS = "false"
		}
	})
}
