/* Original-screen viewer: anchor links remain functional without JavaScript. */
(function () {
  function ready() {
    var links = document.querySelectorAll('.screen-zoom');
    if (!links.length || !window.HTMLDialogElement) return;
    var dialog = document.createElement('dialog');
    dialog.className = 'screen-dialog';
    dialog.setAttribute('aria-labelledby', 'screen-dialog-title');
    dialog.innerHTML = '<div class="screen-dialog-bar"><p id="screen-dialog-title"></p><button type="button" aria-label="Close screen preview">×</button></div><img alt="">';
    document.body.appendChild(dialog);
    var title = dialog.querySelector('p'), image = dialog.querySelector('img'), origin;
    links.forEach(function (link) {
      link.addEventListener('click', function (event) {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        origin = link;
        var source = link.querySelector('img');
        title.textContent = source.alt;
        image.alt = source.alt;
        image.src = link.href;
        dialog.dataset.mobile = Number(source.getAttribute('width')) <= 600 ? 'true' : 'false';
        dialog.showModal();
        dialog.scrollTop = 0;
      });
    });
    dialog.querySelector('button').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (event) { if (event.target === dialog) { var rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
    dialog.addEventListener('close', function () { if (origin) origin.focus(); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready); else ready();
})();
