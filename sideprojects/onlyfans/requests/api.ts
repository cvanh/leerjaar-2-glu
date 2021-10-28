import axios from 'axios';
// { 
        //     'host': 'onlyfans.com', 
        //     'connection': 'keep-alive', 
        //     'user-id': '83096664', 
        //     'time': '1635192249954', 
        //     'sec-ch-ua-mobile': '?0', 
        //     'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36', 
        //     'app-token': '33d57ade8c02dbc5a333db99ff9ae26a', 
        //     'accept': 'application/json, text/plain, */*', 
        //     'x-bc': '2f593e32e6cc8aa1d10264400427d079d9bed082', 
        //     'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"', 
        //     'sign': '1307:9e3182bd7485bcbd5528effa5c3390aacd8a842b:bc8:6176c656', 
        //     'sec-ch-ua-platform': '"Linux"', 
        //     'sec-fetch-site': 'same-origin', 
        //     'sec-fetch-mode': 'cors', 
        //     'sec-fetch-dest': 'empty', 
        //     'referer': 'https://onlyfans.com/onlyfans', 
        //     'accept-encoding': 'gzip, deflate, br', 
        //     'accept-language': 'en-US,en;q=0.9', 
        //     'cookie': 'csrf=9FXKQpku9fc7979f0a5e714fb7ef66fb2f825470; fp=e2241d978f3d41e27fcad987284946a1; auth_id=83096664; ref_src=https%3A%2F%2Fonlyfans.com%2F; sess=h83g0mp26oaj438j43leu412d5; st=4705a99a9c6b28914d6ab776ac468db072c4a0f2e19f6a33d42e455eac6281d1; sess=h83g0mp26oaj438j43leu412d5', 
        //   }

class OnlyFansAPI {
    RequestHeader;
    constructor(
        RequestHeader:any
        App_Token:string
        ){
        this.RequestHeader = {
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
    }
    
    // async getMembers(guild_id) {
    //     const res = await axios.get(
    //       `https://discordapp.com/api/v6/guilds/${guild_id}/members?limit=1000`
    //     );
    //     return res.data;
    //   }
    /**
     * GetUserFeed
     */
    public async GetUserFeed() {
        return await 
        axios.get(`
        https://onlyfans.com/api2/v2/users/15585607/posts?limit=10&order=publish_date_desc&skip_users=all&skip_users_dups=1&pinned=0&format=infinite`)
    }
}

const OF = new OnlyFansAPI('maaktnietuit')
const t = OF.GetUserFeed()
console.log(t)