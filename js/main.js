document.addEventListener("DOMContentLoaded", function () {
      var x = new Silence(10);
      x.elem.controls = true;
      x.elem.id = 'silence';
      document.body.appendChild(x.elem);
      var pop = Popcorn('#silence').code({
            start: 2,
            end: 3,
            onStart: function (options) {
                  console.log('start at 2')
            },
            onEnd: function (options) {
                  console.log('end at 3')
            }
      })
      pop.play();
})