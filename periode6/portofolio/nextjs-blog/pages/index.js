<<<<<<< HEAD
// function Page({ stars }) {
//   return <div>Next stars: {stars}</div>
// }

// Page.getInitialProps = async (ctx) => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const json = await res.json()
//   return { stars: json.stargazers_count }
// }

import { useRouter } from "next/router";
import Home from "../components/Home";
import Test from "../components/Test";
=======
import React from 'react'
function Page({ stars }) {
  return <div>
    <div>Next stars: {stars}</div>
    <a href="/admin/createblog">kaas</a>
  </div>
}
>>>>>>> 29e50486d9e1fd000d20f886652d90a348e7e7be

function Page({ uri, page, error, cookies, preview  }) {
  const getPageBasedOnTemplate = (template) => {
  switch (page) {
    case "test":
      return <Test  />;
    case "home":
      return <Home />;
    default:
      return <Home />;
  }
  }
  return getPageBasedOnTemplate(page?.pageTemplate);
}

export default Page;
