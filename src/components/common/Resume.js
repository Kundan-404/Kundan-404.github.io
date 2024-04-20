const Resume = () => {
    return (
        <section className="resume-area page-section scroll-to-page" id="resume">
            <div className="custom-container">
            <div className="resume-content content-width">
    <div className="section-header">
        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
            <i className="las la-briefcase"></i> Resume
        </h4>
        <h1 className="scroll-animation" data-animation="fade_from_bottom"><span>Experience</span></h1>
    </div>

    <div className="resume-timeline">
        <div className="item scroll-animation" data-animation="fade_from_right">
            <span className="date">Dec 2021 - Present</span>
            <h2>Online Competitive Coding</h2>
            <p>
                <b>Platforms: LeetCode, HackerRank, Codewars</b>
                <ul className="experienceBullets">
                    <li>Experienced with algorithms and data structures, solving 30+ problems on LeetCode.</li>
                    <li>Earned a golden badge in Java and a silver badge in Problem-solving on HackerRank.</li>
                    <li>Solved 31 medium-difficulty problems on CodeWars, achieving a rank of 6 kyu.</li>
                </ul>
            </p>
        </div>

        <div className="item scroll-animation" data-animation="fade_from_right">
            <span className="date">Dec 2021 - Present</span>
            <h2>Freelancing - Java Projects</h2>
            <p>
                <b>Freelance</b>
                <ul className="experienceBullets">
                    <li>Worked on 10+ projects with an average success rate of 90% (4.5/5 rating).</li>
                    <li>Demonstrated expertise in Object-Oriented Programming, Data Structures, and Design Patterns.</li>
                </ul>
            </p>
        </div>

        <div className="item scroll-animation" data-animation="fade_from_right">
            <span className="date">Aug 2022 - Dec 2022</span>
            <h2>Teaching Assistant</h2>
            <p>
                <b>Introduction to Computing and Computer Applications</b>
                <ul className="experienceBullets">
                    <li>Assisted in managing a class of 45+ students, planning and delivering lessons on data science and algorithms.</li>
                </ul>
            </p>
        </div>

        <div className="item scroll-animation" data-animation="fade_from_right">
            <span className="date">Specific Project Dates</span>
            <h2>E-Commerce App Development</h2>
            <p>
                <b>Flutter Development</b>
                <ul className="experienceBullets">
                    <li>Created an E-commerce app using Flutter, Firebase for authentication, and Riverpod for state management.</li>
                    <li>Integrated secure payment methods for transactions, ensuring a seamless user experience.</li>
                </ul>
            </p>
        </div>
    </div>
</div>


                <div className="resume-content content-width" style={{marginTop: 20}}>
                    <div className="section-header">
                        <h1 className="scroll-animation" data-animation="fade_from_bottom"><span>Education</span></h1>
                    </div>

                    <div className="resume-timeline">
                    <div className="item scroll-animation" data-animation="fade_from_right">
                            <h2>Bachelor's in Computer Science (2024)  - 3.35 CGPA </h2>
                            <p>
                                <b> Institute of Business Administration, Karachi </b><br/>
                                <b>Key Courses:</b> Data Structures and Algorithms, Object Oriented Programming, Design Patterns, Web Development, App Development, Business Intelligence
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Resume;