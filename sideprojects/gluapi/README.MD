set up 

# examples 
```
const GLU = require("./index") // import

const api = new GLU() 

async function k() {
    console.log(await api.GetTimetable(1640473199,1638222095)); 
    console.log(await api.GetUserInfo()); 
    console.log(await api.GetMessages());
}
k();

```


the .env
```
clienttoken=
accesstoken=
```