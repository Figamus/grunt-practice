"use strict";

// component that displays all contacts. It should import the Contact component and the ContactCollection component.

let createContact = require("./contact");
let getContacts = require("./contactCollection");

function listContacts() {
    getContacts().forEach(contact => {
        let contactComponent = createContact(contact.name, contact.phone, contact.address);
        writeContactsToDOM(contactComponent);
    });
};

function writeContactsToDOM(contact){
    document.querySelector("#contactList").innerHTML += contact;
};

module.exports = listContacts;