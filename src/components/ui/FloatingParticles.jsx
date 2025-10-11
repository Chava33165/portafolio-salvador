// ============================================
// src/components/ui/FloatingParticles.jsx
// ============================================
import React from 'react';

export default function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float"
          style={{
            width: Math.random() * 6 + 2 + 'px',
            height: Math.random() * 6 + 2 + 'px',
            background: `radial-gradient(circle, ${i % 2 === 0 ? '#ef4444' : '#3b82f6'} 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 7}s`,
            opacity: Math.random() * 0.5 + 0.3
          }}
        />
      ))}
    </div>
  );
}