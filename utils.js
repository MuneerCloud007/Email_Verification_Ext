// main.js
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

//To get the Login Data
function getLoginData() {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({ message: "getDataLocalChromeApi", key: "user" }, (response) => {
            resolve(response);
        })
    })
}

//This is a Loader
function Loader() {
    const loading = document.createElement("div");
    loading.classList.add("Loading");
    loading.innerHTML = `
       <div class="spinner-border text-primary" role="status">
<span class="sr-only"></span>
</div>

     `
    return loading
}

//Santize the url

function sanitizeUrl(url) {
    if (url.includes('#')) {
        return url.split('#')[0]; // Split the URL at # and take the part before it
    }
    return url; // If no # is present, return the original URL
}




    // Debounce function definition
    function debounce(func, delay) {
        let timeoutId;

        return function () {
            const context = this;
            const args = arguments;

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(context, args);
            }, delay);
        };
    }



    
    var designData = {
        "https://www.linkedin.com/sales/search/people?page=2&query=(recentSearchParam%3A(id%3A3682132028%2CdoLogHistory%3Atrue)%2Cfilters%3AList((type%3ACURRENT_TITLE%2Cvalues%3AList((text%3Asalesforce%2CselectionType%3AINCLUDED)))%2C(type%3ACOMPANY_HEADQUARTERS%2Cvalues%3AList((id%3A105080838%2Ctext%3ANew%2520York%252C%2520United%2520States%2CselectionType%3AINCLUDED)))%2C(type%3ACOMPANY_HEADCOUNT%2Cvalues%3AList((id%3AC%2Ctext%3A11-50%2CselectionType%3AINCLUDED)))))&sessionId=sVXClZ16QIi2pIN2R7%2Fgzw%3D%3D&viewAllFilters=true": {
            "3": {
                Link: "hemangpokal@gmail.com"
            },
            "5": {
                Link: "shaina@saberpoint.com"
            }
        },
        "https://www.linkedin.com/sales/search/people?query=(recentSearchParam%3A(id%3A3682132028%2CdoLogHistory%3Atrue)%2Cfilters%3AList((type%3ACURRENT_TITLE%2Cvalues%3AList((text%3Asalesforce%2CselectionType%3AINCLUDED)))%2C(type%3ACOMPANY_HEADQUARTERS%2Cvalues%3AList((id%3A105080838%2Ctext%3ANew%2520York%252C%2520United%2520States%2CselectionType%3AINCLUDED)%2C(id%3A102986501%2Ctext%3APennsylvania%252C%2520United%2520States%2CselectionType%3AINCLUDED)))%2C(type%3ACOMPANY_HEADCOUNT%2Cvalues%3AList((id%3AC%2Ctext%3A11-50%2CselectionType%3AINCLUDED)))))&sessionId=sVXClZ16QIi2pIN2R7%2Fgzw%3D%3D&viewAllFilters=true": {
            "0": {},
            "1": {},
            "2": {}
        }
    }

    // Function to check if user is present in localStorage and retrieve token
    function getUserToken() {
        // Check if user data is present in localStorage
        const userData = localStorage.getItem('user');

        if (userData) {
            try {
                // Parse the JSON data
                const user = JSON.parse(userData);

                // Retrieve the token from the parsed data
                const token = user.token;

                if (token) {
                    console.log('Token:', token);
                    return token;
                } else {
                    console.error('Token not found in user data.');
                    return null;
                }
            } catch (error) {
                console.error('Error parsing user data:', error);
                return null;
            }
        } else {
            console.log('User data not found in localStorage.');
            return null;
        }
    }


    







    function saveDataToSyncStorage(data) {
        chrome.storage.sync.set({ 'designData': data }, function () {
            if (chrome.runtime.lastError) {
                console.error('Error saving data: ' + chrome.runtime.lastError.message);
            } else {
                console.log('Data saved successfully.');
            }
        });
    }

    function getDataFromSyncStorage() {
        chrome.storage.sync.get('designData', function (result) {
            if (chrome.runtime.lastError) {
                console.error('Error retrieving data: ' + chrome.runtime.lastError.message);
                return null
            } else {
                console.log(result);
                return result.designData
            }
        });
    }

    


    let onClickModal = false;
 

    // Function to check if user is present in localStorage and retrieve token
    function getUserToken() {
        // Check if user data is present in localStorage
        const userData = localStorage.getItem('user');

        if (userData) {
            try {
                // Parse the JSON data
                const user = JSON.parse(userData);

                // Retrieve the token from the parsed data
                const token = user.token;

                if (token) {
                    console.log('Token:', token);
                    return token;
                } else {
                    console.error('Token not found in user data.');
                    return null;
                }
            } catch (error) {
                console.error('Error parsing user data:', error);
                return null;
            }
        } else {
            console.log('User data not found in localStorage.');
            return null;
        }
    }


    







    function saveDataToSyncStorage(data) {
        chrome.storage.sync.set({ 'designData': data }, function () {
            if (chrome.runtime.lastError) {
                console.error('Error saving data: ' + chrome.runtime.lastError.message);
            } else {
                console.log('Data saved successfully.');
            }
        });
    }

    function getDataFromSyncStorage() {
        chrome.storage.sync.get('designData', function (result) {
            if (chrome.runtime.lastError) {
                console.error('Error retrieving data: ' + chrome.runtime.lastError.message);
                return null
            } else {
                console.log(result);
                return result.designData
            }
        });
    }


   

    

    

