    "use strict";

    var main = angular.module("ChartCoreMain", ["CharModule"])
    
    
    // Creates a factory for broadcasting controllers throught the application
    // Called sharedService
    .factory('mySharedService', function() {
    	var sharedService = {};
    	sharedService.message = '';
    	
    	sharedService.prepForBroadcast = function (msg) {		
    		this.message = msg;
    		this.broadcastItem();
		}; 	
		
		sharedService.broadcastItem = function() {
			$rootScope.$broadcast('handleBroadcast');
		};
		
		return sharedService;
    })
    // controllers
    .controller("GetValuesDB", ['$rootScope','$http', function( $rootScope, $http ) {

    	
        //initiaize variable for result
        var resultSet = this;
        var root = $rootScope;
        /*
        root.$on('employees', function(){
        	console.log('employees');
        });
        */
       
        
        // make sure the array initialize empty
        resultSet.employees = [];
        resultSet.users = [];
        resultSet.sleep = [];
        
        // get the JSON employees from DB
        //
        // $http.get('http://localhost:8083/chart/json/employees.php')
        //
        $http.get('http://localhost/chart/cockpit/json/employees.php')
        .success(function ( data ) {
          	resultSet.employees = data;
          	//root.$emit('employees', resultSet.employees);
          	root.$broadcast('employees', resultSet.employees);
        });
        
        
        // get the JSON users from DB
        //
        // $http.get('http://localhost:8083/chart/json/users.php')
        //
        $http.get('http://localhost/chart/cockpit/json/users.php')
        .success(function ( data ) {
        	resultSet.users = data;
        });
        
        
        // get JSON sleep from db
        //
        // $http.get('http://localhost:8083/chart/json/sleep.php')
        //
        $http.get('http://localhost/chart/cockpit/json/sleep.php')
        .success(function (data ) {
        	resultSet.sleep = data;
        	root.$broadcast('sleep', resultSet.sleep);
        });
    }])
    .controller("Functions", function ($scope) {
    	
        this.title = "Chart 1.2";
        this.table1 = "Table with JSON result from DB - Employees";
        this.table2 = "Table with JSON result from DB - Users";
        this.CharTitle = "Txd vs Rvcd";
        this.CharTitle1 = "Chart Number Two - Radar";
        this.CharTitle2 = "Current file processing status";
        this.CharTitle3 = "Total Km walked";
        this.CharTitle4 = "Chart Number Five - Polar";
        this.updateTime = Date.now();

    });
