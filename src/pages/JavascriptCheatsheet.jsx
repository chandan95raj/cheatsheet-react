import { useState } from "react";
import { Spin } from 'antd';
const JavascriptCheatsheet = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
          fontSize: '24px',
          fontWeight: 'bold',
        }}>
          <Spin size="large" />
        </div>
      )}
      <div style={{ width: '100%', height: '90vh', display: loading ? 'none' : 'block' }}>
        <iframe
          src="https://chandan95raj.github.io/javascript-cheatsheet/"
          title="Cheat Sheet"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            overflow: 'hidden',
          }}
          allowFullScreen
          onLoad={() => setLoading(false)}
        />
      </div>
    </>
  );
}

export default JavascriptCheatsheet