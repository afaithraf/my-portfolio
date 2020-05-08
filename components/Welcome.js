import React, { useState, useEffect } from 'react';
import IconScroll from "./IconScroll";

export default function Welcome() {

    const [sPos, setsPos] = useState(1);

    const handleScroll = (e) => {
        var h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
        var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;

        setsPos(percent * 480 / 100);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <div>
            <div className="spaceHolder" style={{ height: "100vh", width: "100%" }}></div>
            <div className="navbar">
                <div className="inside">
                    <div>
                        <img className="logo" src={"/assets/logo.png"} alt="ashraf logo" />
                    </div>
                    <div className="navigation">
                        <ul>
                            <li>Welcome</li>
                            <li>About me</li>
                            <li>Work</li>
                            <li>Contact</li>
                        </ul>
                        <div className="indicator" style={{ width: sPos }}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cont">
                <main className="content">
                    <div className="left">
                        <div>
                            <p>
                                I’m <span className="bold">Achraf</span>, a <span className="bold">Web Designer</span> that codes. i’m dedicated to <span className="bold">UX</span>, <span className="bold">Coding</span> and <span className="bold">Tech</span>.
                        </p>
                        </div>
                        <div className="divider"></div>
                        <div>
                            <p>
                                I don't just build websites, I build websites that <span className="bold">IMPRESS</span>.
                    </p>
                        </div>
                        <div>
                            <button className="yob">
                                Contact
                        </button>
                        </div>
                    </div>
                    <div className="right">
                        <img className="portrait" src={"/assets/me.png"} alt="ashraf portrait" />
                    </div>
                </main>
                <div className="scroll">
                    <IconScroll color="#fff" iconColor="#f7f749" text="Start scrolling to see more" />
                </div>
            </div>
            <style jsx>{`
                button.yob{
                    background: #ffff00;
                    color: #010101;
                    border: 2px solid #ffff00;
                    padding: 14px 60px;
                    font-size: 13pt;
                    font-weight: 600;
                    transition-duration: 200ms;
                    cursor: pointer;
                }
                button.yob:hover{
                    background: #f7f749;
                    border-color: #f7f749;
                }
                .bold{
                    font-weight: bold;
                }
                .cont{
                    background: #111111;
                    height: 100vh;
                    width: 100%;
                    color: #f1f1f1;
                    display:flex;
                    flex-direction: column;
                    font-weight: 300;
                    position: fixed;
                    top: 0;
                }
                .navbar{
                    left: 0;
                    right: 0;
                    // background: #111111;
                    position: fixed;
                    top: 0;
                    color: #f1f1f1;
                    font-weight: 500;
                    z-index: 2;
                }
                .inside{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin: 0 10vw;
                }
                .logo{
                    margin: 24px 0;
                    height: 30px;
                }
                .scroll{
                    margin: 0 auto;
                    margin-bottom: 20px;   
                }
                .content{
                    width: 70%;
                    margin: auto;
                    display: grid;
                    grid-template-columns: auto auto;
                    grid-gap: 16px;
                }
                .left{
                    margin-right: 100px;
                    font-size: 26pt;
                    max-width: 60vw;
                    text-align: left;
                    margin-top: 40px;
                }
                .divider{
                    height: 4px;
                    width: 140px;
                    background: #ffff00;
                }
                .portrait{
                    height: auto;
                    width: 460px;
                    max-width: 100%;
                    border: 2px solid #ffff00;
                    border-radius: 100%;
                }
                .navigation ul{
                    list-style: none;
                    display: flex;
                    margin-bottom: 1px;
                    padding: 0;
                }
                .navigation ul li{
                    padding: 10px 0;
                    margin: 0;
                    width: 120px;
                    text-align: center;
                }
                .navigation .indicator{
                    height: 5px;
                    width: 0px;
                    background: #ffff00;
                    border-radius: 1px;
                }

                @media (max-width: 600px){
                    .navbar{
                        display:none;
                    }
                    .right{
                        grid-row-start: 1;
                    }
                    .left{
                        font-size: 1.1em;
                        margin: auto;
                        text-align: center;
                    }
                    .portrait{
                        width: 240px;
                    }
                    .content{
                        grid-template-columns: auto;
                        text-align: center;
                    }
                    .divider{
                        margin: auto;
                    }
                }

                @media (min-width: 600px){
                    .navbar{
                        display:none;
                    }
                    .left{
                        font-size: 1.3em;
                        margin: auto;
                        text-align: center;
                    }
                    .portrait{
                        width: 300px;
                    }
                    .right{
                        grid-row-start: 1;
                    }
                    .content{
                        grid-template-columns: auto;
                        text-align: center;
                    }
                    .divider{
                        margin: auto;
                    }
                }
                @media (min-width: 768px){
                    .navbar{
                        display:block;
                    }
                    .left{
                        font-size: 1.4em;
                        text-align: left;
                    }  
                    .portrait{
                        width: 240px;
                    }
                    .content{
                        grid-template-columns: auto auto;
                        text-align: left;
                    }
                    .right{
                        grid-column-start: 2;
                    }
                    .divider{
                        margin: 0;
                        margin-right: auto;
                    }
                }
                     
                @media (min-width: 992px){
                    .left{
                        font-size: 1.8em;
                    }  
                    .portrait{
                        width: 300px;
                    }
                }
                @media (min-width: 1400px){
                    .left{
                        font-size: 2.6em;
                    }                                  
                    .portrait{
                        width: 400px;
                    }
                }
            `}</style>
        </div>
    )
}
