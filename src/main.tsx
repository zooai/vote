import React from 'react';
import ReactDOM from 'react-dom/client';
import { resolveAddresses, config } from '../config';

function App() {
  const chainId = 200200;
  const network = resolveAddresses({ chainId });
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 24 }}>
      <h1 style={{ color: config.branding.primaryColor }}>{config.brand} Vote</h1>
      <p>Domain: {config.domain}</p>
      <p>Chain ID: {network.chainId}</p>
      <p>RPC: {network.rpcUrl}</p>
      <p>Safe factory: {network.safeFactory ?? '(not yet deployed)'}</p>
      <p>Module governor: {network.moduleGovernor ?? '(not yet deployed)'}</p>
    </div>
  );
}

const root = document.getElementById('root');
if (!root) throw new Error('zoo-vote: #root mount point missing');
ReactDOM.createRoot(root).render(<App />);
