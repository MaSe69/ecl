function login() {


    var apppassword = getAppPassword();

    var form = document.getElementById('login-form');
    form.onsubmit = function (e) {
        e.preventDefault();
        var password = form.password.value;
        console.log(password);
        if (password === apppassword) {
            window.location.replace("3da541559918a808c2402bba5012f6c60b27661c/private.html");
        } else {
            window.location.replace("index.html");
        }
    }
}

function getAppPassword() {
    return 'yxcv';
}

function reroute() {
    window.location.replace("3da541559918a808c2402bba5012f6c60b27661c/private");
}

function toProfile() {
    window.location.replace("../3da541559918a808c2402bba5012f6c60b27661c/profile");
}