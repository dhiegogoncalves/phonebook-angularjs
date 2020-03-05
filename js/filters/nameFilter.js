angular.module("phoneBook").filter("name", () => {
    return (input) => {
        let nameList = input.split(" ");
        let formattedListNames =  nameList.map((name) => {
            if (/(da|de)/.test(name)) return name;
            return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
        });
        return formattedListNames.join(" ");
    };
});