import Head from 'next/head'
import Welcome from '../components/Welcome';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

        <Welcome /> 
        <About />
        <Work />
        <Contact />
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: 'Raleway', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: 400;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
