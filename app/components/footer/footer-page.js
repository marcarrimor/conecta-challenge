(function(){
    'use strict'
    
    var footerPage = {
        controller: footerCtrl,
        templateUrl: 'app/components/footer/footer-page.html' 
    };

    function footerCtrl(){
        var asController = this;
 
  };

    angular
      .module('conectaApp')
      .component('footerPage', footerPage); 
})();