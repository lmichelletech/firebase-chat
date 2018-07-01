var selectedFile;

function buildSignUpScreen(){
    $('#sign-in-screen').fadeOut("fast", function(){
        
    $('#root').html(SignUpScreen());
    initializeSignUpScreenEventListeners();
    });
}

function SignUpScreen(){
    const container = document.createElement('div');
    container.id = 'sign-up-screen';
    container.classList.add('sign-up-screen');

    container.innerHTML = `
        <div class="direction-container">
            
            <div id="go_back_btn" class="bk-btn"><div class="bk-btn-triangle"></div><div class="bk-btn-bar"></div></div>
        </div>
        
        <div class="logo-container">
            <i class="ion-md-chatbubbles" name="chatbubbles"></i>
        </div>
        <div class="sign-up-inputs-container">
            <div class="sign-up-input-container">
            <div class="sign-up-input-label">Name:</div>
            <div class="sign-up-input-wrapper">
            <input id="username" class="sign-up-input" type="text">
            </div>
        </div>

        <div class="sign-up-inputs-container">
            <div class="sign-up-input-container">
            <div class="sign-up-input-label">Email:</div>
            <div class="sign-up-input-wrapper">
            <input id="email" class="sign-up-input" type="text">
            </div>
        </div>

        <div class="sign-up-inputs-container">
            <div class="sign-up-input-container">
            <div class="sign-up-input-label">Password:</div>
            <div class="sign-up-input-wrapper">
            <input id="password" class="sign-up-input" type="password">
            </div>
        </div>

        <div class="sign-up-inputs-container">
            <div class="sign-up-input-container">
            <div class="sign-up-input-label">Password Confirmation:</div>
            <div class="sign-up-input-wrapper">
            <input id="password_confirmation" class="sign-up-input" type="password">
            </div>
        </div>
        
        <div class="file-inputs-container">
            <div class="file-input-container">
            <div class="file-input-label">Avatar:</div>
            <div class="file-input-wrapper">
                <input id="file" class="upload-group" type="file">
            </div>
        </div>

        
        <div class="icons-container">
            <img id="google_auth" class="icon ion-logo-google" src="images/google.png">
            <img id="facebook_auth" class="icon ion-logo-facebook" src="images/facebook.png">
        </div>

        </div>

        <div class="btn-container">
            <div id="signup_btn" class="btn accent-color-2">SIGN UP</div>
        </div>

        <div class="copyright">&copy; All rights reserved.</div>
    `;

    return container;
}


function initializeSignUpScreenEventListeners(){
    //the below is plain javascript whereas the one we decided to use will use jquery
    //jquery doesn't require the code addEventListener;
    //document.getElementById('google_auth').onClick = googleAuth;
    
    $('#google_auth').on('click', function(){
        createPersistantSession(googleAuth());        
    });
    $('#facebook_auth').on('click', function(){
        createPersistantSession(facebookAuth());        
    });


    $("#upload_btn").hide();
    $('#file').on('change', function(event){
        selectedFile = event.target.files[0];
        
        $("#upload_btn").show();
    });
    
    $('#go_back_btn').on('click', goBack);
    $('#signup_btn').on('click', signUp);

}

