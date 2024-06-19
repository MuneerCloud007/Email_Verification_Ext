


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message);
    if (message.message === "postData") {
        console.log("postData received:", message.data);
        postDataToServer(message.data,message.accessToken)
            .then(data => {
                console.log("postData response:", data);
                sendResponse({ success: true, data });
            })
            .catch(error => {
                console.error("postData error:", error);
                sendResponse({ success: false, error: error.message });
            });
        return true;  // Keeps the messaging channel open for sendResponse
    }
    else if (message.message === "getData") {
        console.log("getData received");
        getAllEmailVerifierData(message["data"])
            .then(data => {
                console.log("getData response:", data);
                return delay(3000).then(() => {
                    sendResponse({ success: true, data });
                });
            })
            .catch(error => {
                console.error("getData error:", error);
                sendResponse({ success: false, error: error.message });
            });
        return true;  // Keeps the messaging channel open for sendResponse
    }

    else if (message.message === "setDataLocalChromeApi") {
        console.log(message.data);
        chrome.storage.local.set({"user":message.data} , () => {
            if (chrome.runtime.lastError) {
                sendResponse({ success: false, error: chrome.runtime.lastError.message });
            } else {
                sendResponse({ success: true });
            }
        });
        return true; // Keeps the message channel open for sendResponse
    } else if (message.message === "getDataLocalChromeApi") {
        chrome.storage.local.get("user", (result) => {
            console.log(result["user"]);
            if (chrome.runtime.lastError) {
                sendResponse({ success: false, error: chrome.runtime.lastError.message });
            } else {
                if(result["user"]){

                sendResponse({ success: true, data: result["user"] });
                }
                else{
                    sendResponse({ success: true});


                }
            }
        });
        return true; // Keeps the message channel open for sendResponse
    } 
    else if(message.message == "LogoutChromeApi") {

        console.log("I am in logout chrome api area u there");

        chrome.storage.local.remove(message.key, (res) => {
            console.log(chrome.runtime.lastError)
            console.log(res)
            if (chrome.runtime.lastError) {
                sendResponse({ success: false, error: chrome.runtime.lastError.message });
            } else {
                sendResponse({ success: true });
            }
        });
        return true; // Keeps the message channel open for sendResponse

    }
    else if(message.message == 'newTab'){
        console.log("NEW TABS");
     chrome.tabs.create({ url:message.link });
        sendResponse({ success: true });
        return true; // Keeps the message channel open for sendResponse



    }
});




function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}





chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes("linkedin.com")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['content_script_modal.js']
        });
    } else {
        console.log("This extension works only on LinkedIn pages.");
    }
});

chrome.runtime.onMessageExternal.addListener(async(message, sender, sendResponse) => {
    console.log('Message received from external web app:', message);

    console.log(message.data);
    if (message.action === 'setData') {
        const value=await new Promise((resolve, reject) => {
        
            chrome.storage.local.set({"user":message.data} , () => {
                if (chrome.runtime.lastError) {
                    reject({ success: false, error: chrome.runtime.lastError.message });
                } else {
                    resolve({ success: true,message:"data has been setted for login" });
                }
            });
        
        
        
        }
        
        )
           

              

            console.log(value)
      sendResponse({ success: true, value });
    }
    else if(message.action === 'logout'){
        console.log("Please check the logout !!!!");    
       const value= await new Promise((resolve, reject) => {
          
            chrome.storage.local.remove("user", (res) => {
                console.log(chrome.runtime.lastError)
                console.log(res)
                if (chrome.runtime.lastError) {
                    reject({ success: false, error: chrome.runtime.lastError.message });
                } else {
                    resolve({ success: true });
                }
            });
        }
        
        
        )
        console.log(value);



            

        
      const data = { key: 'Logout successfully !!!!' };
      sendResponse({ success: true, data });

    }
    
    else {
      sendResponse({ success: false, error: 'Unknown action' });
    }
    return true;
  });
  
  


async function postDataToServer(data,accessToken) {
    const postData = { ...data };
    const arr = postData["name"].split(" ");
    postData["firstName"] = arr[0];
    postData["lastName"] = arr[1];
    postData["url"] = postData["link"];
    delete postData["link"];
    delete postData["img"];
    delete postData["name"];

    const apiUrl = 'https://email-finder-and-email-verification.vercel.app/api/v1/emailVerifier/post';

    console.log(postData);
   

    // Prepare the headers
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
    };

    // Create the fetch options
    const fetchOptions = {
        method: 'POST',
        headers: headers,
        credentials: 'omit',
        body: JSON.stringify(postData)
    };

    try {
        // Make the POST request using fetch and await for the response
        console.log(fetchOptions);
        const response = await fetch(apiUrl, fetchOptions);
        console.log(response);

        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON response
        const data = await response.json();
        console.log('POST request succeeded with JSON response:', data);
        return data;
        // Handle the response data as needed
    } catch (error) {
        console.log(error);
        console.error('Error making POST request:', error);
        // Handle errors
    }
}


async function getAllEmailVerifierData(user) {
    const apiUrl = 'https://email-finder-and-email-verification.vercel.app/api/v1/emailVerifier/getAll';
    const userData = {
        "url": "https://www.linkedin.com/sales/company/89796011?_ntb=sVXClZ1fddsfsdfQIi2pIN2R7%2Fgzw%3D%3D",
        "firstName": "muneer",
        "lastName": "ahamed",
        "company": "cloud",
        "position": "assost",
        "user": user.user,
        "user_position": "3"
    };

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.accessToken}`
    };

    const fetchOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(userData)
    };

    try {
        const response = await fetch(apiUrl, fetchOptions);

        // Check if the response is ok
        console.log(response);
        if (!response.ok) {
            if(response.statusText == "Unauthorized"){
                console.log(response.statusText);
                let response2 = await fetch(apiUrl, fetchOptions);


            }
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('POST request succeeded with JSON response:', data);
        return data; // Return data from the server response
    } catch (error) {
        console.error('Error making POST request:', error);
        throw error; // Re-throw the error for the caller to handle
    }
}
