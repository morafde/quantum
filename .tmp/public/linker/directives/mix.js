var mix=angular.module('quantum.directives',[]);
mix.directive('cMixit',function(){
   return {
       restrict:'A',
       link:function(scope,element,attrs){
           // $(element).cslider();
           $(element).mixitup(scope.$eval(attrs.cMixit));


            $(element).mixitup('filter',[dimensions.region, dimensions.recreation])
       }
   };
});