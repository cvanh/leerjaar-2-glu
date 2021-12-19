const axios = require("axios");
require('dotenv').config({ path: './.env' })

class GLU {
  constructor() {
    this.headers = {
      headers: {
        "clienttoken": process.env.clienttoken, // 64 char long
        "user-agent": "dick ma balls", // doesnt matter
        "accesstoken": "cbcf9592-6465-4bba-892c-0650570f916d", // aka X-CSRF-TOKEN
      },
    };
  }

  async GetFrontpageTimetable() {
    const data = await axios.get(
      "https://glu.api.stucomm.com/api/v1/timetable?dashboard=true&end_date=1640559600&limit=2",
      this.headers
    );
    return data.data;
  }

  /**
   * fetches your timetable!
   * @param {int} start_date unix epoch in seconds
   * @param {int} end_date unix epoch in seconds
   * @returns array your timetable
   */
  async GetTimetable(start_date, end_date) {
    const data = await axios.get(
      `https://glu.api.stucomm.com/api/v1/timetable?end_date=${start_date}&start_date=${end_date}`,
      this.headers
    );
    return data.data;
  }

  async GetUserInfo() {
    const data = await axios.get(
      `https://glu.api.stucomm.com/api/v1/user/info`,
      this.headers
    );
    return data.data;
  }

  async GetMessages(){
      const data = await axios.get(
          `https://glu.api.stucomm.com/api/v1/user/notifications?count=10&index=0`,
          this.headers
      )
      return data.data
  }
}

module.exports = GLU

const api = new GLU();

async function start() {
  //   console.log(await api.GetTimetable(1640473199,1638222095));
  console.log(await api.GetUserInfo());
    // console.log(await api.GetMessages())
}
start();
