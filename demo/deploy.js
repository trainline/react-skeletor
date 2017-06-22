const ghpages = require('gh-pages');

ghpages.publish('.', {
  src: [
    'dist',
    'index.html'
  ]
}, function(err) {
  if (err) {
    console.error(err);
  }
});
