import { requestHandler } from "./crud.js";
import { searchHandler } from "./utility.js";


async function submitHandler(e, method = null, id = null) {

    e.preventDefault();

    if (document.getElementById('military')) {
        document.getElementById('military').disabled = false;
    }

    const form = e.target;
    const formData = new FormData(form);
    const body = Object.fromEntries(formData);

    if (method == null) {

        return searchHandler(e, body);
    }
    return requestHandler(form, body, method, id);
}

export { submitHandler }