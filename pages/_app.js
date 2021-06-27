import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/app.scss'
import { Provider } from "../components/AppContext";

function MyApp({ Component, pageProps }) {
  return  <Provider><Component {...pageProps} /></Provider>
}

export default MyApp
