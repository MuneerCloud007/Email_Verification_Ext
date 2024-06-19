


chrome.runtime.onMessage.addListener(async(message, sender, sendResponse) => {

    let count=0;

    const tab2 = async () => {
        const filteredArray = Array.from(document.querySelectorAll("._search-links-section_a2e2a8")
        ).map((element, index) => {
            return { link: element?.children[1]?.children[2]?.href };
        });
        console.log(filteredArray);
        Array.from(document.querySelectorAll("._search-links-section_a2e2a8")).length > 0 && filteredArray.map(async (vl) => {
            if (vl.link) {
                await chrome.runtime.sendMessage({ message: "Tab2", data: vl });
            }
    
        })
    }

    if (message && message.message === 'tab2') {
        if(count==0) {
            setTimeout(async()=>{
                await tab2();     

            },[4000])

        }
        if (sendResponse) {
            sendResponse({ status: "OK" });
        }
        count++;
     
    }
});