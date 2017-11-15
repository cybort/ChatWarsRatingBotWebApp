angular.module('ratingService', [])

	.factory('Rating', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/rating');
			}
		}
	}]);