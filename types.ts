import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string; // The "one-line core description"
  description: string; // The detailed description
  catchphrase: string; // The text starting with 👉
  url: string;
  icon: LucideIcon;
  tags?: string[];
}