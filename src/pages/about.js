import Banner from "../common/banner";
import Header from "../common/header";
import '../style.css';
 

function About() {
    return (
      <>
      <Header/>
      <Banner/>
      <section className="about-sec">
        <div className="about-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJv5hiUeVlQ9tbXFyhO6wP7el4T4CuWodXgA&s" alt="Shopping" />

        </div>
        <div className="about-content">
            <h1>Ecommerce Store</h1>
            <p>Welcome to SHAH Store, your one-stop shop for high-quality, affordable products. 
                Founded in [2005], we are passionate about providing our customers with an exceptional 
                shopping experience. From fashion to electronics, we offer a wide variety of carefully 
                curated items to suit every need. At [SHAH Store], we believe in quality, affordability, 
                and customer satisfaction. We are dedicated to bringing you the best deals, fast shipping,
                and outstanding customer service.</p>
            <p>Our journey began with a simple goal: to make 
                shopping easier, more accessible, and enjoyable for everyone. 
                We source products from trusted suppliers, ensuring that each item meets our
                high standards for quality. Whether you're looking for the latest trends or timeless
                classics, we are committed to offering a seamless online shopping experience with secure 
                payment options and prompt delivery. At [SHAH Store], your satisfaction is our top priority, and we strive 
                to make every shopping experience memorable and hassle-free.</p>
            <p>At [SHAH Store], we offer a wide range of quality products at unbeatable prices, 
                with a focus on customer satisfaction. Shop with us for a seamless, enjoyable experience every time.</p>
                <button>Read More</button>
        </div>
      </section>
  
      </>
    );
  }
  
export default About;