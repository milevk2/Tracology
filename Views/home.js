import { checkForCacheAndGetData } from "../utility.js";


async function onHomeLoad() {

    await checkForCacheAndGetData();
    window.location.href='/index.html';

    
}

export { onHomeLoad }