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
          without the need to traverse through the terminal. With our tool you can visualize your clusters' health
          through our color-coded script that check if either your node is running, pending, or failed. Along with our
          visualizer tool, Rekuberate also offers robust analytical graphs powered by the grafana/prometheus/helm stack
          that allows the user to interpret their local OS health and data availability while also allowing the user get
          real-time data on the overall health the cluster
        </p>
      </div>
      <div id='install'>
        <h1>____________________________________</h1>
        <h1 className='test'>Installation</h1>
        <p>Installation is incredible simple.</p>
        <p>1. Head over to ReKuberate.org</p>
        <p>2. Click on download</p>
        <p>3. Extract the zip file</p>
        <p>4. Open the extracted folder in VSCode</p>
        <p>5. Install dependencies with 'npm install'</p>
        <p>6. Start the application with 'npm run electron'</p>
        <p>7. Enjoy!</p>
      </div>
      <div id='about'>
        <h1>____________________________________</h1>
        <h1 className='test'>About</h1>
        <p>
          First time setup of ReKuberate will require an initial log in. Log in data is hashed and authenticated with
          bCrypt. Select the file location of where the application is downloaded and initiate data scraping from your
          kubernetes cluster. Make sure your cluster is running or else no data will be collected Hovering over each
          node will display additional details.
        </p>
        <p>The nodes will be color-coded: red: error, yellow: pending, green: running</p>
        <p>Hovering over each node will display additional details.</p>
        <p>
          The metrics page displays selected data information displayed in a graph form to give you a quick and easy
          overview of your cluster health and computer usage.
        </p>
      </div>
    </>
  );
}
