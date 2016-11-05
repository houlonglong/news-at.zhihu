$.fn.template = function(data){
  var template = $(this).html().trim()
  if(typeof data == 'object'){
    for(var key in data){
        template =  template.replace(new RegExp('\\${'+key+'}','g'),data[key])
    }
  }
  return template
}



App.controller('home', function (page) {
  var $container = $(page).find('#js-story-container')
  var $template = $(page).find('#js-story-template')
  $.getJSON('api/4/news/latest', function(data) {
      
      if(data.stories && data.stories.length){

        for(var i=0;i<data.stories.length;i++){
          var telData = {
            image: '/img/proxy?img=' + encodeURIComponent(data.stories[i].images[0]),
            title:data.stories[i].title
          }
          $container.append($template.template(telData))
        }
          
      }
  });
});

App.controller('page2', function (page) {
// put stuff here
});


App.controller('page3', function (page) {
 
});
try {
App.restore();
} catch (err) {
App.load('home');
}
