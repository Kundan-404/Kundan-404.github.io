import SocialMenu from "./SocialMenu";

const LeftSideBar = () => {
    return (
        <div className="left-sidebar">
            <div className="sidebar-header d-flex align-items-center justify-content-between">
                {/* <img src="assets/images/logo.png" alt="Logo"/> */}
                <h2>Kundan Kumar</h2>
                <span className="designation">Full Stack Developer (Java)</span>
            </div>
            <img className="me" src="assets/images/me.jpeg" alt="Me"/>
            <h2 className="email">kundanmalhi45@gmail.com</h2>
            <h2 className="address">IBA Boys Hostel, Karachi University, Karachi</h2>
            <p className="copyright">&copy; {new Date().getFullYear()} Kundan Kumar. All Rights Reserved</p>
            <SocialMenu optionalClass="flex-wrap justify-content-center"/>
            <a href="mailto:kundanmalhi45@gmail.com" className="theme-btn">
                <i className="las la-envelope"></i> Contact Me!
            </a>
        </div>
    );
}

export default LeftSideBar;