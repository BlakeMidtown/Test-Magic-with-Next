import type { NextPage } from 'next'
import { Magic } from "magic-sdk";
import { SolanaExtension } from "@magic-ext/solana";
import { useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
 useEffect(() => {
    const magic = new Magic("pk_live_C30971686E785C8D", {
      extensions: [
        new SolanaExtension({
          rpcUrl: "SOLANA_RPC_NODE_URL"
        })
      ]
    });
    console.log(magic);
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default Home
