const tbody = document.querySelector(".tbody");
let hasReloaded=false;
document.querySelector(".tbody").innerHTML=""



async function run() {
    document.querySelector(".tbody").innerHTML=""

   

    let pageArrayData = await chrome.storage.local.get("pageData");

    console.log(pageArrayData);
    let pageArray = pageArrayData.pageData || [];
    console.log(pageArray);
    let count = 1;

    pageArray.forEach((vl, index) => {
        console.log(`page-${index + 1}`);
        console.log(vl[`page-${index + 1}`]);
        count = setTable(vl[`page-${index + 1}`], tbody, count);
    });
}


function setTable(arr, tbody, count) {
    arr.forEach((vl) => {
        const { company, link, name, position } = vl;

        // Create table row
        const tr = document.createElement("tr");
        const td0 = document.createElement("td");
        td0.textContent = count;
        tr.appendChild(td0);

        const td1 = document.createElement("td");
        td1.textContent = company;
        tr.appendChild(td1);

        const td3 = document.createElement("td");
        td3.textContent = name;
        tr.appendChild(td3);

        const td4 = document.createElement("td");
        td4.textContent = position;
        tr.appendChild(td4);

        const td2 = document.createElement("td");
        td2.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
        tr.appendChild(td2);

        tbody.appendChild(tr);

        count++;
    });
    
    return count;
}
run();