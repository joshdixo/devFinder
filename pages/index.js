import Head from 'next/head';
import BasicInfo from '../components/BasicInfo';
import Stats from '../components/Stats';
import styles from '../styles/Home.module.scss';
import { useState, useEffect } from 'react';

const Home = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState({
    avatar: 'https://avatars.githubusercontent.com/u/74875203?v=4',
    username: 'joshdixo',
    name: 'Josh',
    regdate: '2020-11-22T18:42:04Z',
    bio: '',
    repos: '12',
    following: '2',
    followers: '1',
    location: 'Nottingham, UK'
  });


  const handleSearch = () => {
    return fetch('https://api.github.com/users/'+ username)
    .then(response => response.json())
    .then(response => {
      return response = setUser({
        avatar: response.avatar_url,
        username: response.login,
        name: response.name,
        regdate: response.created_at,
        bio: response.bio,
        repos: response.public_repos,
        following: response.following,
        followers: response.followers,
        location: response.location
      })
    })
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>DevFinder</title>
        <meta name="description" content="Github DevFinder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.inputWrapper}>
          <input className={styles.input}
            type="text"
            id="usersearch"
            value={username}
            placeholder="Search Github username"
            onChange={event => setUsername(event.target.value)} />
          <button className={styles.submitButton}
            onClick={handleSearch}>Search</button>
        </div>

        <div className={styles.devWrapper}>
          <BasicInfo user={user} />

          {user.bio ? <span className={styles.description}>{user.bio}</span> :
          <span className={styles.description}>No bio</span>}
        

          <Stats user={user} />

          {user.location ?  <span className={styles.description}>{user.location}</span> :
          <span className={styles.description}>Unknown location</span>}

        </div>

      </main>

    </div>
  )
}

export default Home;
