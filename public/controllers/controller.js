function AppCtrl($scope,$http) {
	console.log("Hello World from controller"); 

$http.get('/contactlist')

	person1 ={
		name: 'Tim',
		email:'tim@gmail.com',
		number:'1111'
	};
	person2 ={
		name: 'Timy',
		email:'timy@gmail.com',
		number:'11112'
	};
	person3 ={
		name: 'Timo',
		email:'timo@gmail.com',
		number:'11113'
	};
	var contactlist = [person1,person2,person3];
	$scope.contactlist=contactlist;


}