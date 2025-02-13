'use client';

import Image from "next/image";
import "@fontsource/lilita-one";

export default function DesktopLayout() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black" 
         style={{ 
           backgroundImage: 'url(/assets/bg/bg-layer.png)',
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      {/* Main Logo */}
      <div className="mb-8">
        <Image 
          src="/assets/logos/main-logo.png" 
          alt="Undead Protocol Logo" 
          width={400} 
          height={100} 
          className="drop-shadow-lg"
        />
      </div>

      {/* Content Row */}
      <div className="flex justify-center items-start space-x-6 w-full max-w-5xl px-4">
        {/* Left Box */}
        <div className="w-[280px] h-[400px] relative">
          <Image 
            src="/assets/left-box/left-box.png" 
            alt="Left Box" 
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Center Box */}
        <div className="relative w-[400px]">
          <div className="relative">
            <Image 
              src="/assets/center-box/center-box.png"
              alt="Center Box Background"
              width={400}
              height={300}
            />
            <div className="absolute top-0 left-0 p-6 text-white">
              <p className="text-xl leading-relaxed mb-8 font-['Lilita_One']">
                The world's in ruins, the dead don't stay dead. It's kill or be consumed. 
                Stack insane upgrades, craft unstoppable builds, and turn the swarm into dust. 
                No second chances—just chaos, carnage, and the will to survive. 
                Play and earn <span className="text-yellow-400">$DED</span> token!
              </p>
              
              {/* Character */}
              <div className="absolute bottom-20 right-4">
                <Image 
                  src="/assets/character/frank-gif.gif" 
                  alt="Frank Character" 
                  width={80} 
                  height={80}
                />
              </div>

              {/* Play Button */}
              <div className="relative w-full mt-4 flex justify-center">
                <div className="relative">
                  <Image 
                    src="/assets/buttons/play.png" 
                    alt="Play Button"
                    width={200}
                    height={60}
                    className="transition-transform hover:opacity-0"
                  />
                  <Image 
                    src="/assets/buttons/play-hover.png"
                    alt="Play Button Hover"
                    width={200}
                    height={60}
                    className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div className="w-[280px] h-[400px] relative">
          <Image 
            src="/assets/right-box/right-box.png" 
            alt="Right Box" 
            width={280}
            height={400}
            className="w-full h-full object-contain"
          />
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
            <Image 
              src="/assets/icons/rightbox-icn.png" 
              alt="Token Icon" 
              width={100} 
              height={100}
            />
          </div>
          <div className="absolute bottom-20 w-full text-center">
            <p className="text-yellow-400 text-3xl font-bold">$DED</p>
          </div>
          <div className="absolute bottom-4 w-full text-center">
            <p className="text-yellow-400 text-sm">
              Introducing DED token!<br/>
              Play & earn
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-8 mt-8">
        <a href="#" className="transform hover:scale-110 transition-transform">
          <Image src="/assets/icons/twitter.png" alt="Twitter" width={40} height={40} />
        </a>
        <a href="#" className="transform hover:scale-110 transition-transform">
          <Image src="/assets/icons/dex.png" alt="Dex" width={40} height={40} />
        </a>
        <a href="#" className="transform hover:scale-110 transition-transform">
          <Image src="/assets/icons/telegram.png" alt="Telegram" width={40} height={40} />
        </a>
      </div>
    </div>
  );
}