import React from 'react';
import Head from 'next/head'
import Script from 'next/script'

export default function Header() {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>DisneyPlus Clone</title>
                <meta name="description" content="Plataforma do disney plus" />

                <link rel="shortcut icon" type="image/jpg" href="assets/images/favicon.ico" />

                <link rel="preconnect" href="https://fonts.gstatic.com" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <Script src='assets/js/teste.js'/>
        </>
    )
}