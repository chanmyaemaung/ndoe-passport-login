dbPassword = 'mongodb+srv://Your_Username:'+ encodeURIComponent('Your_Password') + '@Your_Server.mongodb.net/test?retryWrites=true';

module.exports = {
    mongoURI: dbPassword
};