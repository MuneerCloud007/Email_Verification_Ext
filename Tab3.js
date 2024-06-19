// Declare count as a global variable






chrome.runtime.onMessage.addListener(async(message, sender, sendResponse) => {
    let count=0;

    const Tab3 = async () => {
        const filteredArray = Array.from(document.querySelectorAll(".artdeco-list__item div .flex .flex .flex .artdeco-entity-lockup__title"))
            .map(element => {
                return {
                    name: element.children[0].innerText.trim(),
                    link: element.children[0].href
                };
            });
    
        let data = await chrome.storage.local.get(["data"]);
        let index = await chrome.storage.local.get(['index']);
        console.log(data);
        console.log(typeof data);
        console.log(index);
    
        // Use await when setting the new data to ensure it's properly updated
        // let dump = { ...data[index], decisionMaker: filteredArray };
        // data.splice(index, 1, dump);
        // await chrome.storage.local.set({ index: index, data: data });
    
        console.log(filteredArray);
    };
  
    if (message && message.message === 'tab3') {
        if(count==0){
        setTimeout(async()=>{
            await Tab3();

        },[3000])    
    }    
               
        
        if (sendResponse) {
          sendResponse({ status: "OK" });
      }
      count++;
  
        
    }
  });