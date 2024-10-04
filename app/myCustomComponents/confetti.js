import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';

const ConfettiCannon = () => {
  const [showCard, setShowCard] = useState(false);

  const shootConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setShowCard(true);

    setTimeout(() => {
      setShowCard(false);
    }, 5000);
  };

  return (
    <>
    <Button onClick={shootConfetti}>Register</Button>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', background: '#e7f3fe' }}>
      {showCard && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#8A0303',
          padding: '30px',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
          zIndex: 2,
          animation: 'fadeIn 0.5s ease-in-out',
          width: '90%',
          maxWidth: '600px',
          border: '1px solid #e0e0e0'
        }}>
          <h2 style={{ marginBottom: '15px', fontSize: '24px' ,color:'white'}}>🎉 Congratulations! 🎉</h2>
          <p style={{ marginBottom: '10px', fontSize: '18px',color:'white' }}>Welcome to the Blomo Family!</p>
          <p style={{ fontSize: '16px', color:'white' }}>Great job on your submission!</p>
          <p style={{ fontSize: '16px', color:'white' }}>Your application is under review. We will get back to you soon!</p>
        </div>
      )}
      

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
    </>
  );
};

export default ConfettiCannon;
