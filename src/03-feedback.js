import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = "feedback-form-state";
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateInput() 


function onFormInput(evt) {
    // formData[evt.target.name] = evt.target.value;
    
   formData.email = input.value;
   formData.message = textarea.value;
   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateInput() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parcedSavedMessage = JSON.parse(savedMessage);

    if (parcedSavedMessage) {
        // const formKeys = Object.keys(parcedSavedMessage);
        // formKeys.map(key => {
        //     document.querySelector(`[name='${key}']`).value = parcedSavedMessage[key];
        // })

        input.value = parcedSavedMessage.email;
        textarea.value = parcedSavedMessage.message;
    }
}

function onFormSubmit(evt) {
    evt.preventDefault();

    const formElements = evt.target.elements;

    const email = formElements.email.value;
    const message = formElements.message.value;

        if (email === "" || message === "") {
        return alert("У формі є незаповнені поля, для відправки форми ВСІ поля повинні бути заповненими!");
    }
     const formData = {
        email,
        message,
             }

    console.log(formData);

    evt.target.reset();

    localStorage.removeItem(STORAGE_KEY);
}