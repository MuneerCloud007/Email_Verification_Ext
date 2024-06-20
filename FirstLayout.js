
//This is the layout for the first page component which contain header, firstpagewebscraping, footer
const webScrapFun = async () => {
    document.getElementsByClassName("content_modal_script")[0].style.display = "none";
    const accessToken = await getLoginData();
    console.log("ACCESS TOKEN BELOW is")

    console.log(accessToken);
    console.log(accessToken["data"])


    if (!accessToken["data"]) {
        console.log("Access token is null");
        document.getElementsByClassName("wrapper_modal_webscrap")[0]?.remove();
        const webscrap_modal = document.createElement("div");
        webscrap_modal.className = "wrapper_modal_webscrap";


        const wrapperBody = document.createElement('div');
        wrapperBody.classList.add('wrapper-body');

        const header = headerWebscrap();

        //UPto know header default part
        const thirdPart = document.createElement("div");
        thirdPart.className = "login-webscrap";


        thirdPart.innerHTML = `
      <div class="container mt-5 login-container" style="
display: flex;
">
    <div class="text-center">
        <p>Please login from salesSql website</p>
        
    </div>
</div>
   
        `


        // <div class="d-flex justify-content-center mt-4">
        //     <button class="btn btn-primary mx-2">Login</button>
        //     <button class="btn btn-secondary mx-2">Register</button>
        // </div>

        wrapperBody.appendChild(header);
        wrapperBody.appendChild(thirdPart);
        webscrap_modal.appendChild(wrapperBody);


        document.body.insertBefore(webscrap_modal, document.getElementsByClassName("content_modal_script")[0]);



        return;
    }
    onClickModal = true;




    const filteredArray = Array.from(document.querySelectorAll(".artdeco-list__item div .flex .flex .flex .artdeco-entity-lockup__title"))
        .map(element => {
            return {
                name: element.children[0].innerText.trim(),
                link: element.parentElement.parentElement.children[1].children[2].href,
                company: element.parentElement.parentElement.children[1].children[2].innerText,
                position: element.parentElement.parentElement.children[1].children[0].innerHTML, img: element.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.firstElementChild.src
            };
        });

    console.log(filteredArray);


    const fullData = await WebScrapFirstPage(filteredArray)
    return fullData;





}



const headerWebscrap = () => {
    const header = document.createElement('div');
    header.classList.add('header');

    const buttonsContainer = document.createElement('div');
    const fullScreenButton = document.createElement('button');
    fullScreenButton.textContent = 'full';
    fullScreenButton.classList.add("btn")
    fullScreenButton.classList.add("btn-outline-success")
    fullScreenButton.classList.add("btn-lg");
    fullScreenButton.onclick = async () => {
        console.log("I am in screen");
        window.open(`https://email-finder-and-email-verification-1vbn.vercel.app/linkedScrap/dashboard`, '_blank');

        


    }


    const minimizeButton = document.createElement('button');
    minimizeButton.textContent = 'close';
    minimizeButton.classList.add("btn")
    minimizeButton.classList.add("btn-outline-danger")
    minimizeButton.classList.add("btn-lg");
    minimizeButton.style.marginInline = "0.3rem";
    minimizeButton.onclick = () => {
        console.log(Array.from(document.getElementsByClassName("wrapper_modal_webscrap")))
        document.getElementsByClassName("wrapper_modal_webscrap").length > 0 && Array.from(document.getElementsByClassName("wrapper_modal_webscrap"))?.map((vl) => vl?.remove())
        document.getElementsByClassName("content_modal_script")[0].style.display = "block";

    }


    buttonsContainer.appendChild(fullScreenButton);
    buttonsContainer.appendChild(minimizeButton);

    //
    const companyImg = document.createElement('div');
    companyImg.classList.add('company-img');
    const companyImgText = document.createTextNode('Cloudvandana');
    companyImg.appendChild(companyImgText);

    const img = document.createElement('img');
    img.setAttribute('src', '');
    img.setAttribute('alt', '');



    header.appendChild(companyImg);
    header.appendChild(img);
    header.appendChild(buttonsContainer);
    return header;
}
const secondPartWebscrap = () => {
    const secondPart = document.createElement('div');
    secondPart.classList.add('second-part');
    const selectAllP = document.createElement('p');
    selectAllP.textContent = 'Select all';
    secondPart.appendChild(selectAllP);
    return secondPart;
}

const thirdPartWebScrap = async (filteredArray) => {
    const thirdPart = document.createElement('div');
    thirdPart.classList.add('third-part');
    console.log("THired part");
    console.log(filteredArray);
    let companyData;
    console.log(getDataFromSyncStorage());

    // if (getDataFromSyncStorage()) {
    //     companyData = getDataFromSyncStorage();
    // }
    // else {
    //     saveDataToSyncStorage(designData);
    //     companyData = getDataFromSyncStorage();


    // }

    console.log("COMPANY DATA IS ______");



    companyData = await new Promise(async (resolve, reject) => {
        const loginData = await getLoginData();


        chrome.runtime.sendMessage({ message: "getData", data: { "user": loginData["data"].userId, "accessToken": loginData["data"].token } }, (response) => {
            if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError.message);
            }
            if (response.success) {
                resolve(response.data.data);
            } else {
                reject(response.error);
            }
        });
    });
    const forData = Object.keys(companyData);

    const dump = {};
    console.log(forData);

    forData.forEach((key) => {
        const subData = {};
        companyData[key].forEach((vl) => {
            subData[vl.user_position] = { ...vl };
        });
        dump[key] = subData;
    });
    companyData = dump;


    console.log("COMPANT DATA");
    console.log(companyData);

    filteredArray.map((vl, index) => {
        console.log(vl);
        const { name, link, company, position, img } = vl
        const thirdPartWrapper = document.createElement('div');
        thirdPartWrapper.classList.add("thirdPartWebScrap")
        thirdPartWrapper.classList.add(`part-${index}`);

        const personImg = document.createElement('div');
        personImg.classList.add('person-img');
        const imgPerson = document.createElement('img');
        imgPerson.setAttribute('src', img);
        imgPerson.setAttribute('alt', 'Alt-img');
        personImg.appendChild(imgPerson);

        const personInfo = document.createElement('div');
        personInfo.classList.add('person-info');

        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        const inner_wrapper = document.createElement("div");
        inner_wrapper.classList.add("inner_wrapper");


        const nameP = document.createElement('p');
        nameP.textContent = (name) ? name : "no name";

        const companyDetailsP = document.createElement('p');
        companyDetailsP.textContent = (company) ? company : "no-company";

        inner_wrapper.appendChild(nameP);
        inner_wrapper.appendChild(companyDetailsP);
        wrapper.appendChild(inner_wrapper);



        //TO CHECK IF ITS PRESENT IN CHROME SYNC OR NOT
        const plusButton = document.createElement('button');
        plusButton.classList.add("plusButton")
        console.log(`COMPANY LINK IS = ${link} and position is ${index + 1}`);
        const sanitizeUrlcode = sanitizeUrl(location.href)
        console.log(sanitizeUrlcode);
        if (companyData && companyData[link]) {

            if (companyData[link][index + 1]) {
                plusButton.textContent = 'view';
                plusButton.classList.add("btn")
                plusButton.classList.add("btn-outline-primary")
                plusButton.classList.add("btn-lg");

            }
            else {
                plusButton.textContent = 'add';
                plusButton.classList.add("btn")
                plusButton.classList.add("btn-outline-success")
                plusButton.classList.add("btn-lg");


            }
        } else {
            plusButton.textContent = 'add';
            plusButton.classList.add("btn")
            plusButton.classList.add("btn-outline-success")
            plusButton.classList.add("btn-lg");


        }


        wrapper.appendChild(plusButton)



        personInfo.appendChild(wrapper);
        thirdPartWrapper.appendChild(personImg);
        thirdPartWrapper.appendChild(personInfo);
        thirdPart.appendChild(thirdPartWrapper);



        plusButton.addEventListener("click", async (e) => {
            console.log("I am clicked");

            if (e.target.textContent == "view") {
                console.log("plus");
                console.log(e.target);
                document.getElementsByClassName("wrapper-body")[0]?.remove()
                console.log(companyData[link][index + 1]["_id"]);
                const data = { name, link, company, position, img, id: companyData[link][index + 1]["_id"] };



                const webscrap_modal = document.getElementsByClassName("wrapper_modal_webscrap")[0]
                const secondPage = secondPageWebscrap(data);

                const wrapperbody = document.createElement("div");
                wrapperbody.classList.add("wrapper-body");
                wrapperbody.appendChild(secondPage);
                webscrap_modal.appendChild(wrapperbody);






            }
            else {
                console.log("I am clicked!!! add1");
                const loginData2 = await getLoginData();

                console.log(loginData2);

                const dump = { message: "postData", data: { name, link, company, position, img, user_position: index + 1, "user": loginData2["data"].userId }, accessToken: loginData2["data"].token }
                console.log("I am clicked!!! add2");
                console.log(dump)

                const data = await chrome.runtime.sendMessage({ message: "postData", data: { name, link, company, position, img, user_position: index + 1, "user": loginData2["data"].userId }, accessToken: loginData2["data"].token });
                //   This case of adding and interaction to database
                const webscrap_modal = document.getElementsByClassName("wrapper_modal_webscrap")[0]
                console.log("WEBSCRAPING....POSTDATA");
                document.getElementsByClassName("wrapper-body")[0]?.remove()

                const loading = Loader();
                webscrap_modal.appendChild(loading);
                document.body.insertBefore(webscrap_modal, document.getElementsByClassName("content_modal_script")[0]);







                const fullData = await webScrapFun(e);
                document.getElementsByClassName("Loading")[0].remove();


                webscrap_modal.appendChild(fullData);










                console.log("Data base intereaction for addition!!!!");
            }


            //API CALL
            //REMOVE THE DOM CONTEN
            //THEN REASSIGN THE CONTENT AGAIN!!!!
        })


    })





    return thirdPart;
}

const footerWebScrap = () => {

    const footer = document.createElement('div');
    footer.classList.add('footer');
    const scrollDownP = document.createElement('p');
    scrollDownP.textContent = 'Scroll-down on Linkedin to load more contacts';
    footer.appendChild(scrollDownP);
    return footer;
}
//..................This is the code for First Page Webscrap...........
const WebScrapFirstPage = async (filteredArray) => {
    // Create wrapper elements
    const wrapperBody = document.createElement('div');
    wrapperBody.classList.add('wrapper-body');

    const header = headerWebscrap();
    console.log(filteredArray);
    const thirdPart = await thirdPartWebScrap(filteredArray);

    const footer = footerWebScrap();







    wrapperBody.appendChild(header);
    wrapperBody.appendChild(thirdPart);
    wrapperBody.appendChild(footer);

    // Append the constructed DOM structure to the document body
    return wrapperBody;

}
