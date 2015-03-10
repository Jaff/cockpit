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
     
    .controller("Functions", function ($scope) {
    	
        this.title = "Chart 1.2";
        this.table1 = "Table with JSON result from DB - Employees";
        this.table2 = "Table with JSON result from DB - Users";
        this.CharTitle = "Txd vs Rvcd";
        this.CharTitle1 = "Chart Number Two - Radar";
        this.CharTitle2 = "Current file processing status";
        this.CharTitle3 = "Total Km walked";
        this.CharTitle4 = "Chart Number Five - Polar";
        this.updateTime = "09:55:23";

    });
