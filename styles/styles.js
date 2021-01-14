const $html = document.querySelector("html");

function themeLoaded(){
    if(localStorage.dark){
        $html.classList.add('dark-mode');
    }
}
function themeChange(){
    if(localStorage.dark){
        $html.classList.toggle('dark-mode');
        localStorage.removeItem('dark');
    }
    else{
        $html.classList.toggle('dark-mode');
        localStorage.setItem('dark', 'true');
    }
}