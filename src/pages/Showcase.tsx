import { useEffect, useState } from 'react';

export default function Showcase() {
  const [iframeUrl, setIframeUrl] = useState('');

  useEffect(() => {
    // Use current origin for the iframe (the deployed Lovable app URL)
    // In production, replace with your actual deployed URL
    const url = window.location.origin;
    setIframeUrl(url);
  }, []);

  return (
    <div className="showcase-container min-h-screen flex items-center justify-center overflow-hidden relative">
      {/* Gradient backdrop */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at 20% 50%, 
            rgba(99, 102, 241, 0.35) 0%, 
            rgba(79, 70, 229, 0.25) 40%, 
            rgba(55, 48, 163, 0.15) 80%
          ), #0f172a`,
        }}
      />

      {/* Device mockup container - hidden on mobile */}
      <div className="device-mockup-wrapper hidden md:flex items-center justify-center p-8">
        <div className="device-mockup animate-float">
          {/* iPhone 16 Pro Frame */}
          <div 
            className="relative"
            style={{
              width: '420px',
              height: '880px',
              borderRadius: '60px',
              background: 'linear-gradient(135deg, #8a8a8d 0%, #6e6e73 100%)',
              padding: '14px',
              boxShadow: `
                0 50px 100px rgba(0, 0, 0, 0.4),
                0 20px 40px rgba(0, 0, 0, 0.3),
                inset 0 0 0 1px rgba(255, 255, 255, 0.1)
              `,
            }}
          >
            {/* Dynamic Island */}
            <div 
              className="absolute top-[14px] left-1/2 -translate-x-1/2 z-10"
              style={{
                width: '126px',
                height: '37px',
                borderRadius: '20px',
                background: '#000',
              }}
            />

            {/* Screen */}
            <div 
              className="relative w-full h-full rounded-[48px] overflow-hidden bg-black"
              style={{
                boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
              }}
            >
              {iframeUrl && (
                <iframe
                  src={iframeUrl}
                  title="Navi Financial App"
                  className="w-full h-full border-0"
                  style={{
                    width: '393px',
                    height: '852px',
                  }}
                  loading="lazy"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view - show direct iframe */}
      <div className="mobile-direct-view md:hidden w-full h-screen">
        {iframeUrl && (
          <iframe
            src={iframeUrl}
            title="Navi Financial App"
            className="w-full h-full border-0"
            loading="lazy"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
          />
        )}
      </div>

      {/* Optional: Info overlay for desktop */}
      <div className="hidden lg:block absolute bottom-8 left-8 text-white/80 max-w-md">
        <h2 className="text-3xl font-light mb-2">Navi</h2>
        <p className="text-white/60 text-sm">Your Financial Super App</p>
      </div>
    </div>
  );
}
