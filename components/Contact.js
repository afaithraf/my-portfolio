import React from 'react'

export default function Contact() {
    return (
        <div className="cont">
            <div className="Box">

            </div>
            <style jsx>{`
            .cont {
                width: 100%;
                height: 100vh;
                position: relative;
                background: #111111b3;
               backdrop-filter: blur(25px);
               text-align: center;
               color: #ffffff;
            }
            .box{
                height: 80%;
                width: 90vw;
                max-width: 800px;
                background: #fff;
            }
            `}</style>
        </div>
    )
}
