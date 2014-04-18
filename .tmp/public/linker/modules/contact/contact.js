'use strict';
    angular.module('quantum.contact', [])
    .controller('ContactController',['$scope',function($scope) {
            var myLatlng = new google.maps.LatLng(6.460784,3.418615);
            var myLatlng2=new google.maps.LatLng(6.454385,3.403296);
            var myLatlng3=new google.maps.LatLng(6.598065,3.354457);
            var myLatlng4=new google.maps.LatLng(6.459252,3.249523);
            var mapOptions = {
                zoom: 12,
                scrollwheel: false,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                zoom:10,
                animation: google.maps.Animation.DROP,
                title: 'Quantum Travels HQ!'
            });
            var marker2=new google.maps.Marker({
                position: myLatlng2,
                map: map,
                zoom:10,
                animation: google.maps.Animation.DROP,
                title: 'Sura Branch'
            });
            var marker3=new google.maps.Marker({
                position: myLatlng3,
                map: map,
                zoom:10,
                animation: google.maps.Animation.DROP,
                title: 'Ikeja Branch!'
            });
            var marker4=new google.maps.Marker({
                position: myLatlng4,
                map: map,
                zoom:10,
                animation: google.maps.Animation.DROP,
                title: 'Trade Fair Branch!'
            });


            var contentString = '<div class="info-window-content"><h2>Quantum Travel Group HQ</h2>'+
                '<h3>Corporation Drive</h3>'+
                '<p>Some more details for directions or company informations...</p></div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });
    }]);
