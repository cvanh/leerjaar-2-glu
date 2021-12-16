import React from 'react'
import DatabaseQuery from "../../../utils/database"

export default function handler(req, res) {
  const data = JSON.stringify(req.body)
  console.log(data)
  DatabaseQuery(`
  SELECT * FROM posts
  `)



  res.status(200).send(`<a href="${req.headers.referer}">go back</a>`)
  }