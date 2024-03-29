import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([]);

  const handleBookmark = blog =>{
    const newBookMark = [...bookmarks,blog]
    setBookmarks(newBookMark)
    // console.log(blog)
  }
  
  const [readingTime, setReadingTime] = useState(0)

  const handleTime = (id, time) =>{
    const totalTime = readingTime + time;
    setReadingTime(totalTime)
    // setReadingTime(readingTime+time)

    //remove mark as read items
    //console.log('remove item',id);
    const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookMarks)
  }

  return (
    <>
      
      <Header></Header>
      <div className='md:flex'>
        <Blogs 
        handleTime ={handleTime}
        handleBookmark={handleBookmark}></Blogs>
        <Bookmarks 
        bookmarks={bookmarks}
        readingTime={readingTime} ></Bookmarks>
      </div>
      
    </>
  )
}

export default App
