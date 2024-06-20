  //THis code for second Page 
  const secondPageWebscrap = (data) => {
    const { name: Name, link, company, position, img, id } = data;
    // Create the container div
    const firstLayerHeader = headerWebscrap();
    const container = document.createElement('div');
    container.className = 'container-secondPageWebscrap';

    // Create the header div
    const header = document.createElement('div');
    header.className = 'header-one-secondPageWebscrap';

    // Create the back button
    const backButton = document.createElement('a');
    backButton.href = '#';
    backButton.className = 'back-button';
    const backButtonSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    backButtonSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    backButtonSvg.setAttribute('width', '24');
    backButtonSvg.setAttribute('height', '24');
    backButtonSvg.setAttribute('viewBox', '0 0 24 24');
    const backButtonPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    backButtonPath.setAttribute('d', 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z');
    backButtonSvg.appendChild(backButtonPath);
    backButton.appendChild(backButtonSvg);

    // Create the profile picture
    const profilePic = document.createElement('img');
    profilePic.src = img;
    profilePic.alt = 'Profile Picture';
    profilePic.className = 'profile-pic';

    // Create the name and job title div
    const nameJobDiv = document.createElement('div');
    const name = document.createElement('h2');
    name.className = 'name';
    name.textContent = Name;
    const jobTitle = document.createElement('p');
    jobTitle.className = 'job-title';
    jobTitle.textContent = position;
    nameJobDiv.appendChild(name);
    nameJobDiv.appendChild(jobTitle);

    // Append back button, profile picture, and name/job title div to the header
    header.appendChild(backButton);
    header.appendChild(profilePic);
    header.appendChild(nameJobDiv);

    // Create the "Open in dashboard" button
    const openDashboardButton = document.createElement('button');
    openDashboardButton.className = 'button';
    openDashboardButton.classList.add("dashboardButton");
    openDashboardButton.classList.add("btn")
    openDashboardButton.classList.add("btn-outline-success")
    openDashboardButton.classList.add("btn-lg");
    openDashboardButton.textContent = 'Open in dashboard';
    openDashboardButton.onclick = debounce(


        async () => {
            console.log("I am in screen");
            alert("HELLO");
            window.open(`https://email-finder-and-email-verification-1vbn.vercel.app/linkedScrap/dashboard/${id}`, '_blank');

    

        }, 300)

    // Create the contact info div
    const contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';

    // Create the first contact item
    const contactItem1 = document.createElement('div');
    contactItem1.className = 'contact-item';
    const contactItem1Svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    contactItem1Svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    contactItem1Svg.setAttribute('width', '24');
    contactItem1Svg.setAttribute('height', '24');
    contactItem1Svg.setAttribute('viewBox', '0 0 24 24');
    const contactItem1Path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    contactItem1Path.setAttribute('d', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-8 8z');
    contactItem1Svg.appendChild(contactItem1Path);
    const contactItem1Text = document.createElement('p');
    contactItem1Text.className = 'contact-text';
    contactItem1Text.textContent = 'inderjeet.yadav@cloud...';
    const contactItem1Button = document.createElement('button');
    contactItem1Button.className = 'button';
    contactItem1Button.textContent = 'Work';
    contactItem1Button.classList.add("dashboardButton");
    contactItem1Button.classList.add("btn")
    contactItem1Button.classList.add("btn-outline-success")
    contactItem1Button.classList.add("btn-lg");
    contactItem1.appendChild(contactItem1Svg);
    contactItem1.appendChild(contactItem1Text);
    contactItem1.appendChild(contactItem1Button);

    // Create the second contact item
    const contactItem2 = document.createElement('div');
    contactItem2.className = 'contact-item';
    const contactItem2Svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    contactItem2Svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    contactItem2Svg.setAttribute('width', '24');
    contactItem2Svg.setAttribute('height', '24');
    contactItem2Svg.setAttribute('viewBox', '0 0 24 24');
    const contactItem2Path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    contactItem2Path.setAttribute('d', 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-8 8z');
    contactItem2Svg.appendChild(contactItem2Path);
    const contactItem2Text = document.createElement('p');
    contactItem2Text.className = 'contact-text';
    contactItem2Text.textContent = 'yadavinder2328@gma...';
    const contactItem2Button = document.createElement('button');
    contactItem2Button.className = 'button';
    contactItem2Button.textContent = 'Direct';
    contactItem2Button.classList.add("dashboardButton");
    contactItem2Button.classList.add("btn")
    contactItem2Button.classList.add("btn-outline-success")
    contactItem2Button.classList.add("btn-lg");
    contactItem2.appendChild(contactItem2Svg);
    contactItem2.appendChild(contactItem2Text);
    contactItem2.appendChild(contactItem2Button);

    // Append contact items to the contact info div
    contactInfo.appendChild(contactItem1);
    contactInfo.appendChild(contactItem2);

    // Create the "No Phones Found" button
    const noPhonesButton = document.createElement('button');
    noPhonesButton.className = 'button';
    noPhonesButton.textContent = 'No Phones Found';
    noPhonesButton.classList.add("no-phone")

    // Create the folder button
    const folderButton = document.createElement('button');
    folderButton.className = 'folder';
    const folderText = document.createElement('p');
    folderText.className = 'folder-text';
    folderText.textContent = 'Added to My First Folder';
    folderButton.appendChild(folderText);

    // Append all elements to the container
    container.appendChild(firstLayerHeader);
    container.appendChild(header);
    container.appendChild(openDashboardButton);
    container.appendChild(contactInfo);
    container.appendChild(noPhonesButton);
    container.appendChild(folderButton);


    backButton.addEventListener("click", async (e) => {

        //GO Back to before page code is here......
        document.getElementsByClassName("wrapper-body")[0]?.remove()
        const loading = Loader();

        const webscrap_modal = document.getElementsByClassName("wrapper_modal_webscrap")[0];

        webscrap_modal.appendChild(loading);


        const wrapperBody = await webScrapFun(e);
        loading.remove();


        webscrap_modal.appendChild(wrapperBody);

    })

    // Append the container to the body or a specific element
    return container;
}
