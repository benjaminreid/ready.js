(function() {

  // when an element with class="post" is in the DOM, our callback is called
  ready('.post', function(post) {
    post.innerHTML += " was invoked with ready.js";
  });

})();
