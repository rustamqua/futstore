import Head from "next/head";
import React, { Fragment } from "react";
const Header = () => {
  return (
    <div>
      <Head>
        <title>futstore</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        ></meta>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Sans+Extra+Condensed&display=swap"
          rel="stylesheet"
        ></link>
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx global>{`
        body {
          background: white;
          margin: 0;
          padding: 0;
          width: 100%;

          font-family: "Roboto", sans-serif;
        }
      `}</style>
    </div>
  );
};
export default Header;
