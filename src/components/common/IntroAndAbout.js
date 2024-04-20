const IntroAndAbout = () => {
    return (
        <>
            <section className="hero-section page-section scroll-to-page" id="home">
                <div className="custom-container">
                    <div className="hero-content content-width">
                        <div className="section-header">
                            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                <i className="las la-home"></i> Introduce
                            </h4>
                            <h1 className="scroll-animation" data-animation="fade_from_bottom">Hi from  
                                <span> Kundan Kumar</span>, Full Stack developer (Java)</h1>
                        </div>
                        <p className="scroll-animation" data-animation="fade_from_bottom">I code beautifully
                            simple things and i love what i do. Just simple like that!</p>
                        <a href="/#portfolio" className="go-to-project-btn scroll-to scroll-animation"
                            data-animation="rotate_up">
                            <img src="assets/images/round-text.png" alt="Rounded text"/>
                            <i className="las la-arrow-down"></i>
                        </a>

                        <div className="facts d-flex">
                            {/* <div className="left scroll-animation" data-animation="fade_from_left">
                                <h1>5+</h1>
                                <p>Years of <br/>Experience</p>
                            </div> */}
                            <div className="right scroll-animation" data-animation="fade_from_right">
                                <h1>40+</h1>
                                <p>projects completed in <br/>Java</p>
                            </div>
                        </div>
                    </div>
                </div>
                </section>

                <section className="about-area page-section scroll-to-page" id="about">
                <div className="custom-container">
                    <div className="about-content content-width">
                        <div className="section-header">
                            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                <i className="lar la-user"></i> About
                            </h4>
                            <h1 className="scroll-animation" data-animation="fade_from_bottom">For every exceptional software, there lies a meticulously crafted <span>code tale</span></h1>
                        </div>
                        <p className="scroll-animation" style={{maxWidth: "none", textAlign: "justify"}} data-animation="fade_from_bottom">Welcome to my portfolio! I am Kundan Kumar, a dedicated Java Developer with a strong foundation in computer science from IBA Karachi, and a proven track record in developing robust, efficient software solutions. My journey includes mastering algorithms and data structures on competitive coding platforms, where I've achieved notable recognition in Java and problem-solving.

My freelance work spans over 10 projects, highlighting my expertise in Object-Oriented Programming, Data Structures, and Design Patterns, with a focus on delivering high-quality Java applications. Notably, I've developed:

A Hostel Management System to streamline operations at IBA boys’ hostel, featuring modules for admin, staff, and students with an intuitive GUI.
A Quiz Management System leveraging Oracle database and Java, focusing on security and efficient information handling.
I am passionate about using my skills to solve real-world problems and continuously strive to enhance my technical capabilities. Explore my portfolio to see how my work can add value to your projects..</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IntroAndAbout;