import React from 'react';
import './intro.css';
export default function Intro() {
  return (
    <>
      <div id='introduction'>
        <h1>Welcome to the ReKuberate Documentation</h1>
        <h1 className='test'>Introduction</h1>
        <p>
          ReKuberate is a developer tool that allows you to seamlessly interact with your kubernetes clusters and nodes
          without the need to traverse through the terminal. Cluster health is displayed in real time using color coded
          statuses to show whether a node is running, pending, or failed. Along with visualization, Rekuberate also
          offers robust analytical graphs powered by the grafana/prometheus/helm stack, allowing users to interpret
          their local OS health and data availability while also providing real-time data on the overall health of a
          cluster.
        </p>
      </div>
      <div id='install'>
        <h1>____________________________________</h1>
        <h1 className='test'>Installation</h1>
        <p>1. Click on download</p>
        <p>2. Extract the zip file</p>
        <p>3. Open the extracted folder in VSCode</p>
        <p>4. Install dependencies with 'npm install'</p>
        <p>5. Start the application with 'npm run electron'</p>
        <p>6. Visit localhost:9000 and login using admin and prom-operator </p>
        <p>7. Enjoy!</p>
      </div>
      <div id='about'>
        <h1>____________________________________</h1>
        <h1 className='test'>About</h1>
        <p>
          First time setup of ReKuberate will require an initial sign up and login, where all info is hashed and
          authenticated. Once at the home page, select submit to initialize data scraping from your kubernetes cluster.
          Make sure the cluster is running or else no data will be collected and a blank page will appear.
        </p>
        <p>
          The displayed nodes are color-coded: <span style={{ color: 'red' }}>error</span>,{' '}
          <span style={{ color: 'yellow' }}>pending</span>, <span style={{ color: 'green' }}>running</span>.
        </p>
        <p>
          Hovering over each node will display additional details. The metrics page displays selected data displayed in
          graph form to give you a quick and easy overview of your cluster health and resource usage.
        </p>
      </div>
    </>
  );
}
