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
