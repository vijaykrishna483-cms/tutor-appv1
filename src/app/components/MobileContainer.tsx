import { ReactNode } from "react";

interface MobileContainerProps {
  children: ReactNode;
  hasBottomNav?: boolean;
}

export function MobileContainer({ children, hasBottomNav = false }: MobileContainerProps) {
  return (
    <div className="mx-auto max-w-[430px] min-h-svh relative bg-background border-x border-border/50 shadow-sm">
      <div className={hasBottomNav ? "pb-24" : "pb-10"}>
        {children}
      </div>
    </div>
  );
}
