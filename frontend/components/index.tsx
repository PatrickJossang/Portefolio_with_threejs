import React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
//import for threejs
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '../lib/model';
import { BodyModel, Container, Footer, Header } from './styles';

// giving varibals new values
const ThreePc: React.FC = () => {
  const refBody = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [renderer, setRenderer] = useState<any>();
  const [_camera, setCamera] = useState<any>();
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI)),
  );
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState<any>();

  const handleWindowResize = useCallback(() => {
    const { current: container } = refBody;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, [renderer]);

  const easeOutCirc = (x: number) => {
    return Math.sqrt(1 - Math.pow(x - 1, 4));
  };

  //data container to render on cliend side  
  useEffect(() => {
    const { current: container } = refBody;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      //Stolen code but its for fast rendering and unpacking containers on client side 
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      //where camera is located to the model and model size 
      //TODO fix camera location after view is changed to perspectiv 
      const scale = scH * 0.0001 + 3;
      const camera = new THREE.OrthographicCamera(-scale, scale, scale, -scale / 1, 0.1, 50);
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      //Lightning to make the model viseball 
      const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.9 );
      scene.add( directionalLight );
      //What kind of controls i have inn the web 
      //TODO Change camera view to perspektiv after model is done 
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = false;
      controls.target = target;
      setControls(controls);

      //My model loader
      //TODO When publish to web applicasjon change path 
      loadGLTFModel(scene, '../model/90sPc.gltf', {
        receiveShadow: true,
        castShadow: true,
      }).then(() => {
        animate();
        //DO NOT SETT TO TRUE !!!!!
        setLoading(false);
      });
      //to make turnin look natrual
      let req: any = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 10;
          //spinning
          //TODO remove after model is done 
          camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      return () => {
        console.log('unmount');
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);

  //Make it visual in web 
  return (
    <Container>
      <Header>
        <h1>

        </h1>
      </Header>
      <BodyModel ref={refBody}>{loading && <p>loading...</p>}</BodyModel>
      <Footer>

      </Footer>
    </Container>
  );
};

export default ThreePc;