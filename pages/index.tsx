import type { NextPage } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
import LoginForm from '../components/containers/LoginForm/LoginForm';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [text, setText] = useState('Hello MxnCommerce Admin Project');

  useEffect(() => {
    setTimeout(() => {
      setText('by');
    }, 1000);
  });

  const fetchGraphql = useCallback(async () => {
    const response = await fetch('/api/graphql', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ query: '{ user { name, age } }' }),
    });
    const { data } = await response.json();
    return data;
  }, []);

  const printUser = ({ name, age }: { name: string; age: number }) =>
    console.log(name, age);

  useEffect(() => {
    fetchGraphql().then(({ user: loginData }) => loginData.map(printUser));
  }, []);

  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default Home;
