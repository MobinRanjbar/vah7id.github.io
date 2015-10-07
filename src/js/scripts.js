(function (window, document, undefined) {

  'use strict';

  /**
   * Shuffle
   */
  var shuffleSrc = function (obj) {
    var options = obj || {};
    var selector = document.querySelector(options.selector || '[data-shuffle]');
    var path = options.path || '';
    var src = options.src || [];
    if (selector) {
      selector.src = path + src[Math.floor(Math.random() * src.length)] + '.jpg';
    }
  };

  shuffleSrc({
    selector: '[data-shuffle]',
    path: 'img/shuffle/',
    src: [
      'html5devconf',
      'inteldevconf',
      'cloudplatform',
      'careers',
      'startupweekend',
      'slidesprep',
      'golf',
      'lanzarote',
      'html5hub',
      'waterski',
      'watersurf',
      'phonejs',
      'baybridge',
      'tweeting',
      'londonweb',
      'wifi',
      'southampton-stairs',
      'startup-close'
    ]
  });

  /**
   * BSA
   */
  var bsa = document.createElement('script');
  bsa.async = bsa.src = '//s3.buysellads.com/ac/bsa.js';
  document.body.appendChild(bsa);

  /**
   * CarbonAds
   */
  var carbon = document.createElement('script');
  carbon.async = carbon.src = '//engine.carbonads.com/z/20676/azcarbon_2_1_0_HORIZ';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(carbon, s);

  /**
   * Twitter follow
   */
  (function (d,s,id) {
    var js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)){
      js=d.createElement(s);
      js.id=id;
      js.src='//platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js,fjs);
    }
  })(document,'script','twitter-wjs');

  /**
   * Facebook like
   */
  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = '//connect.facebook.net/en_GB/all.js#xfbml=1&appId=252993844735607';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');

  (function(doc,s) {
    var js, fjs = doc.getElementsByTagName(s)[0];
    var frag = doc.createDocumentFragment();
    var add = function (url, id) {
      if (doc.getElementById(id)) {
        return;
      }
      js = doc.createElement(s);
      js.src = url;
      if (id) {
        js.id = id;
      }
      frag.appendChild(js);
    };
    add('http://connect.facebook.net/en_US/all.js#xfbml=1','facebook-jssdk');
    add('http://platform.twitter.com/widgets.js');
    add('https://apis.google.com/js/plusone.js');
    fjs.parentNode.insertBefore(frag, fjs);
  })(document,'script');

})(this, document);
