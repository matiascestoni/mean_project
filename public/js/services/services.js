angular.module('siteService', [])

	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/all');
			},
			create : function(site) {
				return $http.post('/api/create', site);
			},
			delete : function(id) {
				return $http.delete('/api/delete/' + id);
			},
			patch : function(site) {
			    return $http.patch('/api/update', site);
			}
		}
	}]);