import React from 'react'
import '../../styles/Pages/About.css'
import mineImg from '../../styles/Pages/images/mine-bg.jpg'

const About = () => {
    return (
            <section className="about" id="about">
                <div className="max-width">
                    <h2 className="title">
                        About me</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src={mineImg} alt="This is profile" />
                        </div>
                        <div className="column right">
                            <div className="text">
                                I'm Bijay and I'm a <span className="typing-2"></span></div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque
                                autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus
                                accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus
                                veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis
                                beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
                            <button>Download CV</button>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default About
