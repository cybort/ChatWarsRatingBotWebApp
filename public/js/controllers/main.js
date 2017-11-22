angular.module('ratingController', ['ui.bootstrap'])

	.controller('mainController', ['$scope', '$http', 'Rating', function ($scope, $http, Rating) {
		$scope.fractions = ['red', 'blue', 'black', 'white', 'yellow', 'mint', 'twilight', 'deleted'];
		$scope.pagingOptions = [ { 'name': 10, 'value': 10 }, { 'name': 50, 'value': 50 }, { 'name': 100, 'value': 100 }, { 'name': 200, 'value': 200 }, { 'name': 500, 'value': 500 } ];
		$scope.positionToogle = true;

		$scope.ratings = getRatings();

		$scope.currentPage = 1;
		$scope.itemsPerPage = $scope.pagingOptions[1].value;
		$scope.maxSize = 5;

		$scope.setItemsPerPage = function (num) {
			$scope.itemsPerPage = num;
			$scope.currentPage = 1;
		}

		$scope.getByFraction = function (id) {
			getRatings(id);
		}

		$scope.changePositionToogle = function () {
			$scope.positionToogle = !$scope.positionToogle;
		}

		function getRatings(id) {
			if (id !== undefined) {
				Rating.getByFraction(id)
					.success(function (data) {
						$scope.ratings = data;
						$scope.totalItems = $scope.ratings.length;
					});
			}
			else {
				Rating.get()
					.success(function (data) {
						$scope.ratings = data;
						$scope.totalItems = $scope.ratings.length;
					});
			}
		}

	}]);