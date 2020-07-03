import React from 'react';
import Layout from '../../components/Layout'

const CodeAnalytics = () => {
  return (
    <Layout>
      <h3>Code Analytics (Last 30 Days)</h3>
      <h2>Languages</h2>
      <figure>
        <embed src="https://wakatime.com/share/@2ffa0070-6ea3-4ad7-b86e-ff9956471de9/8fa70342-f0f6-49ee-9327-13fec53d9f2b.svg" />
      </figure>
      <h2>Editor</h2>
      <figure>
        <embed src="https://wakatime.com/share/@2ffa0070-6ea3-4ad7-b86e-ff9956471de9/f3ab64fb-c7be-45b4-aee7-406da110025b.svg" />
      </figure>
    </Layout>
  )
};

export default CodeAnalytics;
