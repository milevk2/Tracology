import { requestHandler } from "./crud.js";

async function submitHandler(e, method = null, id = null) {

    e.preventDefault();

    if (document.getElementById('military')) {
        document.getElementById('military').disabled = false;
    }

    const form = e.target;
    const formData = new FormData(form);
    const body = Object.fromEntries(formData);

    return requestHandler(form, body, method, id);
}

export { submitHandler }