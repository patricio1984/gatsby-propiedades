import React from "react"
import { css } from "@emotion/react"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer
      css={css`
        text-align: center;
        background-color: #0d283b;
        color: #fff;
        padding: 1rem;
        width: 100%;
        bottom: 0;
        right: 0;
        left: 0;
      `}
    >
      <p>Todos los derechos reservados {year} &copy;</p>
    </footer>
  )
}

export default Footer
