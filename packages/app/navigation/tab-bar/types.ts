export interface TabItemProps {
  label: string;
  icon?: string | number;
  href: string;
  isCamera?: boolean;
}

export interface TabBarProps {
  currentPath?: string;
  onTabPress?: (path: string) => void;
}
