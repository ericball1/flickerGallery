chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.info == "needed") {
      var albumTitle = document.getElementsByClassName("album-title")[0].innerHTML.trim();
      /*chrome.runtime.sendMessage({album_title: albumTitle}, function(response) {
        console.log(response.farewell);
        console.log(albumTitle);
      });*/
      sendResponse({farewell: albumTitle});
    }
  });