/* Shared DOM / storage helpers used by every script on the page. */
window.DM = window.DM || {};

(function (DM) {
  'use strict';

  /* Calls fn for each element matching selector (inside root, document by default). */
  DM.each = function (selector, fn, root) {
    var nodes = (root || document).querySelectorAll(selector);
    Array.prototype.forEach.call(nodes, fn);
    return nodes;
  };

  /* Binds an event handler on every element matching selector. */
  DM.on = function (selector, event, handler, root) {
    return DM.each(selector, function (el) {
      el.addEventListener(event, handler);
    }, root);
  };

  /* Adds className to matching elements when predicate returns true, removes it otherwise. */
  DM.setClass = function (selector, className, predicate, root) {
    return DM.each(selector, function (el) {
      el.classList.toggle(className, !!predicate(el));
    }, root);
  };

  /* Writes a translated value, keeping markup support for strings containing tags. */
  DM.setContent = function (el, value) {
    if (value.indexOf('<') !== -1) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  };

  /* localStorage access that never throws (private mode, disabled storage). */
  DM.storage = {
    get: function (key, fallback) {
      try {
        return localStorage.getItem(key) || fallback;
      } catch (e) {
        return fallback;
      }
    },
    set: function (key, value) {
      try {
        localStorage.setItem(key, value);
      } catch (e) {}
    }
  };
})(window.DM);
