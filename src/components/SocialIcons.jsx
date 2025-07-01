import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FaFacebook />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
    </div>
  );
}

export default SocialIcons;
