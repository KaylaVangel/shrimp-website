import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Slideshow from './components/slideshow.js';

export default function Home() {
  return (
    <>
        <h1>
          Welcome to Kayla'a Caridina
        </h1>
      <Slideshow/>
        <p>
          Caridina are a species of freshwater shrimp that come in a variety of colors and patterns. 
          They are moderately difficult to keep but if you follow the instructions provided you too
          should be able to keep these beautiful shrimp.
        </p>

        <p>
          Unfortunately at this time we only offer local pickup.
        </p>
    </>
  )
}
