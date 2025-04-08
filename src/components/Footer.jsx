import React from "react";



function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Created By Lola Marquez 👽</p>
      <p>Copyright ⓒ {year}</p>
  
    </footer>
  );
}

export default Footer;
