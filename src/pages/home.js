import '../style.css';
import Projects from './projects';
import Service from './services';
 

function Home() {
    return (
      <>
      <Service/>
      <Projects/>
      <section className="contact-sec">
        <h1>Contact Us</h1><br/>
        <form >
          <input type="text" placeholder="enter your name"/>
          <input type="email" placeholder="enter your email"/>
          <input type="subject"placeholder="enter subject"/>
          <textarea>  
          </textarea>
          <input type="submit" value="submit"/>
        </form>
      </section>
      </>
    );
  }
  
export default Home;