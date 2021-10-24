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
const config = {
  method: 'get',
  url: 'https://onlyfans.com/api2/v2/posts?limit=10&offset=0&skip_users_dups=1&format=infinite',
  headers: { 
    'app-token': '33d57ade8c02dbc5a333db99ff9ae26a', 
    'Referer': 'https://onlyfans.com/', 
    'sign': `1292:${bcTokenSha}:${check(bcTokenSha)}:61747246`, 
    'x-bc': 'f5644d96593813ace2697be9b2cd92b5296d2571', 
    'user-id': '83096664', 
    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:93.0) Gecko/20100101 Firefox/93.0', 
    'auth_id': '83096664', 
    'Accept': 'application/json', 
    'Cookie': 'csrf=XXn6wp6I9545437a6f946edf9765bf41faf42d1b; fp=126d0e189b5b33e6d2433396b1ad5d35; ref_src=https%3A%2F%2Faccounts.google.com%2F; auth_id=83096664; st=730878b872d1f53f3ee30973e45aa0219456204ee3c2f82d0c733deead32d5b0; sess=kqgmv520i469hrmpkgn9eqimub',
    'time': `${new Date().getTime()}`
  }
};

axios(config)
.then(function (response) {
  console.log(response);
  console.log(response.body);
})
.catch(function (error) {
  console.log(error);
});
