import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = "feedback-form-state";
const formData = {};

populateInput() 
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);


function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
   
}

function populateInput() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parcedSavedMessage = JSON.parse(savedMessage);

    if (savedMessage) {
        const formKeys = Object.keys(parcedSavedMessage);
        formKeys.map(key => {
            document.querySelector(`[name='${key}']`).value = parcedSavedMessage[key];
        })
    }
}

function onFormSubmit(evt) {
    evt.preventDefault();

    evt.target.reset();

    localStorage.removeItem(STORAGE_KEY);
}