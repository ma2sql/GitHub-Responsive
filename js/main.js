function initMap() {

    // 위도(Latitude), 경도(Longitude)
    const myLatLng = {
        lat: 37.782293,
        lng: -122.391240
    };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 18
    });

    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'GitHub'
    });
}

(function (window, document) {
    'use strict';
  
    const $toggles = document.querySelectorAll('.toggle'); // Return NodeList
    const $toggleBtn = document.getElementById('toggle-btn'); // Return Element
    
    $toggleBtn.addEventListener('click', function () {
      toggleElements();
    });
  
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1024) {
        offElements();
      }
    });
  
    function toggleElements() {
      [].forEach.call($toggles, function (toggle) {
        toggle.classList.toggle('on');
      });
    }
  
    function offElements() {
      [].forEach.call($toggles, function (toggle) {
        toggle.classList.remove('on');
      });
    }
  })(window, document);