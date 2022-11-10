chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    fetch(request.url, {mode: 'cors'}) 
    .then(response => response.text())
    .then(text => {
        const split = text.split("avgRating");
        let resptext = split[1].toString(); // only returns 1st rating
        console.log(resptext);
        sendResponse({responseText: resptext});
     })
     .catch(error => console.log(error));
     return true;
     }    
);
