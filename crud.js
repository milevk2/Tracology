import { pathsEnum, methodsEnum as methods} from "./api.js";

async function onSubmit(e) {

    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);
    const body = Object.fromEntries(formData);

    try {

        const response = await methods.POST(pathsEnum.monuments, body);
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

async function attach_firebase_id(firebase_id, attempts = 0) {

    const limit = 5;

    if (attempts == limit) {

        await methods.DELETE(`${pathsEnum.monuments}/${firebase_id}`);
        return alert(`Unable to update firebase id after ${limit} attempts!`);
    }

    try {
        let body = { 'firebase_id': firebase_id };

        await methods.PATCH(`${pathsEnum.monuments}/${firebase_id}`, body);
        console.log('Firebase ID added to the product in database!');
    }
    catch (err) {

        attempts++;
        attach_firebase_id(firebase_id, attempts);
        throw err;
    }
}

export { onSubmit }

