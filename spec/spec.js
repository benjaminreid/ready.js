describe('ready.js', function() {

  it('runs your code when a dom element is in the DOM', function() {
    var output = 'bar';
    var selector = '.ready';

    ready(selector, function(el) {
      el.innerHTML = output;
    });

    expect(document.querySelector(selector).innerHTML).toBe(output);
  });
});
