(function () {
  'use strict';
  
  function NavBar() {
      this.$onInit = function () {

      }
      
  }
  angular
    .module('app.components')
    .component('navBar', {
      templateUrl: 'app/components/layout/navbar.html',
      controller: NavBar
    });



})();