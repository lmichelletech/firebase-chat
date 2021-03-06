
function buildSignInScreen(){
    //hide files you are not using right now with jquery hide method
    $('#loading-screen, #sign-up-screen, #chat-screen').fadeOut("fast", function(){
        //mount html first so that event listeners work using jquery html method
        $('#root').html(SignInScreen());
        initializeSignInScreenEventListeners();
    })  
}

function SignInScreen(){
    const container = document.createElement('div');
    container.id = 'sign-in-screen';
    container.classList.add('sign-in-screen');

    container.innerHTML = `
        <div class="logo-container">
            <i class="ion-md-chatbubbles" name="chatbubbles"></i>
        </div>

        <div class="sign-in-inputs-container">
        <div class="sign-in-input-container">
        <div class="sign-in-input-label">Email:</div>
        <div class="sign-in-input-wrapper">
            <input id="email" class="sign-in-input" type="text">
        </div>
        </div>

        <div class="sign-in-inputs-container">
        <div class="sign-in-input-container">
        <div class="sign-in-input-label">Password:</div>
        <div class="sign-in-input-wrapper">
        <input id="password" class="sign-in-input" type="password">
        </div>
        </div>

        <div class="icons-container">
            
            <img id="google_auth" class="icon ion-logo-google" src="images/google.png">
            <img id="facebook_auth" class="icon ion-logo-facebook" src="images/facebook.png">
            
        </div>
        </div>
        
        <div class="btn-container">
            <div id="signup_btn" class="btn accent-color-2">SIGN UP</div>
            <div id="signin_btn" class="btn accent-color-1">SIGN IN</div>
        </div>

        <div class="copyright">&copy; All rights reserved.</div>
    `;

    return container;
}

function initializeSignInScreenEventListeners(){
    $('#google_auth').on('click', function(){
        createPersistantSession(googleAuth());        
    });
    $('#facebook_auth').on('click', function(){
        createPersistantSession(facebookAuth());        
    });

    $('#signin_btn').on('click', function(){
        emailAndPasswordAuth();
    });
    $('#signup_btn').on('click', function(){
        navigate('sign-up-screen');
    });
}

