// pages/_app.js

import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Main } from 'next/document';
import MainPage from '../components/MainPage';


function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
        
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
