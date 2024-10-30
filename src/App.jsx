import { BrowserRouter, Routes, Route } from "react-router-dom"
import HtmlCheatSheet from "./pages/HtmlCheatSheet"
import CssCheatsheet from "./pages/CssCheatsheet"
import JavascriptCheatsheet from "./pages/JavascriptCheatsheet"
import JqueryCheatsheet from "./pages/JqueryCheatsheet"
import BootstrapCheatsheet from "./pages/BootstrapCheatsheet"
import Layout from "./shared/Layout"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HtmlCheatSheet />} />
          <Route path='/html-cheatsheet' element={<HtmlCheatSheet />} />
          <Route path='/css-cheatsheet' element={<CssCheatsheet />} />
          <Route path='/javascript-cheatsheet' element={<JavascriptCheatsheet />} />
          <Route path='/jquery-cheatsheet' element={<JqueryCheatsheet />} />
          <Route path='/bootstrap-cheatsheet' element={<BootstrapCheatsheet />} />
        </Routes>
      </Layout>
    </BrowserRouter >
  )
}

export default App