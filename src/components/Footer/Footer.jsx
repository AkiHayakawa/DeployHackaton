import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_first">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Valve_logo.svg/1000px-Valve_logo.svg.png"
          alt="Valve"
          width="14%"
        />
        <div className="footer">
          <p>
            © 2022 Valve Corporation. All rights reserved. All trademarks are
            property of their respective owners in the US and other countries.
            <br />
            VAT included in all prices where applicable.
          </p>
          <div className="footer_second">
            <a href="https://www.valvesoftware.com/ru/about">About Valve</a>
            <a href="https://bishkek.adresa-telefony.ru/respublikanskaja_psihiatricheskaja_bolnica-70000001032724533.html">
              Support
            </a>
            <a href="https://www.facebook.com/Steam">Facebook</a>
            <a href="https://twitter.com/steam">Twitter</a>
            <a href="https://partner.steamgames.com">Streamworks</a>
          </div>
        </div>
        <img
          src="https://www.pngmart.com/files/22/Steam-Logo-PNG.png"
          alt="Steam"
          width="13%"
        />
      </div>
    </footer>
  );
};

export default Footer;
