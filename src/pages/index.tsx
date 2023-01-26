import Head from 'next/head'
// import { useRouter } from 'next/router'
// import { useEffect } from 'react';

export default function IndexComponent() {

  // const router = useRouter();

  // useEffect(() => {
  //   router.push({
  //     pathname: "/home",
  //     search: "from=index"
  //   })
  // }, [])


  return (
    <>
      <Head>
        <title>Mini Apps</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='wrapper'>
      </div>
      
    </>
  )
}
