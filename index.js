var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the Request_doctor page
			.when('/Request_doctor', {
				templateUrl : 'pages/Request_doctor.html',
				controller  : 'RequestdoctorController'

			})

			// route for the welcome page
			.when('/welcome', {
				templateUrl : 'pages/welcome.html',
				controller  : 'mainController'
			})
            
            .when('/login', {
				templateUrl : 'pages/signin.html',
				controller  : 'signinController'
			})

			// route for the signup page
			.when('/signup', {
				templateUrl : 'pages/signup.html',
				controller  : 'signupController'
			})
           //.otherwise({ redirectTo: '/welcome' });
           
           // route for the patient deatils page
			.when('/patientDetails', {
				templateUrl : 'pages/Patient_Details.html',
				controller  : 'patientDetailsController'
			})

			// route for the select doctor page
			.when('/selectDoctor', {
				templateUrl : 'pages/Select_Doctor.html',
				controller  : 'selectDoctorController'
			})

			.when('/doctorProfile', {
				templateUrl : 'pages/doctorProfile.html',
				controller  : 'doctorProfileController'
			})

			.when('/contact_us', {
				templateUrl: 'pages/contact_us.html',
				controller: 'ContactUsController'
			});
	});

    
// create the controller and inject Angular's $scope
	
	scotchApp.controller('RequestdoctorController', function($scope) {
		// create a message to display in our view
		$scope.message = 'This is RequestdoctorController';
		$scope.names = ["los angeles", "sf"];
		/*var myIndex = 0;
		carousel();

		function carousel() {
			var i;
			var x = document.getElementsByClassName("mySlides");
			for(i=0; i < x.length; i++) {
				x[i].style.display = "none";
			}
			myIndex++;
			if (myIndex > x.length) {myIndex = 1}
				x[myIndex-1].style.display="block";
				 setTimeout(carousel,2000);
		}*/


	}); 

	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'This is mainController';
	});

	scotchApp.controller('signinController', function($scope) {
		$scope.message = 'This is signinController.';
	});

	scotchApp.controller('selectDoctorController', function($scope) {
		$scope.message = 'This is signupController';
	});

	scotchApp.controller('patientDetailsController', function($scope) {
		$scope.message = 'This is signupController';
	});

	scotchApp.controller('signupController', function($scope) {
		$scope.message = 'This is signinController.';
	});

	scotchApp.controller('doctorProfileController', function($scope) {
		$scope.message = 'This is signupController';
	});
	scotchApp.controller('ContactUsController', function($scope) {
		$scope.message = 'This is ContactUsController';
	});



