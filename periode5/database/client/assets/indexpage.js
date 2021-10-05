// please not this currently wont verify the user only so the token is stored in the localstorage and then with every request the token is send as a header


const form = document.getElementById('form')
const login = document.getElementById('login')
const container = document.getElementById('container')

const superuser = document.getElementById('superuser')
const admin = document.getElementById('admin')
const user = document.getElementById('user')

const queryString = window.location.search;
const urlparams = new URLSearchParams(queryString);
const loggedin = urlparams.get('loggedin')

form.addEventListener("submit", () => {
    const t = new FormData('form')
    console.log(t)
})

// // super secure login system
if (loggedin) {
    // user has entered a value, and then make a post with the privlige level
    // TODO make this a post and unfuck this shit
    const UserPrivilege = 0
    switch (UserPrivilege) {
        case 0:
            superuser.style.display = 'block'
            admin.style.display = 'block'
            user.style.display = 'block'
            login.style.display = 'none'
            break;
        case 1:
            superuser.style.display = 'none'
            admin.style.display = 'block'
            user.style.display = 'block'
            login.style.display = 'none'
            break;
        case 2:
            superuser.style.display = 'none'
            admin.style.display = 'none'
            user.style.display = 'block'
            login.style.display = 'none'
            break;
        default:
            console.warn('the privilege does not seem to exist')
    }
} else {
    superuser.style.display = 'none'
            admin.style.display = 'none'
            user.style.display = 'none'
            login.style.display = 'block'
}
    //     container.style.display = 'block'
    //     login.style.display = 'none'
    // } else{
    //     login.style.display = 'block'
    //     container.style.display = 'none'
    // }