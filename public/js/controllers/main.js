angular.module('ratingController', [])

	.controller('mainController', ['$scope', '$http', 'Rating', function ($scope, $http, Rating) {
		$scope.loading = true;
		$scope.positionToogle = true;
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

		$scope.changePositionToogle = function () {
			$scope.positionToogle = !$scope.positionToogle;			
		};
	}])
	.directive('fractionConverter', function () {
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