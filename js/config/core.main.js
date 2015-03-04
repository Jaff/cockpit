
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
    .controller("GetValuesDB", [ '$http', function( $http ) {

    	
        //initiaize variable for result
        var resultSet = this;
        
        // make sure the array initialize empty
        resultSet.employees = [];
        resultSet.users = [];
        
        
        
        
        // get the JSON employees from DB
        $http.get('http://localhost/chart/JSON/employees.php')
        .success(function ( data ) {
        	resultSet.employees = data;
        });
        
        
        // get the JSON users from DB
        $http.get('http://localhost/chart/JSON/users.php')
        .success(function ( data ) {
        	resultSet.users = data;
        });
    }])
    
    
    
    
    .controller("Functions", function ($scope) {
    	
        this.title = "Chart 1.0";
        this.table1 = "Table with JSON result from DB - Employees";
        this.table2 = "Table with JSON result from DB - Users";
        this.CharTitle = "Txd vs Rvcd";
        this.CharTitle1 = "Chart Number Two - Radar";
        this.CharTitle2 = "Current file processing status";
        this.CharTitle3 = "Files processed in last 60 mins";
        this.CharTitle4 = "Chart Number Five - Polar";
        this.updateTime = "09:55:23";

    });
    
