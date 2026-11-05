import React, { useState } from 'react';

export default function App() {
  const [loadError, setLoadError] = useState(false);
  const dashboardUrl = `${import.meta.env.BASE_URL}hospital-dashboard.html`;

  if (loadError) {
    return (
      <main className="load-error">
        <h1>Dashboard could not be loaded</h1>
        <p>Check that the dashboard file exists in the public folder, then reload.</p>
        <a href={dashboardUrl}>Open the dashboard directly</a>
      </main>
    );
  }

  return (
    <main className="dashboard-host">
      <iframe
        className="dashboard-frame"
        src={dashboardUrl}
        title="MARK Hospitals management dashboard"
        onError={() => setLoadError(true)}
      />
    </main>
  );
}
