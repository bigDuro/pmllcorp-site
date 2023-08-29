import Head from 'next/head';
import { usePathname } from 'next/navigation';
import RootLayout from '../layout/index';
import { seoData } from '../constants/seoData';
import './globals.css'


function App({ Component, pageProps }) {
  const path = usePathname();
  const pathname = path?.split('/')[1]
  const seo = seoData[pathname] || seoData['home'];

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <link rel="canonical" href={seo.canonical} />
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords}></meta>
        <meta property="og:image" content={seo.openGraph.ogImage.ogImage} />
        <meta property="og:image:alt" content={seo.openGraph.ogImage.ogImageAlt} />
        <meta property="og:image:width" content={seo.openGraph.ogImage.ogImageWidth} />
        <meta property="og:image:height" content={seo.openGraph.ogImage.ogImageHeight} />
        <meta property="og:image:type" content={seo.openGraph.ogImage.ogImageType} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content={seo.twitter.twitterSummaryCard.summaryCardImage} />
        <meta name="twitter:image:alt" content={seo.twitter.twitterSummaryCard.summaryCardImageAlt} />
        <meta name="twitter:site" content={seo.twitter.twitterSummaryCard.summaryCardSiteUsername} />
      </Head>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default App