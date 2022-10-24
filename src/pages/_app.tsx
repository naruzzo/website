import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import nProgress from 'nprogress'
import '#styles'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter()
    useEffect(() => {
        const _start = () => nProgress.start()
        const _complete = () => nProgress.done()
        const _error = () => _complete() && window.scrollTo(0, 0)

        router.events.on('routeChangeStart', _start)
        router.events.on('routeChangeComplete', _complete)
        router.events.on('routeChangeError', _error)

        return () => {
            router.events.off('routeChangeStart', _start)
            router.events.off('routeChangeComplete', _complete)
            router.events.off('routeChangeError', _error)
        }
    }, [router.events])

    return <Component {...pageProps} />
}

export default App
