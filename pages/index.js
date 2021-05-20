import Head from "next/head";
import { useRouter } from "next/router";

import useSWR from "swr";

import styles from "../styles/Home.module.css";

const Home = () => {
  const router = useRouter();
  const locale = router.locale;

  const { data, error } = useSWR(`/locales/${locale}.json`, fetcher);

  return (
    <div className={styles.container}>
      <h1>Hey! I'm a home - {data?.language}</h1>
    </div>
  );
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default Home;
