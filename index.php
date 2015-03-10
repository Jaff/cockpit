<!doctype html>
<html lang="en" ng-app="ChartCoreMain">
<head>
  
    <meta charset="utf-8">
    <link type="text/css" href="css/angular/chart.css" rel="stylesheet" />
    <link type="text/css" href="css/angular/angular.min.css" rel="stylesheet" />
    <link type="text/css" href="css/angular/angular-chart.css" rel="stylesheet" />
    <script type="text/javascript" src="js/require.js"></script>
    
    
    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.css" rel="stylesheet">
  
    <!-- Custom styles for this template -->
    <link href="css/navbar-fixed-top.css" rel="stylesheet">
    
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script>
    <script src="js/respond.min.js"></script>
    <![endif]-->
    
    <!-- Bootstrap core JS -->
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>

    <title>System Dashbord Concept</title>
    
</head>
    
<body ng-controller="Functions as genvar">  
    
  <!-- Fixed navbar -->
  <div class="navbar navbar-default navbar-fixed-top navbar">
   <div class="container">
    <div class="navbar-header">
     <a class="navbar-brand" href="#" >{{ genvar.title }}</a>
    </div>
    <div class="navbar-collapse collapse">
     <ul class="nav navbar-nav">
      <li class="dropdown">
       <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-stats"></span> Charts<b class="caret"></b></a>
       <ul class="dropdown-menu">
        <li><a href="#bar">Bar Chart</a></li>
        <li><a href="#bar">Bar Chart</a></li>
        <li><a href="#bar">Bar Chart</a></li>
        <li><a href="#bar">Bar Chart</a></li>
        <li><a href="#bar">Bar Chart</a></li>
        <li><a href="#bar">Bar Chart</a></li>
        </ul>
      </li>
     </ul>
    </div>
    <!--/.nav-collapse -->
   </div>
  </div>
<!-- Fixed navbar -->

    <div class="container"> <!-- Use container-fluid for full width responsive -->
        
        <!-- Main header and notifcations -->
        
        <div class="bs-component">
            <div class="alert alert-dismissible alert-danger">
            <button class="close" data-dismiss="alert" type="button">×</button>
            <strong>Important!</strong>
            <p>We are currently aware of an issue with system x and are working to resolve it.</p>
            <p>Last update: {{genvar.updateTime}}</p>
            </div>
        </div>
        
        <div class="bs-component">
            <div class="panel panel-success">
   	            <div class="panel-heading">
                    <h3 class="panel-title">
                        <span class="glyphicon glyphicon-stats"></span> System Dashboard
                    </h3>
                    </div>
   	                <div class="panel-body">
                        <p>Note: These charts are generated in realt time blah blah blah etc. etc.</p>
                        <p>All work and no play make jack a dull boy...</p>
   	                </div>
            </div>
        </div>
        
        <!-- Rows of charts -->
        <div class="row">
                    
        <!-- Chart Presentation -->
        <div class="col-md-4" id="bar-chart" ng-controller="BarCtrl">
 			<div class="bs-component">
                <div class="panel panel-default">
                
                 <div class="panel-heading">
				 <h3 class="panel-title">{{genvar.CharTitle}}</h3>
			     </div>
				
                <div class="panel-body">
                <p>Last update: {{genvar.updateTime}}</p>
						<div>
							<canvas id="bar" class="chart chart-bar"
							data="data"
					 		labels="labels"
                            series="series"
                            legend="true" 
                            options="options"
                            colours="colours">
					 		</canvas>
						</div>
				</div>
                </div>
           </div>
        </div>
        <!-- Chart Presentation --> 
        
        <!-- Chart Presentation -->
        <div class="col-md-4" id="radar-chart" ng-controller="RadarCtrl">
 			<div class="bs-component">
                <div class="panel panel-default">
                
                 <div class="panel-heading">
				 <h3 class="panel-title">{{genvar.CharTitle1}}</h3>
			     </div>
				
                <div class="panel-body">
                <p>Last update: {{genvar.updateTime}}</p>
						<div>
							<canvas id="radar" class="chart chart-radar"
							data="data"
					 		labels="labels"
                            series="series"
                            legend="true" 
                            options="options"
                            colours="colours">
					 		</canvas>
						</div>
				</div>
                </div>
           </div>
        </div>
        <!-- Chart Presentation --> 
            
        <!-- Chart Presentation -->
        <div class="col-md-4" id="pie-chart" ng-controller="PieCtrl">
 			<div class="bs-component">
                <div class="panel panel-danger">
                
                 <div class="panel-heading">
				 <h3 class="panel-title">{{genvar.CharTitle2}}</h3>
			     </div>
				
                <div class="panel-body">
                <p>Last update: {{genvar.updateTime}}</p>
						<div>
							<canvas id="pie" class="chart chart-pie"
							data="data"
					 		labels="labels"
                            series="series"
                            legend="true" 
                            options="options"
                            colours="colours">
					 		</canvas>
						</div>
				</div>
                </div>
           </div>
        </div>
        <!-- Chart Presentation -->  

        </div> 
        <!-- Rows of charts -->

        <!-- Rows of charts -->
        <div class="row">
        
        <!-- Chart Presentation -->
        <div class="col-md-12" id="line-chart" ng-controller="LineCtrl">
 			<div class="bs-component">
                <div class="panel panel-default">
                
                 <div class="panel-heading">
				 <h3 class="panel-title">{{genvar.CharTitle3}}</h3>
			     </div>
				
                <div class="panel-body">
                <p>Last update: {{genvar.updateTime}}</p>
						<div>
							<canvas id="pie" class="chart chart-line" 
							data="data"
					 		labels="labels"
                            series="series"
                            legend="true" 
                            options="options">
					 		</canvas>
						</div>
				</div>
                </div>
           </div>
        </div>

        <!-- Chart Presentation -->  
            
        <!-- Chart Presentation -->
        <div class="col-md-6" id="polar-area-chart" ng-controller="PolarAreaCtrl">
 			<div class="bs-component">
                <div class="panel panel-default">
                
                 <div class="panel-heading">
				 <h3 class="panel-title">{{genvar.CharTitle4}}</h3>
			     </div>
				
                <div class="panel-body">
                <p>Last update: {{genvar.updateTime}}</p>
						<div>
							<canvas id="polar" class="chart chart-polar-area" 
							data="data"
					 		labels="labels"
                            series="series"
                            legend="true" 
                            options="options">
					 		</canvas>
						</div>
				</div>
                </div>
           </div>
        </div>
        <!-- Chart Presentation -->
        
        <!-- Chart Presentation -->
        <div class="col-md-6" id="line-chart" ng-controller="SleepChart as results">
 			<div class="bs-component">
                <div class="panel panel-default">
                
                 <div class="panel-heading">
				 <h3 class="panel-title">Sleep Data</h3>
			     </div>
				
                <div class="panel-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th>Date</th>
                            <th>Mins Sleep</th>
                            <th>Mins awake</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr ng-repeat="item in results.sleep">
                            <td>{{item.date}}</td>
                            <td>{{item.mins_asleep}}</td>
                            <td>{{item.mins_awake}}</td>
                            </tr>
                        </tbody>
                    </table>
				</div>
                </div>
           </div>
        </div>

        <!-- Chart Presentation -->
            
        <!-- Chart Presentation -->
        <div class="col-md-12" id="line-chart2" ng-controller="SleepChart">
 			<div class="bs-component">
                <div class="panel panel-default">
                
                 <div class="panel-heading">
				 <h3 class="panel-title">{{genvar.CharTitle3}}</h3>
			     </div>
				
                <div class="panel-body">
                		<div>
							<canvas id="line-chart2" class="chart chart-line" 
							data="data"
					 		labels="labels"
                            series="series"
                            legend="true">
					 		</canvas>
						</div>
				</div>
                </div>
           </div>
        </div>

        <!-- Chart Presentation -->  
        
        <!-- Rows of charts -->
        </div>
        
    <!-- End of container -->
    </div>
    
    
    <!-- Scripts that will be loaded after DOM has been loaded -->
    <script type="text/javascript" src="js/angular.min.js"></script>
	<script type="text/javascript" src="js/chart/chart.js"></script>
    <script type="text/javascript" src="js/chart/angular-chart.js"></script>
    <script type="text/javascript" src="js/config/core.main.js"></script>
    <script type="text/javascript" src="js/config/core.chart.js"></script>
</body>
</html>