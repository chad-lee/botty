const FB = require('fb');
const fs = require("fs");
const { fstat } = require('fs');
FB.setAccessToken('EAAOAHEfNftkBAFoY72VZCsC8dDMpcRhjE4C7KYiAjEluizrjHgqqVW2HzHFThZARCv9ZCKDggjz5CKAi02PUMhQgcKUy6Wc8BI9OswKrSZBhVzmCM28sl9SJ7ZCrHcvUMzt0ZCLZB4P1dg4rnuR1KDhMWUM4C4eSfPaBSYLZBwCV0q0VoZCDx9CEd');

const cron = require("node-cron");


// let postContents = 'Who is joe?';
//  FB.api('me/feed', 'post', { message: postContents }, res => {
//      if (!res || res.error) {
//          return console.error(!res ? 'error occurred' : res.error);
//      }
//      console.log(`Post ID: ${res.id}`);
//  });

let imageFile = '\Images\\Dietz_Nuts_Original_grande.jpg';
let postText = "Dietz Nuts";

let data = { source: fs.createReadStream(imageFile),
				caption: postText};

 const task = cron.schedule("*/5 * * * *", () => {	
	FB.api('me/photos', "post", data, res => {
		if (!res || res.error) {
	    	console.log(!res ? "Error occurred" : res.error);
	    	return;
  		}
  		var postID = res.post_id;
  		console.log("Post ID: " + postID);
	});
});