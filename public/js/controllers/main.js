angular.module('siteController', [])

	.controller('mainController', ['$scope','$http','Todos', function($scope, $http, SiteService) {
		$scope.formData = {};
		$scope.loading = true;

		SiteService.get()
			.then(function(response) {
				$scope.todos = response.data;
				$scope.loading = false;
			});

		$scope.createSite = function() {

			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				SiteService.create($scope.formData)

					.then(function(response) {
						$scope.loading = false;
						$scope.formData = {};
						$scope.todos = response.data;
					});
			}
		};

        $scope.updateSite = function() {

            if ($scope.formData._id != undefined) {
                $scope.loading = true;

                SiteService.patch($scope.formData)
                    .then(function(response) {
                        $scope.loading = false;
                        $scope.formData = {};
                        $scope.todos = response.data;
                    });
            }
        };

		$scope.deleteSite = function(id) {
			$scope.loading = true;

			SiteService.delete(id)
				.then(function(response) {
					$scope.loading = false;
					$scope.todos = response.data;
				});
		};
	}]);