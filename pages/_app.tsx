import '../styles/globals.css';
import '../styles/GradientBackground.css';
import { AppProps } from 'next/app';
import { GradientBackground } from '../components';
import { Hero, Header, Footer } from '../components';
import React, { useState } from 'react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <>
            <Header setMobileMenuOpen={setMobileMenuOpen}/>
            <GradientBackground className='fixed' />
            <Component {...pageProps} />
            <Footer />
        </>
        );
}

export default MyApp;
