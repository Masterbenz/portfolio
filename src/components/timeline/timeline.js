import React from "react";
import './timeline.scss'

const timeline = () => {
  return (
    <div id={"Experience"} className="kk">
        {/* <div className="col-md-12 example-title">
            <h2>Centered Timeline</h2>
            <p>Medium devices (desktops, 992px and up).</p>
        </div> */}
        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
            <ul className="timeline timeline-centered">
            <li className="timeline-item period">
                    <div className="timeline-info"></div>
                    <div className="timeline-marker-head"></div>
                    <div className="timeline-content">
                        <h2 className="timeline-title">Work</h2>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>2017 - present</span>
                        <div>
                        <label>National Telecom Public Company Limited</label>
                        </div>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">FullStack Developer</h3>
                      
                        <p>I am currently working at a national telecommunication company. My job is to develop software for government and internal organizations. According to the needs of customers, from receiving customer needs, writing code, system administration, testing the system, including implementing the system.</p>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>2016 - 2017</span>
                        <div>
                        <label>Neolution Esport</label>
                        </div>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Gamer</h3>
                     
                        <p>After completing my bachelor's degree, I had the opportunity to make a national Rov team and win the GSL 2017 rov title. </p>
                    </div>
                </li>
                <li className="timeline-item period">
                    <div className="timeline-info"></div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h2 className="timeline-title">Eduacation</h2>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>2012 - 2016</span>
                        <div>
                        <label>Study - Bachelor's degree </label>
                        </div>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Sripatum University</h3>
                        <label>GPA 3.77 </label>
                     
                        <p>I am studying for a bachelor's degree from Sripatum University, Faculty of Information Technology. Information and Communication Technology Branch. I was able to graduate with 1st className honors what I learned about Network and Programming. But I prefer programming. </p>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>2009 - 2012</span>
                        <div>
                        <label >Study - Vocational Certificate</label>
                        </div>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">SIBA College</h3>
                        <label>GPA 3.05 </label>
                     
                        {/* <h6 className="timeline-title">Study</h6> */}
                        <p>I graduated with a vocational certificate at SIBA College, Computer Business Branch. I learned about computers in general and did a little programming and I realized from now on that I love programming. </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default timeline;
