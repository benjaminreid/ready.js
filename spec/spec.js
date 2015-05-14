describe('ready.js', function() {

  it('should run your code when a DOM element is present', function() {
    var output = 'bar';
    var selector = '.ready';

    ready(selector, function(el) {
      el.innerHTML = output;
    });

    expect(document.querySelector(selector).innerHTML).toBe(output);
  });

  it('should not run your code when a DOM element does not exist', function() {
    var output = 'foo';
    var addition = 'bar';
    var selector = '.not-here';

    ready(selector, function() {
      output += addition;
    });

    expect('foo').toBe(output);
  });
});
