import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">UNDEAD PROTOCOL</h1>
      <div className="bg-red-600 p-4 rounded-lg mb-4">
        <p className="text-lg">
          The world's in ruins, the dead don't stay dead. It's kill or be consumed. Stack insane upgrades, craft unstoppable builds, and turn the swarm into dust. No second chances—just chaos, carnage, and the will to survive. Play and earn $DED token!
        </p>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4">PLAY</button>
      <div className="flex space-x-4">
        <button className="bg-gray-700 p-2 rounded-full">X</button>
        <button className="bg-gray-700 p-2 rounded-full">🦉</button>
      </div>
    </div>
  );
}
