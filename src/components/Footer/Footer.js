import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>Developed by Ahmed Awad</div>
      <div>{new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
