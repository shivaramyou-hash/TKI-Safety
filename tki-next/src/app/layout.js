import Script from 'next/script'
import './globals.css'
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Preloader from '@/components/layout/Preloader';

export const metadata = {
  title: 'Toplax - Factory & Industry HTML Template',
  description: 'Toplax Factory & Industry HTML Template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zxx">
      <head>
        {/* Favicon Icon */}
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />
        {/* Google Fonts Css*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
        {/* Bootstrap Css */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" media="screen" />
        {/* SlickNav Css */}
        <link href="/css/slicknav.min.css" rel="stylesheet" />
        {/* Swiper Css */}
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        {/* Font Awesome Icon Css*/}
        <link href="/css/all.css" rel="stylesheet" media="screen" />
        {/* Animated Css */}
        <link href="/css/animate.css" rel="stylesheet" />
        {/* Magnific Popup Core Css File */}
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        {/* Mouse Cursor Css File */}
        <link rel="stylesheet" href="/css/mousecursor.css" />
        {/* Main Custom Css */}
        <link href="/css/custom.css" rel="stylesheet" media="screen" />
      </head>
      <body>
        <Preloader />
        <Header />
        {children}
        <Footer />

        {/* Jquery Library File */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        {/* Bootstrap js file */}
        <Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
        {/* Validator js file */}
        <Script src="/js/validator.min.js" strategy="lazyOnload" />
        {/* SlickNav js file */}
        <Script src="/js/jquery.slicknav.js" strategy="lazyOnload" />
        {/* Swiper js file */}
        <Script src="/js/swiper-bundle.min.js" strategy="lazyOnload" />
        {/* Counter js file */}
        <Script src="/js/jquery.waypoints.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.counterup.min.js" strategy="lazyOnload" />
        {/* Isotop js file */}
        <Script src="/js/isotope.min.js" strategy="lazyOnload" />
        {/* Magnific js file */}
        <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        {/* SmoothScroll */}
        <Script src="/js/SmoothScroll.js" strategy="lazyOnload" />
        {/* Parallax js */}
        <Script src="/js/parallaxie.js" strategy="lazyOnload" />
        {/* MagicCursor js file */}
        <Script src="/js/gsap.min.js" strategy="beforeInteractive" />
        <Script src="/js/magiccursor.js" strategy="lazyOnload" />
        {/* Text Effect js file */}
        <Script src="/js/SplitText.js" strategy="lazyOnload" />
        <Script src="/js/ScrollTrigger.min.js" strategy="lazyOnload" />
        {/* YTPlayer js File */}
        <Script src="/js/jquery.mb.YTPlayer.min.js" strategy="lazyOnload" />
        {/* Wow js file */}
        <Script src="/js/wow.min.js" strategy="lazyOnload" />
        {/* Main Custom js file */}
        <Script src="/js/function.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
