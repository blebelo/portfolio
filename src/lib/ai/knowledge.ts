import { education } from '@/data/education';
import { experiences } from '@/data/experience';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';

export const knowledgeBase = {
  profile,
  experiences,
  projects,
  education,
  skills
};

export function buildContext() {
  return JSON.stringify(knowledgeBase, null, 2);
}
