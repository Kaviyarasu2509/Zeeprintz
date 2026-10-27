import { useEffect, useRef, useState } from 'react';

export default function StrokeText({ children, delay = 0 }) {
  const element = useRef(null);
  const [metrics, setMetrics] = useState(null);
  useEffect(() => {
    const node = element.current;
    const measure = () => {
      const style = getComputedStyle(node);
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      context.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      const text = context.measureText(children);
      const height = node.offsetHeight;
      setMetrics({ width: node.offsetWidth, height, baseline: (height + text.actualBoundingBoxAscent - text.actualBoundingBoxDescent) / 2, size: parseFloat(style.fontSize), family: style.fontFamily, weight: style.fontWeight });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    measure();
    return () => observer.disconnect();
  }, [children]);
  return <span ref={element} className={`stroke-word ${metrics ? 'stroke-ready' : ''}`} style={{ '--stroke-delay': `${delay}s` }}><span className="stroke-fill">{children}</span>{metrics && <svg aria-hidden="true" className="stroke-outline" viewBox={`0 0 ${metrics.width} ${metrics.height}`}><text x="0" y={metrics.baseline} fontSize={metrics.size} fontFamily={metrics.family} fontWeight={metrics.weight}>{children}</text></svg>}</span>;
}
