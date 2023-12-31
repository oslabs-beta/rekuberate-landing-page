import React, { useState } from 'react';
import wheel from './pictures/wheel.svg';
import metrics from './pictures/metrics.png';
import '../CSS/App.css';
import AnyChart from 'anychart-react';
import anychart from 'anychart';
import Footer from './Footer';

export default function HomePage() {
  const chartData = {
    nodes: [
      {
        hovered: { fill: '#51cf51' },
        id: 'minikube',
        name: 'minikube',
        nodeName: 'minikube',
        normal: { fill: '#008000' },
        purpose: 'Control Plane',
        selected: { fill: '#036803' },
        status: 'Running',
      },
      {
        hovered: { fill: '#51cf51' },
        id: 'minikube-0',
        name: 'alertmanager-prometheus-kube-prometheus-alertmanager-0',
        normal: { fill: '#008000' },
        purpose: 'Pod',
        selected: { fill: '#036803' },
        status: 'Running',
      },
      {
        hovered: { fill: '#51cf51' },
        id: 'minikube-1',
        name: 'prometheus-grafana-cd8448b68-d5m7p',
        normal: { fill: '#008000' },
        purpose: 'Pod',
        selected: { fill: '#036803' },
        status: 'Running',
      },
      {
        hovered: { fill: '#fc7474' },
        id: 'minikube-2',
        name: 'prometheus-kube-prometheus-admission-patch-ngq94',
        normal: { fill: '#ff0000' },
        purpose: 'Pod',
        selected: { fill: '#940000' },
        status: 'Completed',
      },
      {
        hovered: { fill: '#51cf51' },
        id: 'minikube-3',
        name: 'prometheus-kube-prometheus-operator-6d94dc655b-tg6nz',
        normal: { fill: '#008000' },
        purpose: 'Pod',
        selected: { fill: '#036803' },
        status: 'Running',
      },
      {
        hovered: { fill: '#51cf51' },
        id: 'minikube-4',
        name: 'prometheus-kube-state-metrics-8674d7b847-8cs7f',
        normal: { fill: '#008000' },
        purpose: 'Pod',
        selected: { fill: '#036803' },
        status: 'Running',
      },
      {
        hovered: { fill: '#51cf51' },
        id: 'minikube-5',
        name: 'prometheus-prometheus-kube-prometheus-prometheus-0',
        normal: { fill: '#008000' },
        purpose: 'Pod',
        selected: { fill: '#036803' },
        status: 'Running',
      },
      {
        hovered: { fill: '#51cf51' },
        id: 'minikube-6',
        name: 'prometheus-prometheus-node-exporter-j7gfv',
        normal: { fill: '#008000' },
        purpose: 'Pod',
        selected: { fill: '#036803' },
        status: 'Running',
      },
      {
        hovered: { fill: '#51cf51' },
        id: 'minikube-m02',
        name: 'minikube-m02',
        nodeName: 'minikube-m02',
        normal: { fill: '#008000' },
        purpose: 'Worker',
        selected: { fill: '#036803' },
        status: 'Running',
      },
      {
        hovered: { fill: '#51cf51' },
        id: 'minikube-m02-0',
        name: 'fabrizzio-7bf84d6cdd-jfffx',
        normal: { fill: '#008000' },
        purpose: 'Pod',
        selected: { fill: '#036803' },
        status: 'Running',
      },
      {
        hovered: { fill: '#51cf51' },
        id: 'minikube-m02-1',
        name: 'hunter-7f6bb7649-f7nd4',
        normal: { fill: '#008000' },
        purpose: 'Pod',
        selected: { fill: '#036803' },
        status: 'Running',
      },
      {
        hovered: { fill: '#fc7474' },
        id: 'minikube-m02-2',
        name: 'kai-8654fbf4bf-rm5kd',
        normal: { fill: '#ff0000' },
        purpose: 'Pod',
        selected: { fill: '#940000' },
        status: 'OOMKilled',
      },
      {
        hovered: { fill: '#51cf51' },
        id: 'minikube-m02-3',
        name: 'prometheus-prometheus-node-exporter-mvx6h',
        normal: { fill: '#008000' },
        purpose: 'Pod',
        selected: { fill: '#036803' },
        status: 'Running',
      },
      {
        hovered: { fill: '#51cf51' },
        id: 'minikube-m03',
        name: 'minikube-m03',
        nodeName: 'minikube-m03',
        normal: { fill: '#008000' },
        purpose: 'Worker',
        selected: { fill: '#036803' },
        status: 'Running',
      },
      {
        hovered: { fill: '#fac86a' },
        id: 'minikube-m03-0',
        name: 'kevin-65c6dc4c89-9kjtx',
        normal: { fill: '#ffa500' },
        purpose: 'Pod',
        selected: { fill: '#ca8606' },
        status: 'Pending',
      },
      {
        hovered: { fill: '#51cf51' },
        id: 'minikube-m03-1',
        name: 'prometheus-prometheus-node-exporter-s9d2h',
        normal: { fill: '#008000' },
        purpose: 'Pod',
        selected: { fill: '#036803' },
        status: 'Running',
      },
      {
        hovered: { fill: '#51cf51' },
        id: 'minikube-m03-2',
        name: 'thad-59bc548768-8dq9q',
        normal: { fill: '#008000' },
        purpose: 'Pod',
        selected: { fill: '#036803' },
        status: 'Running',
      },
      {
        hovered: { fill: '#51cf51' },
        id: 'minikube-m04',
        name: 'minikube-m04',
        nodeName: 'minikube-m04',
        normal: { fill: '#008000' },
        purpose: 'Worker',
        selected: { fill: '#036803' },
        status: 'Running',
      },
      {
        hovered: { fill: '#51cf51' },
        id: 'minikube-m04-0',
        name: 'prometheus-prometheus-node-exporter-qrq4l',
        normal: { fill: '#008000' },
        purpose: 'Pod',
        selected: { fill: '#036803' },
        status: 'Running',
      },
    ],
    edges: [
      { from: 'minikube', to: 'minikube-0' },
      { from: 'minikube', to: 'minikube-1' },
      { from: 'minikube', to: 'minikube-2' },
      { from: 'minikube', to: 'minikube-3' },
      { from: 'minikube', to: 'minikube-4' },
      { from: 'minikube', to: 'minikube-5' },
      { from: 'minikube', to: 'minikube-6' },
      { from: 'minikube', to: 'minikube' },
      { from: 'minikube-m02', to: 'minikube-m02-0' },
      { from: 'minikube-m02', to: 'minikube-m02-1' },
      { from: 'minikube-m02', to: 'minikube-m02-2' },
      { from: 'minikube-m02', to: 'minikube-m02-3' },
      { from: 'minikube', to: 'minikube-m02' },
      { from: 'minikube-m03', to: 'minikube-m03-0' },
      { from: 'minikube-m03', to: 'minikube-m03-1' },
      { from: 'minikube-m03', to: 'minikube-m03-2' },
      { from: 'minikube', to: 'minikube-m03' },
      { from: 'minikube-m04', to: 'minikube-m04-0' },
      { from: 'minikube', to: 'minikube-m04' },
    ],
  };

  const chart = anychart.graph(chartData);
  chart.background('#d8d8d8');

  const background = chart.background();
  background.stroke({
    keys: ['#fffeee00'],
    thickness: 20,
    angle: 90,
  });
  background.cornerType('round');
  background.corners(10);

  const nodes = chart.nodes();
  nodes.normal().height(30);
  nodes.hovered().height(45);

  nodes.labels().enabled(true);
  nodes.labels().format('{%nodeName}');
  nodes.labels().fontSize(12);
  nodes.labels().fontWeight(600);
  nodes.labels().fontColor('black');

  nodes.tooltip().fontSize(18);
  nodes.tooltip().background('white');
  nodes.tooltip().fontColor('black');
  nodes.tooltip().format(`name: {%name}\nstatus: {%status}\ntype: {%purpose}`);

  const edges = chart.edges();
  edges.normal().stroke('#7ec5ff');
  edges.selected().stroke('#7ec5ff');
  edges.arrows({
    enabled: true,
    size: 18,
  });

  chart.container('container');

  const [MousePosition, setMousePosition] = useState({ left: 0, top: 0 });

  function handleMouseMove(e) {
    setMousePosition({ left: -e.pageX / 8, top: -e.pageY / 8 });
  }

  return (
    <>
      <header
        className='App-header backgroundImg'
        style={{ backgroundPositionX: MousePosition.left, backgroundPositionY: MousePosition.top }}
        onMouseMove={(e) => {
          handleMouseMove(e);
        }}>
        <img src={wheel} className='App-logo' alt='logo' />
        <h1 style={{ color: 'white' }}>Introducing ReKuberate</h1>
        <button
          className='download'
          onClick={() => {
            window.location.href = 'https://github.com/oslabs-beta/ReKuberate/archive/refs/tags/v1.0.5.zip';
          }}>
          Download
        </button>
      </header>
      <div className='key-features'>
        <h1 className='first-comp'>Presenting ReKuberate's Powerful Kubernetes Pod Visualizer and Metrics Display</h1>
        <div>
          <div className='Pods-description'>
            An aesthetic GUI allows users to interact with clusters and view pod health in real-time. Color variations
            show which pods are active, pending, or down all with a quick glance.
          </div>
          <AnyChart instance={chart} />
        </div>
        <div>
          <img src={metrics} className='metrics' />
          <div className='Graphs-description'>
            Utilizing the power of Grafana to display real-time metrics, ReKuberate illustrates the health of your
            operating system while also analytically tracking operating pods and nodes.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
