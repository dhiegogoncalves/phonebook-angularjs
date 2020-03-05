angular.module("phoneBook").filter("ellipsis", () => {
    return (input, size = 25) => input.length > size ? `${input.substring(0, size)}...` : input;
});