import PropTypes from "prop-types"
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks,readingTime}) => {

    return (
        <div className="md:w-1/3 mt-4 bg-gray-200 p-4 rounded-xl text-2xl">
            <h4 className="text-center bg-orange-400 p-4 rounded-xl my-3 text-bold">Total Watching time: {readingTime} minutes</h4>
            <h5 className='text-center bg-yellow-300 rounded-xl p-3'>BookMarks : {bookmarks.length}</h5>
            {
                bookmarks.map((bookmark ,idx ) =><Bookmark 
                    key={idx}
                    bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;