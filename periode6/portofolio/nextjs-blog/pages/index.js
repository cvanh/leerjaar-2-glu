import { container } from "@xstyled/styled-components";
import Header from "../components/header/Header";

function Page() {
  return (
   <>
   {/* <Header/> */}
    <container>
    <div>
      {
        postMessage
      }
    </div>
    </container>
   </>
  )
}
Page.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}


export default Page;
