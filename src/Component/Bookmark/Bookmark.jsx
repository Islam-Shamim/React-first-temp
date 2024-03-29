import PropTypes from 'prop-types' 
const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div>
            <h5 className='text-xl p-4 my-4 bg-red-200 rounded-xl text-center'>{title}</h5>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark : PropTypes.object
}
export default Bookmark;