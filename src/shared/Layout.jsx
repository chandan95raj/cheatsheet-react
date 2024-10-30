import Topbar from "../components/Topbar"

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
    <Topbar />
    {children}
    </>
  )
}

export default Layout