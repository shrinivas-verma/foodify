import React from 'react';
import ReactDOM from 'react-dom/client';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <>
      <AppLayout></AppLayout>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);
