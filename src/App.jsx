import { BrowserRouter, Routes, Route } from "react-router-dom"
import CssCheatsheet from "./pages/CssCheatsheet.jsx"
import HtmlCheatsheets from "./pages/HtmlCheatsheets.jsx"
import JavascriptCheatsheet from "./pages/JavascriptCheatsheet.jsx"
import JqueryCheatsheet from "./pages/JqueryCheatsheet.jsx"
import BootstrapCheatsheet from "./pages/BootstrapCheatsheet.jsx"
import Layout from "./shared/Layout"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HtmlCheatsheets />} />
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