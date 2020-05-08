export default function About() {
    return (
        <div className="cont">
            <div className="box">
                <h2>About Me</h2>
                <p>
                    I live and work near Cleveland, Ohio. At my day job, I develop WordPress websites and cross-platform mobile apps. I also freelance when I can, mostly building custom websites and apps that you can’t get from a template.
                </p>
            </div>
            <div className="box">
                <h2>Skills</h2>
                <div className="tools">
                    <img src="/assets/ux-ui.png" alt="" />
                    <img src="/assets/hjc.png" alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="" />
                    <img src="https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png" alt="" />
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png" alt="" />
                </div>
            </div>
            <div className="box">
                <h2>Tools I Use</h2>
                <div className="tools">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Adobe_Photoshop_Express_logo.svg/2000px-Adobe_Photoshop_Express_logo.svg.png" alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png" alt="" />
                    <img src="https://lh3.googleusercontent.com/proxy/6XTRG-KX_pa_Wq19jo4il4IPJQIsmHjgA1kYr1_bsk0YNMRqwCxbE9s1fpQwNt2cqHPSl9stT4AvXyD3QdqdjTVFS8F7XssZeYwW77cgZ9d8x5T-kGIfbg" alt="" />
                    <img src="https://seeklogo.com/images/V/visual-studio-code-logo-284BC24C39-seeklogo.com.png" alt="" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png" alt="" />
                </div>
            </div>
            <style jsx>{`
                .cont {
                    width: 100%;
                    position: relative;
                    background: #111111b3;
                   backdrop-filter: blur(25px);
                   text-align: center;
                   color: #ffffff;
                }
                h2{
                    margin-top: 6px;
                }
                .box{
                    border-top: 1px solid #ffffff38;
                    border-bottom: 1px solid #ffffff38;
                    padding: 40px;
                }
                .tools img{
                    height: 70px;
                    margin: 20px;
                }
                p{
                    max-width: 700px;
                    margin: auto;
                    font-size: 1.3em;
                    font-weight: 500;
                    color: #ececec;
                }
            `}</style>
        </div>
    )
}
