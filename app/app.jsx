'use strict'

import React from "react"
import ReactDOM from "react-dom"
import { Window, Content, PaneGroup ,Pane } from "react-photonkit"

import Header from "./header.jsx"
import Footer from "./footer.jsx"
import Sidebar from "./sidebar.jsx"

require('../index.scss')

ReactDOM.render(
  <Window>
    <Header />
    <Content>
      <PaneGroup>
        <Sidebar />
        <Pane className="padded-more">
          Hello, react-photonkit!!!
        </Pane>
      </PaneGroup>
    </Content>
    <Footer />
  </Window>
  , main)
