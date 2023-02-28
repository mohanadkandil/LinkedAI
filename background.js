chrome.runtime.onMessage.addListener(
  // we listen to all messages and process them
  function (request, sender, sendResponse) {
    if (request.type === "button-clicked") {
      console.log("test its working");
    }
  }
);
