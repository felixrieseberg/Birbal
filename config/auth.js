module.exports = {

    'facebookAuth' : {
		'clientID' 		: 'your-secret-clientID-here', // your App ID
		'clientSecret' 	: 'your-client-secret-here', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'your-consumer-key-here',
		'consumerSecret' 	: 'your-client-secret-here',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '596875528080-p8fjjd3vqea09born4tj0psaf7q67n4l.apps.googleusercontent.com',
		'clientSecret' 	: '4U_3YHxQnUlgkVse2GtaXrP6',
		'callbackURL' 	: 'http://localhost:3000/auth/google/callback',
        'scope'         : ['openid', 'email', 'https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/userinfo.email']
	}

};