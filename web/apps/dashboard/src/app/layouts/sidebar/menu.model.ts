export interface MenuItem {
  id?: string;
  label?: any;
  icon?: string;
  link?: string;
  click?: () => void;
  subItems?: any;
  isTitle?: boolean;
  badge?: any;
  parentId?: number;
  isLayout?: boolean;
  isCollapsed?: any;
}
