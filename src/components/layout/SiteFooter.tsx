import { Typography } from 'antd';

export function SiteFooter() {
  return (
    <footer style={{ borderTop: '1px solid #1f1f1f', padding: '28px 0', background: '#050505' }}>
      <div style={{ width: 'min(1160px, 92vw)', margin: '0 auto' }}>
        <Typography.Text style={{ color: '#bfbfbf' }}>
          Benny Lebelo · Software Engineer · Built with Next.js, TypeScript, Three.js, and Ant Design
        </Typography.Text>
      </div>
    </footer>
  );
}
