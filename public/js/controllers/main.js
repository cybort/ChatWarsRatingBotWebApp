angular.module('ratingController', [])

	.controller('mainController', ['$scope', '$http', 'Rating', function ($scope, $http, Rating) {
		$scope.loading = true;
		$scope.positionToogle = true;
		$scope.fractions = ['red', 'blue', 'black', 'white', 'yellow', 'mint', 'twilight', 'deleted'];

		$scope.ratings = getRatings();

		$scope.getByFraction = function (id) {
			getRatings(id);
		}

		$scope.changePositionToogle = function () {
			$scope.positionToogle = !$scope.positionToogle;
		};

		function getRatings (id) {
			$scope.loading = true;

			if (id !== undefined) {
				Rating.getByFraction(id)
					.success(function (data) {
						$scope.loading = false;
						$scope.ratings = data;
					});
			}
			else {
				Rating.get()
					.success(function (data) {
						$scope.ratings = data;
						$scope.loading = false;
					});
			}
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
	})
	.directive('loading', ['$http', function ($http) {
		return {
			restrict: 'A',
			link: function (scope, elm, attrs) {
				scope.isLoading = function () {
					return $http.pendingRequests.length > 0;
				};

				scope.$watch(scope.isLoading, function (v) {
					if (v) {
						elm.show();
					} else {
						elm.hide();
					}
				});
			}
		};

	}]);