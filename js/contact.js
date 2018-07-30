"use strict";

// component that displays a person's name, phone number, and address.

function createContact(name, phone, address) {
    return `<p>${name} can be reached at ${phone} and lives at ${address}</p>`
};

module.exports = createContact;