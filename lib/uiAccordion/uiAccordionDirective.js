angular.module("uiAccordion", []);

angular
  .module("uiAccordion")
  .run($templateCache =>
    $templateCache.put(
      "view/accordion.html",
      '<div class="ui-accordion-title" ng-click="open()">{{title}}</div>'+ 
      '<div class="ui-accordion-content" ng-show="isOpened" ng-transclude></div>'
    )
  );

angular.module("uiAccordion").directive("uiAccordions", () => {
  return {
    controller: function($scope, $element, $attrs) {
      let accordions = [];

      this.registerAccordion = accordion => accordions.push(accordion);

      this.closeAll = () => {
        accordions.forEach(accordion => (accordion.isOpened = false));
      };
    }
  };
});

angular.module("uiAccordion").directive("uiAccordion", () => {
  return {
    templateUrl: "view/accordion.html",
    transclude: true,
    scope: {
      title: "@"
    },
    require: "^uiAccordions",
    link: (scope, element, attrs, ctrl) => {
      ctrl.registerAccordion(scope);
      scope.open = () => {
        ctrl.closeAll();
        scope.isOpened = true;
      };
    }
  };
});
