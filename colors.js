
  var links = {
    setcolor : function (color){

      $('a').css('color', color);
    }
  }
  var body = {
    setColor: function (color) {
      $('body').css('color', color);
    },
    SetBackgroundColor : function(color) {
      $('body').css('blackgroundcolor', color);
    }
}
  function nightdayhandler(self){
      var target = document.querySelector('body');

      if (self.value === 'night'){
        body.SetBackgroundColor('black');
        body.setColor('white');

        self.value = 'day';

        links.setcolor('powderblue');
      }
      else
      {
        body.SetBackgroundColor('white');
        body.setColor('black');
        self.value = 'night';
        links.setcolor('powerblue');

        var alist = document.querySelectorAll('a');
        var i = 0;

      while(i<alist.length){
        alist[i].style.color = 'blue';
        i=i+1;
      }

      }
  }
