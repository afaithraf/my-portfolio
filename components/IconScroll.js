import React from 'react'

export default function IconScroll(props) {
    return (
        <div className="container">
            {props.text || 'none'}
            <style jsx>{`
            @keyframes iconScrollAnim {
                0% { opacity: 1; height: 8px;}
                20% { opacity: 1; height: 8px;}
                30% { transform: translateY(0); opacity: 1; height: 19px;}
                40% { opacity: 1;}
                80% { transform: translateY(19px); opacity: 0; height: 0;}
                81% { transform: translateY(0); opacity: 0; height: 8px;}
                100% { opacity: 1; height: 8px;}
              }
                .container{
                    position: relative;
                    display: block;
                    font-size: 11pt;
                    font-weight: bold;
                    color: ${props.color || "rgba(255,255,255,1)"};
                    text-decoration: none;
                    padding: 10px 4px 4px 40px;
                    max-width: 170px;
                    text-align: center; 
                }
                .container:before {
                    display: block;
                    position: absolute;
                    top:4px;
                    left:0;
                    width: 24px;
                    height: 40px;
                    border: 2px solid ${props.iconColor || props.color || "rgba(255,255,255,1)"};
                    border-radius: 12px;
                    content:"";
                  }
                  .container:after {
                    display: block;
                    position: absolute;
                    top:12px;
                    left:13px;
                    width: 2px;
                    height: 8px;
                    background: ${props.iconColor || props.color || "rgba(255,255,255,1)"};
                    border-radius: 1px;
                    content:"";
                    animation-name: iconScrollAnim;
                    animation-duration: 2s;
                    animation-iteration-count: infinite;
                    animation-delay: 2s;
                }
            `}</style>
        </div>
    )
}
