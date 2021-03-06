import React, { useContext } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { FirebaseContext } from '../services/firebase'
import { StyledFirebaseAuth } from 'react-firebaseui'

const IndexPage = () => {
  const Firebase = useContext(FirebaseContext)
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      <StyledFirebaseAuth
        uiConfig={Firebase.uiConfig}
        firebaseAuth={Firebase.auth}
      />
      <p style={{ color: `purple`, fontSize: `36px` }}>Hello world</p>
      <p>Now go build something great.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <br />
      <Link to="/About/">Go to About</Link>
    </Layout>
  )
}

export default IndexPage
