angular.module("phoneBook").controller("phoneBookCtrl", ($scope, contactsAPI, operatorsAPI, serialGenerator) => {
    $scope.app = "Lista Telefônica";
    $scope.contacts = [];
    $scope.operators = [];

    let loadContacts = () => {
        contactsAPI.getContacts().then((response) => $scope.contacts = response.data).catch((error) => {
            console.log(error);
            $scope.error = "Não foi possível carregar os dados!";
        });
    };

    let loadOperators = () => {
        operatorsAPI.getOperators().then((response) => $scope.operators = response.data).catch((error) => {
            console.log(error);
            $scope.error = "Não foi possível carregar os dados!";
        });
    };

    $scope.addContact = (contact) => {
        contact.serial = serialGenerator.generate();
        contact.date = new Date();
        contactsAPI.saveContact(contact).then((_) => {
            delete $scope.contact;
            $scope.contactForm.$setPristine();
            loadContacts();
        }).catch((error) => console.log(error));             
    };

    $scope.deleteContacts = (contacts) => {
        $scope.contacts = contacts.filter((contact) => !contact.selected);
    };

    $scope.isSelectedContact = (contacts) => {
        return contacts.some((contact) => contact.selected);
    };

    $scope.sortContactsBy = (field) => {
        $scope.sortingCriteria = field;
        $scope.sortingDirection = !$scope.sortingDirection;
    };

    loadContacts();
    loadOperators();
});