chrome.tabs.query({
  currentWindow: true,
  active: true
}, function(tabs) {
  var neededURL = tabs[0].url;
  var splitURL = neededURL.split("/");
  var galleryId = splitURL[splitURL.length - 1];
  var wordpressCode = "[gallery type=\"flickr\" user_id='128947481@N05' view='photosets' photoset_id='" + galleryId +"' tag_mode='any' sort='date-posted-desc' per_page='20' layout='mosaic' caption='none' thumb_size='n' main_size='b']"
  document.getElementById("ID").value = wordpressCode;
  document.getElementById("ID").select();
});