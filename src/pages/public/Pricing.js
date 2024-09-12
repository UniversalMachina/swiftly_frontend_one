
import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
    
    import CustomPricing from "../../components/public/Pricing/CustomPricing.jsx";
import Contact3 from "../../components/public/Pricing/Contact3.js";

const Pricing = () => {


        
          const gradientRef = useRef(null);

        useEffect(() => {
        const handleResize = () => {
          if (gradientRef.current) {
            const bufferPercent = 0.4;
            const buffer = document.body.scrollHeight * bufferPercent;
            gradientRef.current.style.height = `${document.body.scrollHeight + buffer}px`;
          }
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    
      const Grid = () => {
        const gridRef = useRef();
      
        useFrame(() => {
          if (gridRef.current) {
            gridRef.current.rotation.x += 0.0002;
            gridRef.current.rotation.y += 0.0002;
          }
        });
      
        return (
          <group ref={gridRef} rotation={[Math.PI / 4, Math.PI / 4, Math.PI / 6]}>
            {/* Larger main grid, slightly offset */}
            <gridHelper 
              args={[100, 100, new THREE.Color(0xdddddd), new THREE.Color(0xeeeeee)]} 
              position={[-5, -5, 0]} 
            >
              <meshBasicMaterial opacity={0.5} transparent={true} />
            </gridHelper>
            
            {/* Smaller overlay grid, rotated differently */}
            <gridHelper 
              args={[50, 50, new THREE.Color(0xdddddd), new THREE.Color(0xeeeeee)]} 
              rotation={[0, 0, Math.PI / 4]}
              position={[10, 10, 5]}
            >
              <meshBasicMaterial opacity={0.15} transparent={true} />
            </gridHelper>
          </group>
        );
      };
      const GridBackground = () => {
        return (
          <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} />
            <Grid />
          </Canvas>
        );
      };
        
        
        


  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start tracking-[normal] mq450:h-auto">
    
    <GridBackground />
    
      <div className="w-full h-[100px]"/>
    <CustomPricing />
<Contact3 />

    </div>
  );
};

export default Pricing;
    