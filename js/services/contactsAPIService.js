angular.module("phoneBook").factory("contactsAPI", ($http, config) => {
    let getContacts = () => $http.get(`${config.baseUrl}/contacts`);
    let saveContact = (contact) => $http.post(`${config.baseUrl}/contacts`, contact);

    return {
        getContacts,
        saveContact
    };
})