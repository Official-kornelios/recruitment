import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Typed from 'react-typed';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <section className="hero">
                    <div className="hero-inner">
                        <h4>
                            <div className="hero-text-typed">
                                Today, <span></span>
                                <Typed 
                                    strings={[
                                    'We innovate',
                                    'We create and take Opportunities',
                                    'We take charge of Our Future']}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop >
                                </Typed>
                            </div>
                        </h4>
                        <h5>What would you rather do?</h5>
                    </div>
                </section>

                <div className="opportunities-teaser teaser">
                    <section className="opportunities">
                        <div className="opportunities-header-tag">Find the right Opportunity for you</div>
                        <br/>
                        <div className="opportunities-btn-group">
                            <Link to="/Apply.jsx">
                                <Button className="opportunities-btn-1">Search and Apply</Button>
                            </Link>
                            <Link to="/Teams.jsx">
                                <Button className="opportunities-btn-1">Browse Teams</Button>
                            </Link>
                        </div>
                    </section>
                </div>

                <div className="linkedin-component linkedin">
                    <section className="container linkedin-container layout-normal" data-action="container">
                        <div className="container_col">
                            <div className="background background-hero-variant background-black">
                                <div className="background_content">
                                    <div className="linkedin-teaser linkedin-teaser-hero">
                                        <img
                                            src="/likedin-logo-white.png"
                                            width="200"
                                            height="50"
                                            className="linkedin-logo"
                                            alt="Linkedin logo"
                                        />
                                        <div className="text text-title-linkedin">
                                            <h2 className="teaser__title text-white">Do you have any connections at The Investment Society?</h2>
                                        </div>
                                        <div className="linkedin-teaser-content">
                                            <a href="https://www.linkedin.com/search/results/people/?facetCurrentCompany=%5B%2222318216%22%5D&facetNetwork=%5B%22F%22%2C%22S%22%2C%22O%22%5D&origin=FACETED_SEARCH">
                                                <Button className="linkedin-btn-1">Find out on Linkedin</Button>
                                            </a>     
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                
                <div className="row no-gutters">
                    <div className="col-md-6 no-gutters">
                        <div className="leftside">
                        </div>
                    </div>
                    <div className="col-md-6 no-gutters">
                        <div className="rightside">
                            <h2 class="article-title">We've been where you are</h2>
                            <p>We all get our start somewhere. Meet the people who work here and get inspiration for how you might begin your career.</p>
                            <Link to="/People.jsx">
                                <Button className="opportunities-btn-1">Meet Our People</Button>
                            </Link> 
                        </div>
                    </div>
                </div>

                <div className="row no-gutters" id="row-2">
                    <div className="col-md-6 no-gutters">
                        <div className="leftside-2">
                            <h2 class="article-title">Working together to do more</h2>
                            <p>There are a lot of ways to create something awesome and make impact. Explore different divisions and get an idea of where you can start out with.</p>
                            <Link to="/People.jsx">
                                <Button className="opportunities-btn-1">Explore the teams</Button>
                            </Link> 
                        </div>
                    </div>
                    <div className="col-md-6 no-gutters">
                        <div className="rightside-2">
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}