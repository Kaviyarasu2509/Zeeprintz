import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
export default function PrintCarousel({ products, index, playing }) {
  const host = useRef(null);
  const settings = useRef({ index, playing });
  const [fallback, setFallback] = useState(false);
  useEffect(() => { settings.current = { index, playing }; }, [index, playing]);
  useEffect(() => {
    const container = host.current;
    let renderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); }
    catch { setFallback(true); return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, 1, .1, 100);
    camera.position.z = 9;
    const geometry = new THREE.PlaneGeometry(2.55, 1.85);
    const loader = new THREE.TextureLoader();
    const meshes = products.map(([, file]) => {
      const texture = loader.load(`/images/home/${encodeURIComponent(file)}`);
      texture.colorSpace = THREE.SRGBColorSpace;
      const material = new THREE.ShaderMaterial({
        uniforms: { picture: { value: texture }, resolution: { value: new THREE.Vector2() } },
        vertexShader: 'varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
        fragmentShader: `uniform sampler2D picture; uniform vec2 resolution; varying vec2 vUv;
        void main(){
        vec2 aspect=vec2(2.55/1.85,1.0);
        vec2 q=abs((vUv-.5)*aspect)-(aspect*.5-vec2(.028));
        float distanceToEdge=length(max(q,0.0))+min(max(q.x,q.y),0.0)-.02;
        float edgeWidth=max(fwidth(distanceToEdge),.0001);
        float alpha=1.0-smoothstep(-edgeWidth,edgeWidth,distanceToEdge);
        vec3 c=texture2D(picture,vUv).rgb;float g=dot(c,vec3(.299,.587,.114));
        float side=smoothstep(resolution.x*.5-3.,resolution.x*.5+3.,gl_FragCoord.x);
        gl_FragColor=vec4(mix(vec3(g)*.72,c,side),alpha);}`, side: THREE.DoubleSide,
        transparent: true, depthWrite: false
      });
      const mesh = new THREE.Mesh(geometry, material); scene.add(mesh); return mesh;
    });
    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      renderer.setSize(width, height); camera.aspect = width / height; camera.updateProjectionMatrix();
      meshes.forEach(mesh => mesh.material.uniforms.resolution.value.set(width * renderer.getPixelRatio(), height * renderer.getPixelRatio()));
    };
    const observer = new ResizeObserver(resize); observer.observe(container); resize();
    let frame, phase = index, last = performance.now(), previousIndex = index;
    const animate = now => {
      const delta = Math.min((now - last) / 1000, .05); last = now;
      if (previousIndex !== settings.current.index) {
        if (!settings.current.playing) phase += ((settings.current.index - previousIndex + products.length * 1.5) % products.length) - products.length / 2;
        previousIndex = settings.current.index;
      }
      if (settings.current.playing) phase += delta * .18;
      meshes.forEach((mesh, position) => {
        const offset = ((position - phase + products.length * 100 + products.length / 2) % products.length) - products.length / 2;
        const x = offset * 2.85;
        mesh.position.set(x, 0, Math.min(x * x * .032, 2.5));
        mesh.rotation.y = -Math.atan(x * .065); mesh.visible = Math.abs(offset) < 3.6;
      });
      renderer.render(scene, camera); frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); meshes.forEach(mesh => { mesh.material.uniforms.picture.value.dispose(); mesh.material.dispose(); }); geometry.dispose(); renderer.dispose(); renderer.domElement.remove(); };
  }, [products]);
  return <div ref={host} className="carousel-images" aria-label="Printing portfolio">{fallback && <div className="carousel-fallback">{products.map(([name,file]) => <img key={file} src={`/images/home/${encodeURIComponent(file)}`} alt={name} />)}</div>}</div>;
}
