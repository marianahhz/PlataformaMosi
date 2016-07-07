(function () {
'use strict';
angular.module('app', ['ngComponentRouter','ui.materialize', 'app.components'])

.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})

.value('$routerRootComponent', 'app')

.component('app', {
  template:
    '<nav-bar ></nav-bar><ng-outlet></ng-outlet>',
  $routeConfig: [
    {path: '/', name: 'Home', component: 'landing',useAsDefault: true},
    {path: '/hola/', name: 'Hola', component: 'hola'}
  ]
});
})();