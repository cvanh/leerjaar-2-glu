<<<<<<< HEAD
import Admin from "../../../styled/admin.styled";
=======
import React from 'react'
import Admin from "../admin.styled";
>>>>>>> 29e50486d9e1fd000d20f886652d90a348e7e7be

function CreateBlog(){
    return(
        <div>
            <h1>create a blog post</h1>

            <Admin.Form method="post" action="/api/admin/createblog">
                <input type="text" placeholder="title" name="title"></input>
                <input type="file" placeholder="file" name="file"></input>
                <input type="text" placeholder="body" name="body"></input>
                <input type="submit"></input>
            </Admin.Form>
        </div>
    )
}

export default CreateBlog;