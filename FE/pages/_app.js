import "../styles/globals.css";
import "../styles/product.css";
import "../styles/header.css";
import "../styles/filter.css";
import "../styles/profile.css";
import "../styles/main.css";
import "../styles/carCard.css";
import "../styles/footer.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
