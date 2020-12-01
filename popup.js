var sendActionToDOM = function(){
  if(localStorage.removeNonIPFS == "true"){
      act = 'removeNonIPFS'
    }else{
      act = 'showNonIPFS'
    }

    chrome.tabs.query({active: true, currentWindow: true}, ([tab]) => {
      chrome.tabs.sendMessage(tab.id, {
        action: act
      });
    });
}


$(document).ready(function() {
  if(localStorage.removeNonIPFS == "true"){
    $('#removeNonIPFS')[0].checked = true
  }else{
    $('#removeNonIPFS')[0].checked = false
  }

  sendActionToDOM()

  $('#removeNonIPFS').click(function(){
    if($('#removeNonIPFS')[0].checked){
      localStorage.removeNonIPFS = true
    }else{
      localStorage.removeNonIPFS = false
    }

    sendActionToDOM()
  });
});