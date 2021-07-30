fetch("https://flask-blog-post-backend.herokuapp.com/get-blogs/")
.then(response => response.json())
.then(data => console.log(data))
