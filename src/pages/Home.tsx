const Home = () => {
    return(
            <header>
            <div className="grid colored-border">
                <div className="grid-item">
                    <div className="item">
                        <h1 className="gradient-text">
                            Creative Frontend Developer.
                        </h1>
                    </div>
                    <div className="item">
                        <p className="p">
                            I code and design simple beautiful things, and I
                            love what I do.
                        </p>
                    </div>
                    <div className="item">
                        <p>
                            3+ years of experience. Specialized in building
                            products, while ensuring a seamless web experience
                            for clients across Africa.
                        </p>
                    </div>
                    <div className="item">
                        <p>
                            Highly skilled at progressive enhancement, design
                            systems & UI Engineering - performance and
                            scalability are top objectives on my radar.
                        </p>
                    </div>
                    <div className="item">
                        <br />
                        <section className="social-icons-container">
                            <a
                                href="https://www.facebook.com/profile.php?id=100085862181551"
                                target="_blank"
                                className="social-icons"
                                ><i className="fab fa-facebook"></i
                            ></a>
                            <a
                                href="https://twitter.com/TreasureUzoma1"
                                className="social-icons"
                                ><i className="fab fa-twitter"></i
                            ></a>
                            <a
                                href="https://www.instagram.com/naira_jasper"
                                className="social-icons"
                                ><i className="fab fa-instagram"></i
                            ></a>
                            <a
                                href="https://www.linkedin.com/in/treasure-uzoma-40a789260"
                                className="social-icons"
                                ><i className="fab fa-linkedin"></i
                            ></a>
                        </section>
                    </div>
                </div>
                <div className="grid-item centered">
                    <div className="avatar-container">
                        <img
                            src="https://treasureuzoma.vercel.app/images/hero.png"
                            alt="avatar"
                            className="avatar-pic"
                        />
                        <div className="avatar-border"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Home;