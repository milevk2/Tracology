import { methodsEnum as methods } from "./api.js";
import page from "./node_modules/page/page.mjs"

async function requestHandler(form, body, method, id) {
   
    const path = body.military;
    if (method == 'POST') {

        try {

            const response = await methods[method](path, body);
            const firebase_id = await response.json();
            attach_firebase_id(firebase_id.name, path);
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
            await methods[method](`${path}/${id}`, body);
            alert('Записът е обновен!');
        }
        catch (err) {

            alert(err);
        }
        finally {
            page.redirect(`/${path}/${id}`);
            // history.replaceState(history.state, "", `/Monuments/${id}`);
            // page.start() - old implementation
        }
    }
}


async function attach_firebase_id(firebase_id, path, attempts = 0) {

    const limit = 5;

    if (attempts == limit) {

        await methods.DELETE(`${path}/${firebase_id}`);
        return alert(`Unable to update firebase id after ${limit} attempts!`);
    }

    try {
        let body = { 'firebase_id': firebase_id };

        await methods.PATCH(`${path}/${firebase_id}`, body);
        alert(`Записът е добавен в базата данни! Firebase ID: ${firebase_id}`);
    }
    catch (err) {

        attempts++;
        attach_firebase_id(firebase_id, attempts);
        throw err;
    }
}

export { requestHandler }

