/**
 * PcOptimizer — Pages helper (UI only).
 * Keyword: pc optimizer
 */
(function (global) {
  'use strict';

  var Product = {
    name: 'PcOptimizer',
    keyword: 'pc optimizer',
    channel: 'github-pages'
  };

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  function bindDownload(btn, url) {
    if (!btn || !url) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = url;
    });
  }

  global.PcOptimizerUI = { Product: Product, ready: ready, bindDownload: bindDownload };
})(typeof window !== 'undefined' ? window : globalThis);
