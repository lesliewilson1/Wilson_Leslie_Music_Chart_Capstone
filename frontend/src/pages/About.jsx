import './About.css'
import Ball from '../components/ball'

function About() {

    return (
        <>
        <div className="about-container">
            <section className="about">
                <div className="about-title"><h1><u>About</u></h1></div>
                <div className="about-content">
                    <div className="about-para">
                        <h1>Popular</h1>
                            <h3>(paa·pyuh·lr)</h3> <br></br>
                            <h3>What defines popular music in today's modern era?</h3> <br></br>
                            <h2>We have the answer.</h2>
                            <p>POP (popular) music can be electronic, r&b, bubblegum, hyper, etc.</p>
                            <p>We created a special formula to show popular music across genres in the U.S</p>
                     </div>
                </div>
            </section>

        </div>
    <Ball></Ball>
        </>
    )
}

export default About
