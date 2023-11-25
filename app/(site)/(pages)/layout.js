import "../styles/app.scss";
import '@fontsource/pt-serif';
import Footer from "../components/layout/footer";
import "nprogress/nprogress.css";
import Header from "../components/layout/header";
import { Roboto } from 'next/font/google'

export const metadata = {
    title: 'Portfolio',
    description: 'Portfolio Website',
}

const roboto = Roboto({ weight: ['400','500', '700', '900'], subsets: ['latin'] })

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
