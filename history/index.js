function goBack(){
    history.back();
}

function goForward(){
    history.forward();
}

function modifyHistory(){
    history.pushState({},"Contact",`contact.html`);
}