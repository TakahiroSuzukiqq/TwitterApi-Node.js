# Twitter API for CFA-DonaldBoard-Hackathon  
  This is a test API for donaldboard  
  https://github.com/AR8Stefan/CFA-Hackathon-Dashboard  

# Installation  
````
npm install twitter  
````
* twitter dev : https://dev.twitter.com/  

* npm twitter :  https://www.npmjs.com/package/twitter  

  0. Create twitter account and get each key (API, API secret, Access Token, Access Token secret)  
  1. Install npm twitter and setup index.js with following the instruction.  
  2. Test on the Terminal whether index.js setup properly with "node index.js"  
  3. Check documents which you want to get information from.  
     e.g. : follower list :  https://dev.twitter.com/rest/reference/get/followers/ids  
            (Results are given in groups of 5,000 user IDs and multiple “pages” of results can be navigated through using the next_cursor value in subsequent requests.)  
  4. Test on the Terminal with "node ."  
     e.g. :  
     ````  
     var params = {screen_name: 'name or whatever'};
        //get follower's id
     client.get('followers/ids', params, function(error, users, response) {
       if (!error) {
         console.log(users);  
         // or console.log(users.ids.length);
       }
     });
     ````  
  5. Install epxress with "npm install express --save".  
  6. Create other file and move code from index.js file.  
  7. To activate Express, call Express and setup server as http://localhost:3000.  
  8. Install ejs view engine with "npm install ejs --save".  
  9. Create view folder and index.ejs file, inside the file, just setup top page of the browser.  
  10. Install "body-parser" with "npm install body-parser --save" as a one of middleware and setup in index.js file.  
       reference: https://expressjs.com/en/guide/using-middleware.html , https://www.npmjs.com/package/body-parser   
  11. Setup post action in index.js file, and also setup exporting user-list.js and store all of function into export module.    
  12. Inside module export in user-list.js, to get userinput just change screen_name as screen_name  
  13. Create "list.ejs" inside vievs folder
  6. To hide your keys use ".env" file with following reference.  
     https://github.com/motdotla/dotenv  
