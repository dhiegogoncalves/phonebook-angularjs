angular.module("phoneBook").service("operatorsAPI", function ($http, config) {
    this.getOperators = () => $http.get(`${config.baseUrl}/operators`);
});