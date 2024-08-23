$(document).ready( function(){
    const themes = {
        light: {
            stylesheet: "css/themes/light.css",
            icon: "fa-solid fa-sun",
        },
        dark: {
            stylesheet: "css/themes/dark.css",
            icon: "fa-solid fa-moon"
        }
    };

    let currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme)

    $('#theme-switcher').click(function() {
        if (currentTheme === 'light'){
            currentTheme = 'dark';
        } else {
            currentTheme = 'light';
        }

        setTheme(currentTheme);
        localStorage.setItem('theme', currentTheme);
    })

    function setTheme(theme){
        $('#theme-stylesheet').attr('href', themes[theme].stylesheet);
        $('#theme-icon').attr('class', themes[theme].icon)
    }
})