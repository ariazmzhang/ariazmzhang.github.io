import { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react"
import '../styles/globals.css';
import '../styles/GradientBackground.css';
import { GradientBackground } from '../components';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <GradientBackground className='fixed' />
            <Component {...pageProps} />
        </SessionProvider>
        );
}

export default MyApp;
