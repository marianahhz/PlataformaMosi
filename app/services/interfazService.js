(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('interfazService',  interfazService);
  interfazService.$inject = [];
    

    function interfazService() {
        var service = {
          set : set,
          get : get
        };

        return service;
      
      function set(k,v) {
        service[k] = v;
      }
      
      function get(k) {
        return service[k];
      }

    }
})();