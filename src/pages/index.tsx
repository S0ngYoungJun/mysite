import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/index.scss"
import Snowflakes from "../components/fallobject"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="root">
     <Snowflakes></Snowflakes>
     <div className="main">
      <h1>
        안녕하세요. 
      </h1>
      <table>
        <tr>
          <td>GitHub</td>
          <td>https://github.com/S0ngYoungJun</td>
        </tr>
        <tr>
          <td>E-mail</td>
          <td>clesaaaaaa@gmail.com</td>
        </tr>
        <tr>
          <td>무엇을</td>
          <td>넣을까요.</td>
        </tr>
        </table>
        PROJECTS

      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
