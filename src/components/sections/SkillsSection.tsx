'use client';

import {
  SiAntdesign,
  SiApachekafka,
  SiCamunda,
  SiCss,
  SiDocker,
  SiDotnet,
  SiGithub,
  SiGithubactions,
  SiGit,
  SiHtml5,
  SiJira,
  SiJavascript,
  SiJsonwebtokens,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOwasp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSqlite,
  SiTypescript
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import { FaAws } from 'react-icons/fa6';
import {
  TbApi,
  TbBinaryTree,
  TbBrandCSharp,
  TbBrandOauth,
  TbBug,
  TbDatabaseSearch
} from 'react-icons/tb';
import { skills } from '@/data/skills';
import { Card, Col, Row, Tag, Typography } from 'antd';

type SkillLogo = {
  Icon: IconType;
  color: string;
};

const skillLogoMap: Record<string, SkillLogo> = {
  'C#': { Icon: TbBrandCSharp, color: '#9b4de0' },
  TypeScript: { Icon: SiTypescript, color: '#3178C6' },
  JavaScript: { Icon: SiJavascript, color: '#f7df1e' },
  Python: { Icon: SiPython, color: '#3776ab' },
  SQL: { Icon: SiMysql, color: '#4479a1' },
  React: { Icon: SiReact, color: '#61dafb' },
  'Next.js': { Icon: SiNextdotjs, color: '#f4f4f4' },
  'Ant Design': { Icon: SiAntdesign, color: '#0170fe' },
  HTML: { Icon: SiHtml5, color: '#e34f26' },
  CSS: { Icon: SiCss, color: '#1572b6' },
  'ASP.NET Core': { Icon: SiDotnet, color: '#7e5bef' },
  'ABP Framework': { Icon: SiDotnet, color: '#7e5bef' },
  'REST APIs': { Icon: SiPostman, color: '#ff6c37' },
  'Entity Framework Core': { Icon: SiDotnet, color: '#7e5bef' },
  'OAuth 2.0': { Icon: TbBrandOauth, color: '#4ca1f5' },
  JWT: { Icon: SiJsonwebtokens, color: '#f2d16b' },
  'SQL Server': { Icon: SiSqlite, color: '#3f8ec4' },
  PostgreSQL: { Icon: SiPostgresql, color: '#4169e1' },
  NoSQL: { Icon: SiMongodb, color: '#47a248' },
  'Data Modeling': { Icon: TbBinaryTree, color: '#9ec5ff' },
  'Query Optimization': { Icon: TbDatabaseSearch, color: '#98bdf2' },
  'AWS EC2': { Icon: FaAws, color: '#ff9900' },
  'AWS RDS': { Icon: FaAws, color: '#ff9900' },
  'AWS S3': { Icon: FaAws, color: '#ff9900' },
  Docker: { Icon: SiDocker, color: '#2496ed' },
  'GitHub Actions': { Icon: SiGithubactions, color: '#2088ff' },
  'CI/CD': { Icon: SiGithubactions, color: '#2088ff' },
  Linux: { Icon: SiLinux, color: '#fcc624' },
  Git: { Icon: SiGit, color: '#f05032' },
  Agile: { Icon: SiJira, color: '#2684ff' },
  Debugging: { Icon: TbBug, color: '#ff7d7d' },
  'Code Review': { Icon: SiGithub, color: '#f4f4f4' },
  BPMN: { Icon: SiCamunda, color: '#fc5d0d' },
  'System Integration': { Icon: SiApachekafka, color: '#f4f4f4' },
  'Secure Development': { Icon: SiOwasp, color: '#f4f4f4' }
};

function getSkillLogo(skill: string): SkillLogo {
  return skillLogoMap[skill] ?? { Icon: TbApi, color: '#d8bc85' };
}

export function SkillsSection() {
  return (
    <section className="section">
      <Typography.Title level={2} className="section-title">Skills</Typography.Title>
      <Row gutter={[16, 16]}>
        {skills.map((group) => (
          <Col xs={24} md={12} key={group.category}>
            <Card className="card-outline" title={group.category}>
              <div className="skills-grid">
                {group.items.map((item) => {
                  const { Icon, color } = getSkillLogo(item);

                  return (
                    <Tag
                      key={item}
                      icon={
                        <span className="skill-logo">
                          <Icon color={color} />
                        </span>
                      }
                      className="skill-tag"
                    >
                      {item}
                    </Tag>
                  );
                })}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
