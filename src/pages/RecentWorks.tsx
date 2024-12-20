const RecentWorks = () => {
    return(
        <>
        <br />
        <h2>Recent Works<span className="bounce">👨‍🍳</span></h2>
            <p>Here are some of my fun and recent projects I’ve worked on</p>
            <section className="block-container">
                <div className="block-2">
                    <div>
                        <big>Gappay Website </big>
                        <p>JavaScript + firebaseAPI + HTML + CSS</p>
                        <p>
                            A fintech landing page for a platform that
                            simplifies transactions.
                        </p>
                        <p>
                            <a href="https://www.gappay.ng" target="_blank"
                                ><span className="arrow-up"
                                    ><i className="fas fa-arrow-up"></i
                                ></span>
                                View</a
                            >
                        </p>
                    </div>
                </div>
            </section>
            </>
    )
}

export default RecentWorks;