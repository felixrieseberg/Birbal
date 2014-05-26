module.exports = {

    'facebookAuth' : {
		'clientID' 		: '649859611754769', // your App ID
		'clientSecret' 	: 'b173513fd71455e45e765693ac9a59ef', // your App Secret
		'callbackURL' 	: 'http://localhost:3000/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'XbiRyiNfe3fowlkmGE43w9uk0',
		'consumerSecret' 	: 'iHj5jeTSZeO9rJXDJBynmLp4ZqbceNQdxB1Vv3E0qeJH5pkwHx',
		'callbackURL' 		: 'http://localhost:3000/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '596875528080-p8fjjd3vqea09born4tj0psaf7q67n4l.apps.googleusercontent.com',
		'clientSecret' 	: '4U_3YHxQnUlgkVse2GtaXrP6',
		'callbackURL' 	: 'http://localhost:3000/auth/google/callback',
        'scope'         : ['openid', 'email', 'https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/userinfo.email']
	}

};