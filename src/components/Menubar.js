import React from "react";

import Logo from "../assets/facebook.png";

function Menubar() {
  return (
    <header>
      <nav>
        <img src={Logo} alt="facebook" />
        <div>
          <span>Meu Perfil</span>
        </div>
      </nav>
    </header>
  );
}
export default Menubar;
