import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Script from 'next/script';

import 'styles/globals.css';
import { Navigation } from 'components/navigation';
import { Seo } from 'components/seo';
import type { Page } from 'lib/client/types/page';

const MyApp: NextPage<Omit<AppProps, 'Component'> & { Component: Page }> = ({ Component, pageProps }) => (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ''}`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ''}', {
            page_path: window.location.pathname,
          });
        `}
    </Script>
    <Seo description={Component.description} title={Component.title} />
    <div className="h-screen w-full bg-slate-200 p-2 pb-12 md:pb-0">
      <div className="max-w[1600px] mx-auto h-full">
        <div className="flex h-full w-full flex-row">
          <Navigation />
          <div className="w-full overflow-y-scroll rounded-md bg-slate-100">
            <div className="mx-auto mt-6 w-full max-w-2xl px-2 md:mt-12 lg:mt-24">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default MyApp;
