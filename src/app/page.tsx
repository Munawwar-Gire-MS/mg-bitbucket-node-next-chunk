'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

const UbuntuChunk = dynamic(() => import('../components/appChunk'), {
  loading: () => <p>Loading your Ubuntu animation... 🚀</p>,
})

export default function Home() {
  const [show, setShow] = useState(false)

  return (
    <main style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Animation Fun 🎉</h1>
      <button
        style={{
          padding: '15px 30px',
          fontSize: '18px',
          cursor: 'pointer',
          borderRadius: '8px',
          backgroundColor: '#E95420',
          color: '#fff',
          border: 'none',
          marginTop: '20px',
        }}
        onClick={() => setShow(true)}
      >
        Load Ubuntu Animation 🔥
      </button>
      {show && <UbuntuChunk />}
    </main>
  )
}
