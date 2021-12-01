function CreateBlog(){
    return(
        <div>
            <h1>create a blog post</h1>

            <form method="post" action="/api/admin/createblog">
                <input type="text" placeholder="kaas" name="kaas"></input>
            </form>
        </div>
    )
}

export default CreateBlog;