import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
    return (
        <section className="portfolio-area page-section scroll-to-page" id="portfolio">
            <div className="custom-container">
                <div className="portfolio-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-grip-vertical"></i> portfolio
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom"><span>Projects</span></h1>
                    </div>

                    <div className="row portfolio-items">
                        <PortfolioItem name="Recipe Sharing Platform" imageUrl="assets/images/portfolio/dawaii.jpg" categories="Mongoose, Express, React, Node js" fullWidth={true}/>
                        <PortfolioItem name="Hostel Managment System" imageUrl="assets/images/portfolio/snapretail.jpg" categories="Java, SQL (Oracle), Java Swing" fullWidth={true}/>
                        <PortfolioItem name="E-Commerce Application" imageUrl="assets/images/portfolio/samba.jpg" categories="Flutter, Riverpod, Firebase "/>
                        <PortfolioItem name="Quiz Management System" imageUrl="assets/images/portfolio/foodiepal.jpg" categories="Java, Swing, SQL"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;