import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types"

const Blogs = ({handleBookmark,handleTime}) => {
    const [blogs,setBlogs] = useState([])

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data.people))
        
    },[])
    return (
        <div className='md:w-2/3'>
            {/* <h3 className="text-center font-bold text-3xl">Blogs : {blogs.length}</h3> */}
            {
                blogs.map(blog =><Blog 
                    key={blog.id} 
                    handleTime={handleTime}
                    handleBookmark={handleBookmark}
                    blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {

    handleBookmark : PropTypes.func,
    handleTime : PropTypes.func
}

export default Blogs;