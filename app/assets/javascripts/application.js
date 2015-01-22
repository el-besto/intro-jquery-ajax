// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


////////////////////
// exercise part 1: 
//// Iterate throught all the restaurants and append them to the body
// $(function () {
//   var $body = $("body");
//   $.get("/restaurants.json")
//     .done(function (restaurants) {
//       restaurants.forEach(function (restaurant) {
//         $body.append('<div>' + restaurant.name + '</div>');
//       });
//     });
// });
////////////////////


////////////////////
// exercise part 2: 
//// Add an div with id of restaurants-conatiner to restaurants/index.html.erb.
//// Append all the elements to that div instead.
$(function () {
  var $container = $("#restaurants-container");
  $.get("/restaurants.json")
    .done(function (restaurants) {
      restaurants.forEach(function (restaurant) {
        $container.append("<div>" + restaurant.name + "</div>");
      });
    });

});

////////////////////

var restaurantQuery = function (q){
  return $.ajax({
    url: '/restaurants.json',
    data: {s: q},
    dataType: 'json',
  }).promise();
};

// var processData = function (result){
//   var $div = $('<div/>');
//   $.each(result, function (i,e){
//     $div.append($('<p/>')).html(e.Name);
//   });
//   $('#restaurants-container').html($.div);
// }


// $(document).ready(function(){
//   var $restaurantsContainer = $('#restaurants-container');
//   $.get('/restaurants.json')
//   .done(function(restaurants){
//     restaurants.forEach(function(restaurant){
//       $restaurantContainer.append("<div>" + restaurant.name + "</div>");
//     });
//   });



  // // run initial ajax script
  // $.get('/restaurants.json')
  // // wait for it to finish
  //  .done(function (result){
  //   console.log(result);

  //   var $div = $('<div/>');
  //   $.each(result, function (i,e){
  //     $div.append($('<p/>')).html(e.name);
  //   });
  //   $('#restaurants-container').html($.div);
  //  });


  // // on form submission, run the query
  // $('#queryForm').submit(function(event){
  //   // first prevent the page from reloading
  //   event.preventDefault();

  //   // Now setup and run the query
  //   var query = $('#query').val();
  //   if (query !== ""){
  //     console.log("query is valid.");
  //     restaurantQuery(query).done(processData);
  //   } else {
  //     console.log("bad query");
  //   }
  // });

// });