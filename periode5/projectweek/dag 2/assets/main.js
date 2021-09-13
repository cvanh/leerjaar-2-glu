const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
    const usernamefield = document.getElementById('usernamefield')
    console.log(emailregex.exec(usernamefield))
    if (emailregex.exec(usernamefield) === true) {
        alert('aa')
    }
    const passwordfield = document.getElementById('passwordfield')
    // handle the form data
    console.log(usernamefield.value)

    event.preventDefault();
});