import React from 'react'
function Page({ stars }) {
  return <div>
    <div>Next stars: {stars}</div>
    <a href="/admin/createblog">kaas</a>
  </div>
}

Page.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Page