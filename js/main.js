/* Page behaviour: FAQ accordion, Telegram links, phone parallax, language init. */
(function (DM) {
  'use strict';

  /* Single source of truth for the Telegram handle. */
  var TG_HANDLE = 'KDava';

  function initFaq() {
    DM.each('.faq-item', function (item) {
      item.querySelector('.faq-q').addEventListener('click', function () {
        var wasOpen = item.classList.contains('open');
        DM.each('.faq-item', function (other) { other.classList.remove('open'); });
        if (!wasOpen) item.classList.add('open');
      });
    });
  }

  function initTelegramLinks() {
    var url = 'https://t.me/' + TG_HANDLE;
    DM.each('.js-tg', function (link) { link.href = url; });
    DM.each('.cta-handle', function (el) { el.textContent = '@' + TG_HANDLE; });
  }

  function initPhoneParallax() {
    var scene = document.querySelector('.hero');
    var device = document.querySelector('.phone-3d-device');
    if (!scene || !device) return;

    scene.addEventListener('mousemove', function (e) {
      var rect = scene.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      var rotY = -18 + (x / rect.width) * 8;
      var rotX = 12 - (y / rect.height) * 8;
      device.style.transform = 'rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg) rotateZ(3deg)';
    });
    scene.addEventListener('mouseleave', function () {
      device.style.transform = '';
    });
  }

  initFaq();
  initTelegramLinks();
  initPhoneParallax();
  DM.i18n.init();
})(window.DM);
