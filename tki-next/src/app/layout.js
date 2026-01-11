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
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        {/* Validator js file */}
        <Script src="/js/validator.min.js" strategy="afterInteractive" />
        {/* SlickNav js file */}
        <Script src="/js/jquery.slicknav.js" strategy="afterInteractive" />
        {/* Swiper js file */}
        <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
        {/* Counter js file */}
        <Script src="/js/jquery.waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive" />
        {/* Isotop js file */}
        <Script src="/js/isotope.min.js" strategy="afterInteractive" />
        {/* Magnific js file */}
        <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        {/* SmoothScroll */}
        <Script src="/js/SmoothScroll.js" strategy="afterInteractive" />
        {/* Parallax js */}
        <Script src="/js/parallaxie.js" strategy="afterInteractive" />
        {/* MagicCursor js file */}
        <Script src="/js/gsap.min.js" strategy="beforeInteractive" />
        <Script src="/js/magiccursor.js" strategy="afterInteractive" />
        {/* Text Effect js file */}
        <Script src="/js/SplitText.js" strategy="afterInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        {/* YTPlayer js File */}
        <Script src="/js/jquery.mb.YTPlayer.min.js" strategy="afterInteractive" />
        {/* Wow js file */}
        <Script src="/js/wow.min.js" strategy="afterInteractive" />
        {/* Main Custom js file */}
        <Script src="/js/function.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
