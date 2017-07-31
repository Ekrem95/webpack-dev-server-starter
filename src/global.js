require('./style.scss');
console.log('king eko');

if (module.hot) {
  module.hot.accept();
}

if (module.hot) {
  const hotEmitter = require('webpack/hot/emitter');
  const CSS_TIMEOUT = 2000;

  hotEmitter.on('webpackHotUpdate', (currentHash) => {
    document.querySelectorAll('link[href][rel=stylesheet]').forEach(link => {
      const nextStyleHref = link.href.replace(/(\?\d+)?$/, `?${Date.now()}`);

      const newLink = link.cloneNode();
      newLink.href = nextStyleHref;

      link.parentNode.appendChild(newLink);
      setTimeout(() => {
        link.parentNode.removeChild(link);
      }, CSS_TIMEOUT);
    });
  });
}
