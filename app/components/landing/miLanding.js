(function () {
  'use strict';

  angular
    .module('app.components')
    .component('landing', {
            bindings: { $router: '@' },
      templateUrl: 'app/components/landing/landing.html',
      controller: LandingCtrl
    })

.component('hola',{
    template: '<a class="waves-effect waves-light btn">button</a>'
}
)


  function LandingCtrl() {
      var $ctrl = this;

      this.mensaje = "Esqueleto para Angular apps 1.5";
this.$onInit = function () {
}
  }
})();