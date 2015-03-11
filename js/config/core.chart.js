var char = angular.module('CharModule', [ 'chart.js' ])

.controller('LineCtrl', ['$scope', function($scope) 
     
       {
           
       // the rest
		$scope.options = {
            animationEasing : "easeOutElastic",              /* Set the easing animation (http://easings.net) */
            showTooltips : false
		};
			
			$scope.labels = [ '24-12-2014',  '25-12-2014',  '26-12-2014',  '27-12-2014',  '28-12-2014',  '29-12-2014',  '30-12-2014',  '31-12-2014',  '01-01-2015',  '02-01-2015',  '03-01-2015',  '04-01-2015',  '07-01-2015',  '08-01-2015',  '09-01-2015',  '10-01-2015',  '11-01-2015',  '12-01-2015',  '16-01-2015',  '17-01-2015',  '21-01-2015',  '23-01-2015',  '24-01-2015',  '25-01-2015',  '26-01-2015',  '27-01-2015',  '30-01-2015',  '31-01-2015',  '03-02-2015',  '04-02-2015',  '06-02-2015',  '07-02-2015',  '08-02-2015',  '13-02-2015',  '14-02-2015',  '15-02-2015',  '16-02-2015',  '17-02-2015',  '20-02-2015',  '21-02-2015',  '22-02-2015',  '23-02-2015',  '24-02-2015',  '25-02-2015',  '26-02-2015',  '27-02-2015',  '28-02-2015',  '01-03-2015',  '02-03-2015',  '03-03-2015',  '04-03-2015',  '05-03-2015',  '06-03-2015',  '07-03-2015',  '08-03-2015',  '09-03-2015' ];
			$scope.series = [ 'Total km walked' ];
			$scope.data = [ [ 0, 4, 4.56, 3.61, 5.01, 4.63, 5.35, 9.58, 4.62, 5.84, 4.33, 2.82, 5.9, 6.02, 5.26, 5.07, 7.81, 3.75, 7.62, 6.35, 4.92, 5.39, 5.22, 11.51, 6.57, 5.49, 5.06, 5.7, 4.84, 5.09, 7.8, 7.3, 3.68, 5.09, 9.6, 6.47, 6.39, 4.67, 4.66, 9.93, 5.86, 6.24, 4.73, 4.28, 5.59, 4.18, 4.39, 7.13, 7.29, 4.38, 7.01, 4.58, 4.51, 9.1, 4.59, 5.39 ] ];
			
} ])



.controller('BarCtrl', ['$scope', function($scope) 
    {		
	
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
			

		$scope.labels = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ];
		$scope.series = [ 'Series A', 'Series B' ];
        $scope.data = [ [ 65, 59, 80, 81, 56, 55, 40 ], [ 28, 48, 40, 19, 86, 27, 90 ] ];
        $scope.colours = ['#000000','#008000'] /* This changes the outline of the series. This is both outline and fill */

			
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
			
} ])

// controllers
.controller('SleepChart', [ '$scope', '$http', function($scope, $http ) 
                           
    {

        //initiaize variable for result
        var resultSet = this;
        var data_fin;
        
        
        // make sure the array initialize empty
        resultSet.sleep = [];
        
        // get the JSON employees from DB
        $http.get('http://localhost/chart/cockpit/json/fitness.php')
        .success(function ( data )
        {
        resultSet.sleep = data;
            data_fin = resultSet.sleep.date_range;
        
        $scope.labels = [ data_fin ];
		$scope.series = [ 'Awake', 'Asleep' ];
        $scope.data = [ [ resultSet.sleep.mins_awake ], [ resultSet.sleep.mins_asleep ] ];
        
        })
        .error(function ( msg )
        {
            alert("not loaded");
        })
        
    }]);