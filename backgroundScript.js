chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    fetch(request.url, {mode: 'cors'}) 
    .then(response => response.text())
    .then(text => {
        sendResponse({responseText: ratingValue});
     })
     .catch(error => console.log(error));
     return true;
     }    
);
