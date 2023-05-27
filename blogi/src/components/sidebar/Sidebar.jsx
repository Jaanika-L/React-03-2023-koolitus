import "./sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quia, tempora. Sequi cupiditate
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Design</li>
          <li className="sidebarListItem">Food</li>
          <li className="sidebarListItem">Relationships</li>
          <li className="sidebarListItem">Travel</li>
          <li className="sidebarListItem">Motherhood</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <a className="sidebarIcon fa-brands fa-square-facebook" href="https://www.facebook.com/"></a>
        <a className="sidebarIcon fa-brands fa-square-twitter" href="https://www.twitter.com/"></a>
        <a className="sidebarIcon fa-brands fa-square-pinterest" href="https://www.pinterest.com/"></a>
        <a className="sidebarIcon fa-brands fa-square-instagram" href="https://www.instagram.com/"></a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar