import { Menu, Bell, Coins } from "lucide-react";

interface HeaderProps {
  onProfileClick: () => void;
}

export default function Header({ onProfileClick }: HeaderProps) {
  return (
    <header className="px-4 pt-4 pb-3 bg-background">
      <div className="flex items-center justify-between">
        <button
          onClick={onProfileClick}
          className="inline-flex icon-lg items-center justify-center rounded-full hover:bg-muted text-foreground active:scale-95 transition-all"
          aria-label="Open profile menu"
        >
          <Menu className="icon-sm" />
        </button>
        <div className="flex items-center gap-2">
          <button
            className="inline-flex icon-lg items-center justify-center rounded-full hover:bg-muted text-foreground active:scale-95 transition-all"
            aria-label="Navi coins and rewards"
          >
            <Coins className="icon-sm" />
          </button>
          <button
            className="inline-flex icon-lg items-center justify-center rounded-full hover:bg-muted text-foreground active:scale-95 transition-all"
            aria-label="Notifications"
          >
            <Bell className="icon-sm" />
          </button>
        </div>
      </div>
    </header>
  );
}
