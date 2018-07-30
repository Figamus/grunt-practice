"use strict";

// component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.

let contacts = [
    {
        name: "Daniel Figueroa",
        phone: "555-555-5555",
        address: "2251 Something Ave"
    },
    {
        name: "Angel Figueroa",
        phone: "777-777-7777",
        address: "1208 Somewhere Ave"
    },
    {
        name: "Carmen Figueroa",
        phone: "888-888-8888",
        address: "3001 Elsewhere St"
    },
];

localStorage.setItem("contacts", JSON.stringify(contacts));

function getContacts(){
    JSON.parse(localStorage.getItem("contacts"));
};

module.exports = getContacts;