
import Body from './Body'
import Header from './Header'
import Footer from './Footer'


export default function Layout({ children }) {
  return (<div style={{ flexDirection: 'column' }}>
    <Header />
    <Body>{children}</Body>
    <Footer />
  </div>);
};