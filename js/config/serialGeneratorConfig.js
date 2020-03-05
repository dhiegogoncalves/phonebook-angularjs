angular.module("phoneBook").config(function (serialGeneratorProvider) {
    serialGeneratorProvider.setLength(4);
    //console.log(serialGeneratorProvider.getLength());
    //console.log(serialGeneratorProvider.$get().generate());
});