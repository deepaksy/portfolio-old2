import Document, {Html,Head,Main,NextScript} from 'next/document'

const NextDocument = () => {
  return (
    <Html>
        <Head>
        <script src="https://kit.fontawesome.com/812181c617.js" async crossOrigin="anonymous"></script>
        </Head>
        <body>
            <Main/>
            <NextScript/>
        </body>
    </Html>
  )
}

export default NextDocument