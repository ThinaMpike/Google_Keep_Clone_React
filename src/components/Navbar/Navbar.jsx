import './Navbar.css';
const Navbar = ({ darkMode, toggleDarkMode }) => {
    return (<nav>
    

     <div className="navbar-left">
        <span className="material-symbols-outlined">menu</span>
        <span className="material-symbols-outlined">lightbulb</span>
        <span className="navbar-title">Keep</span>
      </div>


    <div className="search-area navbar-right">
      
       <button className="theme-toggle" onClick={toggleDarkMode} title="Toggle theme">
          <span className="material-symbols-outlined">
            {darkMode ? "light_mode" : "dark_mode"}
          </span>
        </button>


      <div className="tooltip">
        <span className="material-symbols-outlined hover">search</span>
        <span className="tooltip-text">Search</span>
      </div>
      <input type="text" placeholder="Search" />
    </div>

    <div className="settings-area">
      <div className="tooltip">
            <span className="material-symbols-outlined hover">refresh</span>
            <span className="tooltip-text">Refresh</span>
        </div> 
        <div className="tooltip">
            <span className="material-symbols-outlined hover">view_agenda</span>
            <span className="tooltip-text">View List</span>
        </div> 
        <div className="tooltip">
            <span className="material-symbols-outlined hover">settings</span>
            <span className="tooltip-text">Settings</span>
        </div> 
    </div>

    <div className="profile-actions-area">
      <div className="tooltip">
            <span className="material-symbols-outlined hover">apps</span>
            <span className="tooltip-text">Apps</span>
        </div>

        <div className="tooltip">
            <span className="material-symbols-outlined hover">account_circle</span>
            <span className="tooltip-text">Account</span>
        </div>
      
    </div>
   </nav>)
}
export default Navbar;