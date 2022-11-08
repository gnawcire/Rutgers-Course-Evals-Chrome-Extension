chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    fetch(request.url, {mode:'no-cors'})

    .then(response => response.text())
    .then(text =>  sendResponse({returned_text:text}))
    return true;

})    