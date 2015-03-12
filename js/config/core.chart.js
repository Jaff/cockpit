var char = angular.module('CharModule', [ 'chart.js' ])

.controller('LineCtrl', ['$rootScope', '$scope', function( $rootScope, $scope ){
     
	//var read = this;
	var result = $rootScope;
	
	$scope.employees = [];
    $scope.labels = [ '14:00', '14:05', '14:10', '14:15', '14:20', '14:25', 
                       '14:30', '14:35', '14:40', '14:45', '14:50', '14:55', '15:00' ];
     
     $scope.series = [ 'Series A', 'Series B' ];
     $scope.data = [ 
    	                [ 32, 24, 20, 39, 45, 36, 0, 0, 0, 60, 40, 20, 30, 36 ], 
    	                [ 48, 52, 64, 64, 72, 128, 0, 0, 0, 70, 70, 56, 64, 68 ] 
    				  ];
		
}])


.controller('BarCtrl', ['$rootScope', '$scope', function( $rootScope, $scope) 
    {		
	
		var result = $rootScope;
		$scope.resultSet = [];
		
		// the rest
		$scope.options = {
				scaleShowVerticalLines : false,
                scaleGridLineColor : "rgba(0,0,0,0.2)",
                barStrokeWidth : 1,                             /* Thickness of bar outline */
                barValueSpacing : 3,                            /* Spacing between each set of data */
                barDatasetSpacing : 3,                          /* Spacing between each series bars */
                animationSteps: 120,                            /* How smooth should the animation be in */
                tooltipFillColor: "#2c9c69",                    /* Changes the tooltip BG colour */
                scaleFontSize  : 12,                            /* Font size (used across whole chart) */
                tooltipFontSize : 12,                           /* Font size for tooltip */
                animationEasing : "easeOutElastic"             /* Set the easing animation (http://easings.net) */

		};
			

		$scope.labels = [ /*'2006', '2007', '2008', '2009', '2010', '2011', '2012'*/ ];
		$scope.series = [ 'Series A', 'Series B' ];
        $scope.data = [ [ 65, 59, 80, 81, 56, 55, 40 ], [ 28, 48, 40, 19, 86, 27, 90 ] ];
        $scope.colours = ['#F00000','#008000'] /* This changes the outline of the series. This is both outline and fill */

        
        result.$on('sleep', function(event, data) {
        	
        	$scope.resultSet = data;
        	console.log($scope.resultSet);
        	
        	for(var i = 0; i < $scope.resultSet.length; i++)
        		{
        			//alert( $scope.resultSet[i].date_joined );
        			//$scope.labels = [ $scope.resultSet[i].date_joined ];
	        		angular.forEach($scope.resultSet, function(value, key) {
	            		
	            		 $scope.labels = value.date[key]; //alert(value.date) ;
	            		
	            	});
        		};
        })
        
} ])


.controller('RadarCtrl', ['$scope', function($scope)

    {		
	
		// the rest
		$scope.options = {
            animationEasing : "easeOutElastic",             /* Set the easing animation (http://easings.net) */
		};
			

		$scope.labels = [ '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00' ];
		$scope.series = [ 'Average Ping', 'Total Transfer' ];
		$scope.data = [ [ 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20 ], [ 40, 15, 15, 40, 15, 15, 15, 40, 15, 15, 15, 40, 15, 15 ] ];
        $scope.colours = ['#FFA500','#008000'] /* This changes the outline of the series. This is both outline and fill */

} ])

.controller('PieCtrl', ['$scope', function($scope)

    {		
	
		// the rest
		$scope.options = {
            animationEasing : "easeOutElastic"              /* Set the easing animation (http://easings.net) */
		};
			

		$scope.labels = [ 'Processed', 'Processing', 'Failures' ];
		$scope.data = [ 4128, 1983, 456 ];
        $scope.colours = ['#BDB76B', '#ADFF2F','#FF0000'] /* This changes the outline of the series. This is both outline and fill */
       
			
} ])

.controller('PolarAreaCtrl', ['$scope', function($scope)

    {		
	
		$scope.options = {
            animationEasing : "easeOutElastic"              /* Set the easing animation (http://easings.net) */
		};
			

		$scope.labels = [ '2006', '2007', '2008', '2009', '2010' ];
		$scope.data = [ 65, 59, 80, 81, 56 ];
			
} ]);
} ])

// controllers
.controller('SleepChart', [ '$scope', '$http', function($scope, $http ) 
                           
    {

        //initiaize variable for result
        var resultSet = this;
        
        // make sure the array initialize empty
        resultSet.sleep = [];
        
        // get the JSON employees from DB
        $http.get('http://localhost/chart/cockpit/json/fitness.php')
        .success(function ( data )
        {
        resultSet.sleep = data;
            
        var data_range = [];
            for (var i = 0; i < resultSet.sleep.length; i++) {
            data_range.push(resultSet.sleep[i].date_range);  
            }
            
        var data_awake = [];
            for (var i = 0; i < resultSet.sleep.length; i++) {
            data_awake.push(resultSet.sleep[i].mins_awake);  
            }
            
        var data_asleep = [];
            for (var i = 0; i < resultSet.sleep.length; i++) {
            data_asleep.push(resultSet.sleep[i].mins_asleep);  
            }
        
        $scope.labels = data_range;
		$scope.series = [ 'Awake', 'Asleep' ];
        $scope.data = data_awake , data_asleep;
        
        })
        .error(function ( msg )
        {
            alert("not loaded");
        })
        
    }]);