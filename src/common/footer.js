/* eslint-disable jsx-a11y/anchor-is-valid */
import '../style.css';


function Footer() {
    return (
  
      <footer style={{
        marginTop: "20px", 
        width: "100%", 
        textAlign: "center", 
        padding: "20px",  
        color: "black", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        boxShadow: "0px -4px 8px #2a2929"
      }}>
        <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "5px" }}>E-commerce</div>
        <div style={{ display: "flex", gap: "15px", margin: "10px 0" }}>
          <a href="#" style={{ color: "black", textDecoration: "none", fontSize: "14px" }}>Privacy Policy</a>
          <a href="#" style={{ color: "black", textDecoration: "none", fontSize: "14px" }}>Terms & Conditions</a>
          <a href="#" style={{ color: "black", textDecoration: "none", fontSize: "14px" }}>Contact</a>
        </div>
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" alt="Facebook" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/24/733/733558.png" alt="Instagram" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/24/733/733579.png" alt="Twitter" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/24/732/732221.png" alt="Website" /></a>
        </div>
        <p style={{ margin: "5px 0", fontSize: "14px", opacity: "0.8" }}>Made with ❤️ for Customers</p>
      </footer>
    );
}

export default Footer;
