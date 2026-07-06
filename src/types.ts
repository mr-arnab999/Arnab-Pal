import { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  category: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string;
  type: 'work' | 'education';
  link?: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}
