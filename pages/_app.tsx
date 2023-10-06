import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/GradientBackground.css';
import { GradientBackground } from '../components';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <>
            <GradientBackground className='fixed' />
            <Component {...pageProps} />
        </>
        );
}

export default MyApp;
