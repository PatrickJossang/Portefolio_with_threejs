import React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
//import for threejs
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '../lib/model';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { BodyModel, Container, Footer, Header } from './styles';

// giving varibals new values
const THREEjs: React.FC = () => {
  const refBody = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [renderer, setRenderer] = useState<any>();
  const [_camera, setCamera] = useState<any>();
  const [target] = useState(new THREE.Vector3(0, 0, 0));
  const [initialCameraPosition] = useState(new THREE.Vector3(0, 0, 0));
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState<any>();

    // If the user resizes the window, the camera and renderer are updated.
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
      //Fast rendering and unpacking containers on client side 
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      //where camera is located to the model and model size 
      //TODO fix camera location after view is changed to perspectiv 
      const scale = scH * 0.0001 + 3;
      const camera = new THREE.OrthographicCamera(scale / -2, scale / 2, scale / 2, scale / -2, 1, 1000);
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      //Lightning to make the model viseball 
      //white lights
      const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
      scene.add( directionalLight );
      //yellow amber light 
      // const directionalsLight = new THREE.DirectionalLight( 0xfebe00, 0.2 );
      // scene.add( directionalsLight );
      //What kind of controls i have inn the web 
      //TODO Change camera view to perspektiv after model is done 
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = false;
      controls.target = target;
      setControls(controls);

      //My model loader
      loadGLTFModel(scene, '/Sushi.glb', {
        receiveShadow: true,
        castShadow: true,
      })
        .then(() => {
          animate();
        })
        .catch((error) => {
          console.error(error);
          alert(`An error occurred while loading the model: ${error}`);
        })
        .finally(() => {
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
          //posision of camera
          camera.position.y = 10;
          //spinning
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };
      //help to stopp rendering when not in use
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
  <>
  <Container>
      <BodyModel ref={refBody}>{loading && <p>loading...</p>}</BodyModel>
  </Container>
  </>  
  );
};

export default THREEjs;