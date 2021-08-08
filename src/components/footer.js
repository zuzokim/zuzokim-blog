import React from "react"

const Footer = () => {
  return (
    <footer className="my-12 text-center">
      © zuzokim {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> and{" "}
      <a
        href="https://github.com/zuzokim"
        target="_blank"
        rel="noreferrer"
      >
        Leonids theme
      </a>
      .
    </footer>
  )
}

export default Footer
