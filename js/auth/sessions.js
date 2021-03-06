function createPersistantSession(authenticate = () => console.log('no callback passes to persistant session')) {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(authenticate)
        .catch(function (error) {
            //Handle errors
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('hello error: ', errorMessage);
        });
}

function signOut() {
    firebase.auth().signOut().then(function () {
        console.log('Signed Out');
    }, function (error) {
        console.error('Sign Out Error', error);
    });
}


function session() {
    firebase.auth().onAuthStateChanged(function (user) {
        console.log('creating session for user ');
        if (user) {
            window.user = user;
            navigate('chat-screen', user);

        }
        else {
            navigate('sign-in-screen');
        }
    });
}