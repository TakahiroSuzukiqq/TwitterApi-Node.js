require('dotenv').config();

var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});


var params = {screen_name: 'realDonaldTrump'};
// //step2?
// var one_way_followers = [];
//step3
var one_way_following = [];
var users_to_display = [];
//
// #########################################################
// //1. get follower's id
// client.get('followers/ids', params, function(error, users, response) {
//   if (!error) {
//     console.log(users.ids.length);
//   }
// });
// #########################################################
// //2. get friend's id = get twitter api list following nested friends list inside followers id
// client.get('followers/ids', params, function(error, followers_results, response) {
//   if (error)
//     throw error;
//
//   var followers = followers_results.ids;
//
//   client.get('friends/ids', params, function(error, following_results, response) {
//      if (error)
//        throw error;
//
//      var following = following_results.ids;
//
//      //console.log(following_results);  ////to check the list of ids of people who are following me("screen_name")
//
//      following.forEach(function(person){
//        //If someone you follow doesn't follow you
//        if (followers.indexOf(person) === -1) {
//           one_way_followers.push(person);
//         }
//      });
//       //console.log(one_way_followers);  ////to check the list of ids of people who are not following me back("screen_name")
//    });
// });
// #########################################################
//3. GET users/lookup
client.get('followers/ids', params, function(error, followers_results, response) {
  if (error)
    throw error;

  var followers = followers_results.ids;

  client.get('friends/ids', params, function(error, following_results, response) {
     if (error)
       throw error;

     var following = following_results.ids;

     following.forEach(function(person) {
       if (followers.indexOf(person) === -1) {
          one_way_following.push(person);
        }
     });

      // console.log(one_way_following);
       //Only take the first 100 users
       one_way_following = one_way_following.slice(0, 99);

       //Turn array into a string
       var one_way_following_string = one_way_following.join();

       //console.log(one_way_following_string); debug

       client.get('users/lookup', {user_id: one_way_following_string}, function(error, users_results, response){
          // console.log(users_results);
          users_results.forEach(function(user){
            var userObject = {
              name: user.name,
              screen_name: user.screen_name,
              avatar: user.profile_image_url
            };
              users_to_display.push(userObject);
          });
              console.log(users_to_display);
       });
   });
});
// #########################################################
