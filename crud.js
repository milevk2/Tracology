import { methodsEnum as methods } from "./api.js";
import page from "./node_modules/page/page.mjs"

async function requestHandler(form, body, method, id) {
   
    const path = body.military;
    const mentioned_emperor = body['emperor_mentioned'];

    if (method == 'POST') {

        try {

            const response = await methods[method](path, body);
            const firebase_id = await response.json();
            attach_firebase_id(firebase_id.name, path);
            const db_emperor_ref = await emperorRelationship(`${path}/${firebase_id.name}`, mentioned_emperor);
            Object.defineProperty(body, 'db_emperor_ref', {value: db_emperor_ref.name, enumerable: true, writable: true, configurable: true});
            await methods.PATCH(`${path}/${firebase_id.name}`, body);
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

async function emperorRelationship(path, mentioned_emperor) {

    if(mentioned_emperor == null) return;
    if(mentioned_emperor == 'Not applicable') return;

    const body = {link: path};

    const response = await methods.POST(`/Emperors/${mentioned_emperor}`, body);

    
    return await response.json();

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

