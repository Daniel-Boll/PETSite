import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

import useSWR from "swr";

import styles from "../styles/Home.module.css";

const Home = () => {
  const router = useRouter();
  const locale = router.locale;

  const { data, error } = useSWR(`/locales/${locale}.json`, fetcher);
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        {data?.language == "pt" ? (
          <p>
            <strong>pt</strong> | en
          </p>
        ) : (
          <p>
            pt | <strong>en</strong>
          </p>
        )}
      </div>
      <div className={styles.mainCard}>
        <Image
          src="/images/pet_logo_complete.png"
          alt="What is PETComp?"
          width={235}
          height={54}
          className={styles.petLogo}
        />
        <p className={styles.whatIs}>{data?.home.whatIs}</p>
      </div>
      <hr className={styles.divisor} />
      <div className={styles.whoWeAre}>
        {data?.home.secondaryText
          .split("?")
          .slice(0, 2)
          .map((question) => (
            <p>{question}?</p>
          ))}
      </div>
      {data?.home.cardsPa.map(([name, image]) => (
        <div className={styles.secondaryCard}>
          <Image
            src={image}
            alt="What is PETComp?"
            width={125}
            height={90}
            className={styles.cardsImage}
          />
          <h2>{name}</h2>
        </div>
      ))}
      {/* Footer */}
    </div>
  );
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default Home;
