'use client'

import Image from 'next/image'

export default function UbuntuChunk() {
  return (
    <div style={{ marginTop: '50px' }}>
      <h2 style={{ color: '#E95420' }}>Welcome to Ubuntu-powered Chunk! 🐧</h2>
      <div className="rotating-logo">
        <Image
          src="/ubuntu-logo.png"
          alt="Ubuntu Logo"
          width={200}
          height={200}
        />
      </div>
      <style jsx>{`
        .rotating-logo {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          animation: rotate 03s linear infinite;
	  will-change: transform;
	  transform: translateZ(0);
        }

        @keyframes rotate {
		0% {
		  	transform: rotate(0deg);
	    	}
    10% {
      transform: rotate(36deg);
    }
    20% {
      transform: rotate(72deg);
    }
    30% {
      transform: rotate(108deg);
    }
    40% {
      transform: rotate(144deg);
    }
    50% {
      transform: rotate(180deg);
    }
    60% {
      transform: rotate(216deg);
    }
    70% {
      transform: rotate(252deg);
    }
    80% {
      transform: rotate(288deg);
    }
    90% {
      transform: rotate(324deg);
    }
    100% {
      transform: rotate(360deg);
    }
        }
      `}</style>
    </div>
  )
}

