function signUp(){
    var username = $('#username').val();
    let email = $('#email').val();
    let password = $('#password').val();
    let passwordConfirmation = $('#password_confirmation').val();
    var storage = firebase.storage();
    
    console.log('name ', username);
    console.log('email auth ', email);
    console.log('password auth ', password);
    console.log('confirmation auth ', passwordConfirmation);

    if(!isValidEmail(email)){
        alert('Invalid Email');
    }
    else if(!isValidPassword(password)){
        alert('Invalid Password');
    }
    else if(password !== passwordConfirmation){
        alert('Passwords do not match');
    }
    else{ 

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (result){
            console.log("result ", result);
            var user = firebase.auth().currentUser;
            console.log("user ", user);
            imgURL = uploadFile(user);
            console.log('imgURL >>>>>>>>>>>>>  ', imgURL); 

            // Updates the user attributes:
            user.updateProfile({
                displayName: username
            }).then(function() {
                // Profile updated successfully!
                var displayName = user.displayName;
            }, function(error) {
                // An error happened.
            });

        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Unable to email/password authorize user. " + error);
        });
    }
}

function emailAndPasswordAuth(){
    let email = $('#email').val();
    let password = $('#password').val();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;

        alert("firebase email/password authorization error: " + errorMessage);
    });
}

function uploadFile(user){
    
    // Get file name
    var filename = selectedFile.name;
    // Create file path
    var imgPath = ('images/' + filename + '_' + user.uid);
    // Create fire base storage reference
    var storageRef = firebase.storage().ref(imgPath);
    // Upload file to firebase storage
    var uploadTask = storageRef.put(selectedFile);
    // After upload access the file to grab the download URL
    uploadTask.on('state_changed', function(snapshot){
        var storage = firebase.storage();
        var storageRef = storage.ref();
        var spaceRef = storageRef.child(imgPath);
        imageUrl = spaceRef.getDownloadURL().then((url) => { 
            console.log('URL >>>>>>>>>>>>>  ', url);
            
            user.updateProfile({
                photoURL: url
            }).then(function() {
                var photoURL = user.photoURL;
            }, function(error) {
                // An error happened.
            });

            return url;
        }).catch(function(error) {
        
        });
        
    }, function(error){
        
    });
}