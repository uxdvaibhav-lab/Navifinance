import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const requestRef = useRef<number>();

  // Check if device has hover capability (desktop)
  useEffect(() => {
    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setIsVisible(hasHover);

    if (!hasHover) return;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      // Smooth interpolation for cursor movement
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      
      setPosition({ x: currentX, y: currentY });
      requestRef.current = requestAnimationFrame(animate);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect hover over interactive elements
    const handleInteractiveHover = (e: Event) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, [role="button"], input, textarea, select, [data-interactive]');
      setIsHovering(!!isInteractive);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleInteractiveHover);
    
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleInteractiveHover);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor circle */}
      <div
        className="custom-cursor fixed pointer-events-none z-[9999] mix-blend-normal"
        style={{
          left: 0,
          top: 0,
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          willChange: 'transform',
        }}
      >
        <div
          className={`
            rounded-full backdrop-blur-sm transition-all duration-150 ease-out
            ${isClicking ? 'cursor-click' : ''}
            ${isHovering ? 'cursor-hover' : 'cursor-default'}
          `}
          style={{
            width: isHovering ? '56px' : '44px',
            height: isHovering ? '56px' : '44px',
            backgroundColor: isClicking 
              ? 'rgba(75, 0, 123, 0.45)' 
              : isHovering 
                ? 'rgba(75, 0, 123, 0.35)' 
                : 'rgba(75, 0, 123, 0.25)',
            boxShadow: isHovering 
              ? '0 0 20px rgba(75, 0, 123, 0.3)' 
              : '0 0 10px rgba(75, 0, 123, 0.2)',
          }}
        />
        
        {/* Inner precision dot for clickable elements */}
        {isHovering && (
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary transition-all duration-150"
            style={{
              backgroundColor: 'rgba(75, 0, 123, 0.8)',
            }}
          />
        )}
      </div>
    </>
  );
}
