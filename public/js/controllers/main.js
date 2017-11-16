angular.module('ratingController', [])

	.controller('mainController', ['$scope', '$http', 'Rating', function ($scope, $http, Rating) {
		$scope.loading = true;
		$scope.fractions = ['red', 'blue', 'black', 'white', 'yellow', 'mint', 'twilight', 'deleted'];		

		// GET =====================================================================
		Rating.get()
			.success(function (data) {
				$scope.ratings = data;
				$scope.loading = false;
			});

		$scope.getByFraction = function (id) {			
			$scope.loading = true;

			Rating.getByFraction(id)				
				.success(function (data) {
					$scope.loading = false;
					$scope.ratings = data;
				});
		};
	}])
	.directive('fractionConverter', function () {
		return {
			link: function (scope, element, attrs) {
				scope.image = '/img/deleted.png';
				if (scope.rating != undefined) {
					scope.image = '/img/' + scope.rating.fraction + '.png';
				}
				else if (scope.fraction != undefined) {
					scope.image = '/img/' + scope.fraction + '.png';
				}
			},
			templateUrl: 'templates/image.html'
		}
	});