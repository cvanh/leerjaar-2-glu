import DatabaseQuery from "../../../utils/database"

export default function handler(req, res) {
  const data = JSON.stringify(req.body)
  console.log(data)
  DatabaseQuery(`
  INSERT INTO posts (id, title, date, body) VALUES (NULL, '${req.body.title}', '${new Date()}', '${req.body.body}');
  `)



  res.status(200).send(`<a href="${req.headers.referer}">go back</a>`)
  }