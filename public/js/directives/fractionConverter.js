angular.module('ratingController').directive('fractionConverter', function () {
    return {
        link: function (scope, element, attrs) {
            scope.image = 'deleted';
            if (scope.rating != undefined) {
                scope.image = scope.rating.fraction;
            }
            else if (scope.fraction != undefined) {
                scope.image = scope.fraction;
            }
        },
        templateUrl: 'templates/image.html'
    }
    
});
