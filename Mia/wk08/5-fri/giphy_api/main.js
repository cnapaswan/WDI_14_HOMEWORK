var currentOffset = 0
var currentSearch = "" 
var previousSearch = "" 

var searchClicked = $('.search').click(function(){
  $seachIpt = $('input').val()
  previousSearch = currentSearch
  currentSearch = $seachIpt

  if (currentSearch === previousSearch) {
    sameSearch()
  } else {
    currentOffset = 0
    diffSearch()
  }
})

function sameSearch(){
  var options = {
    url: "http://api.giphy.com/v1/gifs/search?q=" + currentSearch +"&api_key=S4TXpUCgrF43tOCgjjvL0cII4VICc2yn&offset="+ currentOffset +"&limit=10",
    method: 'get'
  }
  $.ajax(options).done(function(res) {

    for (var i = 0; i < res.data.length; i++){
     $newImg = $('<img>')
     $newImg.attr('src',res.data[i].images.original.url)
     $('.container').append($newImg)
    }
  })
}

function diffSearch(){
  $('.container').empty()
  var options = {
    url: "http://api.giphy.com/v1/gifs/search?q=" + currentSearch +"&api_key=S4TXpUCgrF43tOCgjjvL0cII4VICc2yn&offset="+ currentOffset +"&limit=10",
    method: 'get'
  }
  $.ajax(options).done(function(res) {
    console.log("different search")
    for (var i = 0; i < res.data.length; i++){
     $newImg = $('<img>')
     $newImg.attr('src',res.data[i].images.original.url)
     $('.container').append($newImg)
    }
  })
}

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() == $(document).height()) {
    currentOffset+= 10
    sameSearch()
  }
})

