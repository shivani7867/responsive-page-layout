import '../style.css';

function Service() {
    return (
      <>
        <div className="service-container">
          <h1 className="service-title">Services</h1>
          <section className="service-sec">
            <div className="service-box">
              <h2>Convenience</h2>
              <p>Ecommerce is convenient and accessible.</p>
            </div>
            <div className="service-box">
              <h2>Cost Reduction</h2>
              <p>Ecommerce can reduce costs for businesses.</p>
            </div>
            <div className="service-box">
              <h2>Marketing</h2>
              <p>Ecommerce can make it easier and more affordable for businesses to market their products.</p>
            </div>
            <div className="service-box">
              <h2>Flexibility</h2>
              <p>Ecommerce can offer more flexibility for customers.</p>
            </div>
          </section>
        </div>
      </>
    );
}

export default Service;
