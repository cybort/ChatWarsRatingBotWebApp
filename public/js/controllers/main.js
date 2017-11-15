angular.module('ratingController', [])
	
	.controller('mainController', ['$scope','$http','Rating', function($scope, $http, Rating) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		Rating.get()
			.success(function(data) {
				$scope.ratings = data;
				$scope.loading = false;
			});
	}])
	.directive('fractionConverter', function () {
        return {
            link: function (scope, element, attrs) {				
                scope.fraction = '/img/' + scope.rating.fraction + '.png';
            },
            template: '<img ng-src="{{ fraction }}" height="18" width="18"/>'
        }
    });