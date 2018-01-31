console.log("hey")

$('button').click(function(){
  var search_title = $('input').val()
  var options = {
    url: 'http://www.omdbapi.com/?apikey=2f6435d9&s=' + search_title
  }

  $.ajax(options).done(function(response){

    console.log("response.Search" + response.Search)
    //return movie objects

    response.Search.forEach(function(movie) {

      var $container = $('.container');
      var $newDivElem = $('<div>');
      var $newH2Elem = $('<h2>');
      var $newImgElem = $('<img>');
      var $newLink = $('<a>')
      var imdbPath = "http://www.imdb.com/title/"+ movie.imdbID

      console.log(imdbPath)
      $newH2Elem.text(movie.Title);
      $newImgElem.attr('src', movie.Poster)
      $newLink.attr('href', imdbPath)
      $newLink.append($newH2Elem)
      $newDivElem.append( $newLink);
      $newDivElem.append( $newImgElem );

      $container.append($newDivElem)
    })
  })
})
