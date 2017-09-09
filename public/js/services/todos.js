angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/all');
			},
			create : function(todoData) {
				return $http.post('/api/create', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/delete/' + id);
			},
			patch : function(todoData) {
			    return $http.patch('/api/update', todoData);
			}
		}
	}]);