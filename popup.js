document.getElementsByClassName("submitBtn")[0].addEventListener("click", async () => {

  const message = document.getElementsByClassName("input_url")[0].value;
  console.log(message);
  document.getElementsByClassName("input_url")[0].value = "";
  await chrome.storage.local.set({ "url_page": 1 })


  await chrome.runtime.sendMessage({ message: "input_url", url: message, firstPage: 1, lastPage: 25 });

})








































