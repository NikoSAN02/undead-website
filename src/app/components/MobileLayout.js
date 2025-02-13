'use client';

import Image from "next/image";
import "@fontsource/lilita-one";

export default function MobileLayout() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black p-4" 
         style={{ 
           backgroundImage: 'url(/assets/bg/bg-layer.png)',
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      {/* Main Logo */}
      <div className="mb-6 w-[320px]">
        <Image 
          src="/assets/logos/main-logo.png" 
          alt="Undead Protocol Logo" 
          width={320} 
          height={80} 
          className="drop-shadow-lg"
        />
      </div>

      {/* Center Content Box */}
      <div className="w-[320px]">
        <div className="relative bg-red-600 rounded-xl p-4 pb-20">
          {/* Main Text */}
          <div className="text-white relative">
            <p className="text-sm leading-relaxed font-['Lilita_One'] mb-2 pr-16">
              The world's in ruins, the dead don't stay dead. 
              It's kill or be consumed. Stack insane upgrades, 
              craft unstoppable builds, and turn the swarm 
              into dust. No second chances—just chaos, 
              carnage, and the will to survive. Play and earn 
              <span className="text-yellow-400"> $DED</span> token!
            </p>

            {/* Character - Positioned in top-right of text */}
            <div className="absolute top-0 right-0">
              <Image 
                src="/assets/character/frank-gif.gif" 
                alt="Frank Character" 
                width={60} 
                height={60}
              />
            </div>
          </div>

          {/* Play Button - Positioned at bottom */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <div className="relative w-[160px]">
              <Image 
                src="/assets/buttons/play.png" 
                alt="Play Button"
                width={160}
                height={48}
                className="transition-transform hover:opacity-0"
              />
              <Image 
                src="/assets/buttons/play-hover.png"
                alt="Play Button Hover"
                width={160}
                height={48}
                className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Game Preview */}
      <div className="w-[320px] h-[240px] relative mt-4">
        <Image 
          src="/assets/left-box/left-box.png" 
          alt="Game Preview" 
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Token Info Box */}
      <div className="w-[320px] h-[240px] relative mt-4">
        <Image 
          src="/assets/right-box/right-box.png" 
          alt="Token Info Box" 
          layout="fill"
          objectFit="contain"
        />
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <Image 
            src="/assets/icons/rightbox-icn.png" 
            alt="Token Icon" 
            width={80} 
            height={80}
          />
        </div>
        <div className="absolute bottom-16 w-full text-center">
          <p className="text-yellow-400 text-2xl font-bold">$DED</p>
        </div>
        <div className="absolute bottom-4 w-full text-center">
          <p className="text-yellow-400 text-xs">
            Introducing DED token!<br/>
            Play & earn
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-6 mt-6">
        <a href="#" className="transform hover:scale-110 transition-transform">
          <Image src="/assets/icons/twitter.png" alt="Twitter" width={32} height={32} />
        </a>
        <a href="#" className="transform hover:scale-110 transition-transform">
          <Image src="/assets/icons/dex.png" alt="Discord" width={32} height={32} />
        </a>
        <a href="#" className="transform hover:scale-110 transition-transform">
          <Image src="/assets/icons/telegram.png" alt="Telegram" width={32} height={32} />
        </a>
      </div>
    </div>
  );
}