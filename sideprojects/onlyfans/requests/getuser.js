/*
https://github.com/DIGITALCRIMINAL/OnlyFans/issues/1119
https://github.com/DATAHOARDERS/dynamic-rules/blob/main/onlyfans.json
https://github.com/DIGITALCRIMINAL/OnlyFans/issues/1078
*/

const axios = require('axios');


const bcTokenSha = "f5644d96593813ace2697be9b2cd92b5296d2571"

var check = (hash) => {
  return Math.abs(
    hash.charCodeAt(15) - 128 +
    hash.charCodeAt(3) + 127 +
    hash.charCodeAt(27) + 141 +
    hash.charCodeAt(38) + 82 +
    hash.charCodeAt(31) - 126 +
    hash.charCodeAt(23) + 93 +
    hash.charCodeAt(4) + 102 +
    hash.charCodeAt(35) - 108 +
    hash.charCodeAt(9) + 71 +
    hash.charCodeAt(25) - 130 +
    hash.charCodeAt(30) + 138 +
    hash.charCodeAt(22) + 86 +
    hash.charCodeAt(10) - 85 +
    hash.charCodeAt(26) + 86 +
    hash.charCodeAt(23) + 89 +
    hash.charCodeAt(19) - 56 +
    hash.charCodeAt(0) + 98 +
    hash.charCodeAt(18) - 109 +
    hash.charCodeAt(27) - 108 +
    hash.charCodeAt(6) + 102 +
    hash.charCodeAt(2) - 97 +
    hash.charCodeAt(33) - 118 +
    hash.charCodeAt(18) - 133 +
    hash.charCodeAt(37) - 120 +
    hash.charCodeAt(0) - 133 +
    hash.charCodeAt(34) - 97 +
    hash.charCodeAt(23) + 107 +
    hash.charCodeAt(38) + 142 +
    hash.charCodeAt(25) + 115 +
    hash.charCodeAt(14) - 115 +
    hash.charCodeAt(23) + 107 +
    hash.charCodeAt(6) - 123
  ).toString(16);
};
console.log(new Date().getTime())
var config = {
  method: 'get',
  url: 'https://onlyfans.com/api2/v2/users/15585607/posts?limit=10&order=publish_date_desc&skip_users=all&skip_users_dups=1&pinned=0&format=infinite',
  headers: { 
    'host': 'onlyfans.com', 
    'connection': 'keep-alive', 
    'user-id': '83096664', 
    'time': '1635192249954', 
    'sec-ch-ua-mobile': '?0', 
    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', 
    'app-token': '33d57ade8c02dbc5a333db99ff9ae26a', 
    'accept': 'application/json, text/plain, */*', 
    'x-bc': '2f593e32e6cc8aa1d10264400427d079d9bed082', 
    'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"', 
    'sign': '1307:9e3182bd7485bcbd5528effa5c3390aacd8a842b:bc8:6176c656', 
    'sec-ch-ua-platform': '"Linux"', 
    'sec-fetch-site': 'same-origin', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-dest': 'empty', 
    'referer': 'https://onlyfans.com/onlyfans', 
    'accept-encoding': 'gzip, deflate, br', 
    'accept-language': 'en-US,en;q=0.9', 
    'cookie': 'csrf=9FXKQpku9fc7979f0a5e714fb7ef66fb2f825470; fp=e2241d978f3d41e27fcad987284946a1; auth_id=83096664; ref_src=https%3A%2F%2Fonlyfans.com%2F; sess=h83g0mp26oaj438j43leu412d5; st=4705a99a9c6b28914d6ab776ac468db072c4a0f2e19f6a33d42e455eac6281d1; sess=h83g0mp26oaj438j43leu412d5', 
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
