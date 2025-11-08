import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [parol, setParol] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setStatus('Yuklanmoqda...');
    await new Promise(r => setTimeout(r, 2000));

    if (email === 'test@example.com' && parol === '1234') {
      setStatus('Kirish muvaffaqiyatli!');
    } else {
      setStatus('Notogri malumot');
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 300, margin: 'auto' }}>
      <h2>Kirish Formasi</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ display: 'block', marginBottom: 10, width: '100%' }}
      />
      <input
        type="password"
        placeholder="Parol"
        value={parol}
        onChange={e => setParol(e.target.value)}
        style={{ display: 'block', marginBottom: 10, width: '100%' }}
      />
      <button onClick={handleLogin} disabled={loading}>
      Kirish
      </button>
      <p>{status}</p>
    </div>
  );
}
