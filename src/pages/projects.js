import "../style.css";

function Projects() {
    return (
        <>
            <section className="projects-sec">
                <h1 className="section-title">Projects</h1>
                <div className="projects-container">
                    <div className="project">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrDhqNjHRctFh7bDX0mVdvnuMdtMQB3_uUxw&s" alt="Project 1"/>
                        <h2>Project One</h2>
                        <p>Project One is an innovative e-commerce solution designed to enhance user experience.</p>
                    </div>
                    <div className="project">
                        <img src="https://w3layouts.b-cdn.net//wp-content/uploads/2021/06/Electronics-Mart-eCommerce-website-template-1-scaled.jpg" alt="Project 2"/>
                        <h2>Project Two</h2>
                        <p>A mobile application built for seamless online shopping and easy navigation.</p>
                    </div>
                    <div className="project">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3I_7oZowihJXRRvLkaUX5kZPRRpvPkWzx0A&s" alt="Project 3"/>
                        <h2>Project Three</h2>
                        <p>An AI-powered chatbot that assists users in finding the best products.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
