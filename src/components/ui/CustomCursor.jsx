import React from 'react';

export default function CustomCursor({ mousePosition, cursorVariant }) {
  return (
    <div 
      className="fixed w-6 h-6 border-2 border-red-400 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
      style={{ 
        left: mousePosition.x - 12, 
        top: mousePosition.y - 12,
        transform: cursorVariant === 'hover' ? 'scale(1.5)' : 'scale(1)'
      }}
    />
  );
}