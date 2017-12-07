ymaps.ready(function () {
  var loc = [55.835712, 37.510837],
    z = 16;
  var myMap = new ymaps.Map('map', {
      center: loc,
      zoom: z
    }, {
      searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark(loc, {
      hintContent: '',
      balloonContent: ''
    }, {
      iconLayout: 'default#image',
      // iconImageHref: '/assets/naked_walls/img/map_baloon.png',
      // iconImageSize: [45, 75],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      // iconImageOffset: [-14, -38]
    });
  myMap.behaviors.disable('scrollZoom');

  myMap.geoObjects.add(myPlacemark);

  // отключить перемещение карты на мобильных устройствах
  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };
  if(isMobile.any()){
    myMap.behaviors.disable('drag');
  }

});