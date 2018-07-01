window.visited = [];

//props is user and anything else you want to pass
function navigate(screen, props){

    console.log(screen, window);

    if(screen === 'sign-up-screen'){
        window.visited.push(screen);
        console.log(screen + " -------->>");
        return buildSignUpScreen();
    }

    if(screen === 'chat-screen' && window.user){
        window.visited.push(screen);
        console.log(screen + " >>>>>");
        
        return buildChatScreen(props);
    }

    window.visited.push('sign-in-screen');
    return buildSignInScreen();
    
}

function goBack() {
    let screen = window.visited.pop();
    // console.log(screen + " -------->>>>>");
    navigate(window.visited[window.visited.length - 1]);
    return screen;
}