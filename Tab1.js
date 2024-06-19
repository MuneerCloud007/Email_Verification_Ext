





// Function to execute when the DOM is fully loaded
// Add message listener
let count = 0;
let array;
let data = [];







chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {


  


    const infiniteScroll = () => {
        return new Promise((resolve) => {
            function scrollToBottomOfDiv() {
                let divElement = document.getElementsByClassName("p4 _vertical-scroll-results_1igybl")[0];
                divElement.addEventListener("scroll",(e)=>{console.log(e)})
                if (divElement) {
                    const scrollInterval = setInterval(() => {
                        divElement.scrollTop += 100;
    
                        if (divElement.scrollTop + divElement.clientHeight >= divElement.scrollHeight) {
                            clearInterval(scrollInterval);
                            const newData = extractData();
                            console.log('All data loaded:', newData);
                            resolve(newData);
                        } else {
                            clearInterval(scrollInterval);
                        }
                    }, 500);
                }
            }
    
            function extractData() {
                const filteredArray = Array.from(document.querySelectorAll(".artdeco-list__item div .flex .flex .flex .artdeco-entity-lockup__title"))
                    .map(element => {
                        return {
                            name: element.children[0].innerText.trim(),
                            link: element.children[0].href,
                            company: element.parentElement.parentElement.children[1].children[2].innerText,
                            position: element.parentElement.parentElement.children[1].children[0].innerHTML
                        };
                    });
    
                return filteredArray;
            }
    
            if (data.length === 25) {
                resolve(data);
            } else if (data.length < 25) {
                scrollToBottomOfDiv();
            }
    
            let timer = setTimeout(() => {
                let newData = extractData();
    
                if (newData.length < 25) {
                    infiniteScroll();
                } else {
                    clearTimeout(timer);
                    console.log("All data loaded:", newData);
                    if (newData.length === 25) {
                        sendMessageAsync(newData);
                    }
                }
            }, 1000);
        });
    };
    
    const loadW3school = async () => {
        const exec = await infiniteScroll().catch(err => console.log(err));
    };
   

    async function sendMessageAsync(array) {
        if (array?.length) {
            console.log(array);
            const tab_url = location.href;
    
            const pageNumber = getPageNumberFromURL(tab_url);
            const key = `page-${pageNumber}`;
    
            // Retrieve pageArray from local storage
            let pageArrayData = await chrome.storage.local.get("pageData");
            let pageArray = pageArrayData.pageData || [];
    
            // Check if the key already exists in pageArray
            const existingIndex = pageArray.findIndex(item => item[key]);
    
            // If the key exists, update the array, else add a new entry
            if (existingIndex !== -1) {
                pageArray[existingIndex][key] = array;
            } else {
                const newData = { [key]: array };
                pageArray.push(newData);
              
            }
    
            while(pageArray.length>pageNumber){
                pageArray.pop();//3,2
            }
            console.log(pageArray);
    
            chrome.storage.local.set({ "pageData": pageArray }).then(async () => {
                console.log("Value is set");
                data = [];
                const page = document.getElementsByClassName("artdeco-pagination__pages artdeco-pagination__pages--number")[0].children;
                const lastPage = page[page.length - 1].children[0].children[0].innerHTML;
                console.log("URL_PAGE:", lastPage);
                 await chrome.runtime.sendMessage({ message: "input_url", url: tab_url, lastPage: 2 });
            });
        }
    }
    



    if (message && message.message === 'tab1') {
        if (count == 0) {
            console.log("EXECUTED Tab1");
            setTimeout(async () => {
                await loadW3school();

            }, [4000])

        }



        if (sendResponse) {
            sendResponse({ status: "OK" });
        }
        count++;

    }
});






function getPageNumberFromURL(url) {
    // Parse the URL
    const urlObject = new URL(url);

    // Get the value of the 'page' parameter
    const pageParam = urlObject.searchParams.get('page');

    // If 'page' parameter exists and is a number, return its value, else return 1
    const pageNumber = pageParam ? parseInt(pageParam) : 1;

    return pageNumber;
}



















