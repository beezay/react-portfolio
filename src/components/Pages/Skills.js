import React from 'react'
import '../../styles/Pages/Skills.css'

function Skills() {
    return (
        <>
            <section class="skills" id="skills">
                <div class="max-width">
                    <h2 class="title">
                        My skills</h2>
                    <div class="skills-content">
                        <div class="column left">
                            <div class="text">
                                My creative skills & experiences.</div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ratione error est
                                recusandae consequatur, iusto illum deleniti quidem impedit, quos quaerat quis minima sequi.
                                Cupiditate recusandae laudantium esse, harum animi aspernatur quisquam et delectus ipsum quam
                                alias quaerat? Quasi hic quidem illum. Ad delectus natus aut hic explicabo minus quod.</p>
                            <button>Read more</button>
                        </div>
                        <div class="column right">
                            <div class="bars">
                                <div class="info">
                                    <span>HTML</span>
                                    <span>90%</span>
                                </div>
                                <div class="line html">
                                </div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>CSS</span>
                                    <span>60%</span>
                                </div>
                                <div class="line css">
                                </div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>JavaScript</span>
                                    <span>70%</span>
                                </div>
                                <div class="line js">
                                </div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>REACT</span>
                                    <span>50%</span>
                                </div>
                                <div class="line php">
                                </div>
                            </div>
                            <div class="bars">
                                <div class="info">
                                    <span>MongoDB</span>
                                    <span>40%</span>
                                </div>
                                <div class="line mysql">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  
        </>
    )
}

export default Skills
