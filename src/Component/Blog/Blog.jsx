import PropTypes from "prop-types"
import { CiBookmark } from "react-icons/ci";


const Blog = ({blog,handleBookmark,handleTime}) => {
    const {id,author,title,hashtags,cover_photo,author_img,short_details,watch_time} = blog;
    //console.log(blog)
    return (
        <div className="border-2 m-4  rounded">
            <img className="rounded w-auto" src={cover_photo} alt="" />
            <div className="p-4">
                <div className="md:flex justify-between items-center">
                    <div className="flex items-center my-2">
                        <img className="w-[60px] h-[60px] rounded-full mr-2" src={author_img} alt="" />
                        <p className="font-bold">{author}</p>
                    </div>
                    <div className="flex items-center">
                        <p>{watch_time} min </p>
                        <button className="ml-2" onClick={() => handleBookmark(blog)}><CiBookmark /></button>
                    </div>
                </div>
                <p className="font-bold text-2xl">{title}</p>
                <p>{short_details}</p>
                <p className="font-bold">{hashtags}</p>
                <button onClick={() =>handleTime(id, watch_time)} className="text-bold text-purple-800 underline">Mark as read</button>
            </div>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func,
    handleTime : PropTypes.number
}

export default Blog;