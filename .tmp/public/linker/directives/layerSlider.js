var slider=angular.module('quantum.directives',[]);
slider.directive('cSlider',function(){
    return{
        restrict:'A',
        link:function(scope,element,attrs){
           // $(element).cslider();
            $(element).layerSlider(scope.$eval(attrs.cSlider));
        }
    };
});

