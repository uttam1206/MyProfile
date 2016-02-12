
/*** Routing using ui-router ***/
var baseMode = angular.module('baseCode',['ui.router']);

baseMode.run(function($animate) {
  $animate.enabled(true);
});

baseMode.config(function($stateProvider,$urlRouterProvider) {
  	$urlRouterProvider.otherwise("/dashboad");
    $stateProvider
    .state('dashboad', {
      url: "",
      views: {

            // the main template will be placed here (relatively named)
            '': { templateUrl: 'partials/home.html' },

            // Child view Left Container
            'leftContainer@dashboad': { 
             templateUrl: 'partials/leftContainer.html'
            },

            // Child view Right Container 
            'rightContainer@dashboad': { 
                templateUrl: 'partials/rightContainer.html',
                controller:'rightCtrl'
            },

            // Child view Footer 
            'footer@dashboad': { 
                templateUrl: 'partials/footer.html'
            }
        }
    });
  });


