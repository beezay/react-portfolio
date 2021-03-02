import React from 'react'
import '../../styles/Pages/Contact.css'

function Contact() {
    return (
        <>
            <section class="contact" id="contact">
                <div className="max-width">
                    <h2 class="title">Contact me</h2>
                    <div className="contact-content">
                        <div className="column left">
                            <div class="text">Get in Touch</div>
                            <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga
                            corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
                            <div className="icons">
                                <div class="row">
                                    <i class="fas fa-user"></i>
                                    <div class="info">
                                        <div class="head">
                                            Name</div>
                                        <div class="sub-title">
                                            Beezay Bohora</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div class="info">
                                    <div class="head">
                                        Address</div>
                                    <div class="sub-title">
                                    Udayapur, Nepal</div>
                                </div>
                            </div>
                                <div class="row">
                                    <i class="fas fa-envelope"></i>
                                    <div class="info">
                                        <div class="head">
                                            Email</div>
                                        <div class="sub-title">
                                            np.beezay@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column right">
                            <div class="text">Message me</div>
                            <form action="#">
                                <div className="fields">
                                    <div class="field name">
                                        <input type="text" placeholder="Name" required />
                                    </div>
                                    <div class="field email">
                                        <input type="email" placeholder="Email" required />
                                    </div>
                                </div>
                                <div class="field">
                                    <input type="text" placeholder="Subject" required />
                                </div>
                                <div class="field textarea">
                                    <changeit cols="30" rows="10" placeholder="Message.." required></changeit>
                                </div>
                                <div class="button">
                                    <button type="submit">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
