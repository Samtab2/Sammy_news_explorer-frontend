import "./Navigation.css";

function Navigation ({ onLoginClick }) {
  
  return (
    <nav className="nav">
      <div className="nav__logo">NewsExplorer</div>
      <div className="nav__user-container">
        <button className="nav__button-home active">Home</button>
        <button
          className="nav__button-signin"
          type="text"
          onClick={onLoginClick}
          >
          Sign in  {" "}
        </button>
      </div>
    </nav>
  );
};


export default Navigation;