import { getMonuments } from "./user_actions.js";

function removeProjectInfo() {

    if (document.getElementById('projectInfo') !== null) document.getElementById('projectInfo').remove();
}

async function checkForCacheAndGetData() { //remove cache for admin

    if (sessionStorage.getItem('cache') != null) return console.log('Data present!');
    console.log('Caching data...');
    const response = await getMonuments();
    let data = response.map(x => Object.values(x));

    let concatenatedArr = [];
    for (let arr of data) {

        concatenatedArr.push(...arr);
    }
   // sessionStorage.setItem('cache', JSON.stringify(concatenatedArr)); disabled until there is different implementations respectively for user and admin
    return //console.log('Data stored!');

    //old implementation:
    // const response = [...Object.values(await getMonuments())];
    // const monumentsArray = [];
    // response.forEach(x => monumentsArray.push(...Object.values(x)));

}

export { removeProjectInfo, checkForCacheAndGetData }