import { pathsEnum, methodsEnum as methods } from "./api.js";
import page from "./node_modules/page/page.mjs"

async function submitHandler(e, method, id = null) {

    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const body = Object.fromEntries(formData);

    if (method == 'POST') {

        try {

            const response = await methods[method](pathsEnum.monuments, body);
            const firebase_id = await response.json();
            attach_firebase_id(firebase_id.name);
        }
        catch (err) {

            alert(err);
            throw err;
        }
        finally {
            form.reset();
        }

    }
    else if (method == 'PATCH') {

        try {
            await methods[method](`${pathsEnum.monuments}/${id}`, body);
            alert('Записът е обновен!');
        }
        catch (err) {

            alert(err);
        }
        finally {
            page.redirect(`/${pathsEnum.monuments}/${id}`);
            // history.replaceState(history.state, "", `/Monuments/${id}`);
            // page.start() - old implementation
        }
    }
}

async function attach_firebase_id(firebase_id, attempts = 0) {

    const limit = 5;

    if (attempts == limit) {

        await methods.DELETE(`${pathsEnum.monuments}/${firebase_id}`);
        return alert(`Unable to update firebase id after ${limit} attempts!`);
    }

    try {
        let body = { 'firebase_id': firebase_id };

        await methods.PATCH(`${pathsEnum.monuments}/${firebase_id}`, body);
        alert(`Записът е добавен в базата данни! Firebase ID: ${firebase_id}`);
    }
    catch (err) {

        attempts++;
        attach_firebase_id(firebase_id, attempts);
        throw err;
    }
}

export { submitHandler }

