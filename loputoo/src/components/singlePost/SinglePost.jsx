import "./singlePost.css"

function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://upload.wikimedia.org/wikipedia/commons/a/a2/1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg" alt="" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit, amet
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>

                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Jaanika</b></span>
                    <span className="singlePostDate"> 1 hour ago </span>
                </div>
                <p className="singlePostDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi voluptatem blanditiis adipisci deserunt ea nulla, fugiat saepe repellat alias
                    aperiam sint at ipsum tempore fugit facere aliquid? Quisquam, excepturi eligendi?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi voluptatem blanditiis adipisci deserunt ea nulla, fugiat saepe repellat alias
                    aperiam sint at ipsum tempore fugit facere aliquid? Quisquam, excepturi eligendi?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi voluptatem blanditiis adipisci deserunt ea nulla, fugiat saepe repellat alias
                    aperiam sint at ipsum tempore fugit facere aliquid? Quisquam, excepturi eligendi?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi voluptatem blanditiis adipisci deserunt ea nulla, fugiat saepe repellat alias
                    aperiam sint at ipsum tempore fugit facere aliquid? Quisquam, excepturi eligendi?</p>
            </div>
        </div>
    )
}

export default SinglePost