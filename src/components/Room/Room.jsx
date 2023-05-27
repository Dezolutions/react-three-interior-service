
// const Room = ({gltfPath}) => {
//   const { camera, gl } = useThree();
//   camera.position.set(0,6,4)

//   return (
//     <>
//     <OrbitControls
//       camera={camera}
//       gl={gl}
//       enableDamping
//       dampingFactor={0.1}
//     />
//     <primitive object={gltfPath.scene} scale={1} />
//     </>
//   )
// }

// export default Room;

import React from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { gsap } from 'gsap'
export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export function Room(props) {
  const { nodes, materials } = useGLTF('/models/sandra_pedras/scene.gltf')
  const ref = React.useRef();
  const scroll = useScroll();
  const tl = React.useRef();
  // 
  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });
  React.useLayoutEffect(() => {
    tl.current = gsap.timeline();

    

    // Office Rotation
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: -1, z: 0 },
      0
    );
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: 0, z: 0 },
      1
    );
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: 1.6, z: 0 },
      2
    );
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: 1.6, z: 0 },
      3
    );
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: -0.2, y: 1.6, z: 0 },
      4
    );

    // Office movement
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: -2,
        y: -0.6,
        z: -6,
      },
      0
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: -1.8,
        y: -0.6,
        z: -8.7,
      },
      2
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: 1.3,
        y: -0.8,
        z: -8.5,
      },
      3
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: 1.4,
        y: 0.5,
        z: -4,
      },
      4
    );
  }, []);
  return (
    <group ref={ref} {...props} dispose={null}>
        <group scale={0.01}>
          <group position={[-220, 105.5, -384.15]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['vol01_003_lod2_mod05_001_Material_#2143566176_0'].geometry} material={materials.Material_2143566176} />
            <mesh geometry={nodes.vol01_003_lod2_mod05_001_0_vol01_01_lod2_001_0.geometry} material={materials['0_vol01_01_lod2_001']} />
            <mesh geometry={nodes['vol01_003_lod2_mod05_001_Material_#2143566177_0'].geometry} material={materials.Material_2143566177} />
          </group>
          <group position={[-440, 170, 82.5]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['vol01_003_lod2_mod10_002_Material_#2143566176_0'].geometry} material={materials.Material_2143566176} />
            <mesh geometry={nodes.vol01_003_lod2_mod10_002_0_vol01_01_lod2_001_0.geometry} material={materials['0_vol01_01_lod2_001']} />
            <mesh geometry={nodes['vol01_003_lod2_mod10_002_Material_#2143566177_0'].geometry} material={materials.Material_2143566177} />
          </group>
          <group position={[220, 105.5, -384.15]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['vol01_003_lod2_mod05_002_Material_#2143566176_0'].geometry} material={materials.Material_2143566176} />
            <mesh geometry={nodes.vol01_003_lod2_mod05_002_0_vol01_01_lod2_001_0.geometry} material={materials['0_vol01_01_lod2_001']} />
            <mesh geometry={nodes['vol01_003_lod2_mod05_002_Material_#2143566177_0'].geometry} material={materials.Material_2143566177} />
          </group>
          <group position={[446.65, 105.5, -202.5]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['vol01_003_lod2_mod05_003_Material_#2143566176_0'].geometry} material={materials.Material_2143566176} />
            <mesh geometry={nodes.vol01_003_lod2_mod05_003_0_vol01_01_lod2_001_0.geometry} material={materials['0_vol01_01_lod2_001']} />
            <mesh geometry={nodes['vol01_003_lod2_mod05_003_Material_#2143566177_0'].geometry} material={materials.Material_2143566177} />
          </group>
          <group position={[-286.64, 147.53, 371.23]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['Rounded+Edge+TV_Empty_material_0'].geometry} material={materials.Empty_material} />
            <mesh geometry={nodes['Rounded+Edge+TV_PVC_Black_Matte6_0'].geometry} material={materials.PVC_Black_Matte6} />
            <mesh geometry={nodes['Rounded+Edge+TV_PVC_Black_Matte7_0'].geometry} material={materials.PVC_Black_Matte7} />
            <mesh geometry={nodes['Rounded+Edge+TV_0137_Black_0'].geometry} material={materials['0137_Black']} />
            <mesh geometry={nodes['Rounded+Edge+TV_Material_#107_Slot_#7_0'].geometry} material={materials.Material_107_Slot_7} />
          </group>
          <group position={[124.91, 95.25, -5.02]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['4_Kitchen_Cooktop001_4_Metal_Black_Glossy_0'].geometry} material={materials['4_Metal_Black_Glossy']} />
            <mesh geometry={nodes['4_Kitchen_Cooktop001_4_Metal_White_Glossy_0'].geometry} material={materials['4_Metal_White_Glossy']} />
          </group>
          <group position={[-295, 259.41, -328.94]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 10.09]}>
              <group position={[-533.04, -684.36, 0.5]}>
                <mesh geometry={nodes['Shape003_Material_#114_0'].geometry} material={materials.Material_114} />
                <mesh geometry={nodes['Shape003_Material_#115_0'].geometry} material={materials.Material_115} />
              </group>
            </group>
          </group>
          <group position={[-215, 259.41, -328.94]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 10.09]}>
              <group position={[-533.04, -684.36, 0.5]}>
                <mesh geometry={nodes['Shape004_Material_#114_0'].geometry} material={materials.Material_114} />
                <mesh geometry={nodes['Shape004_Material_#115_0'].geometry} material={materials.Material_115} />
              </group>
            </group>
          </group>
          <group position={[-134.99, 259.41, -328.94]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 10.09]}>
              <group position={[-533.04, -684.36, 0.5]}>
                <mesh geometry={nodes['Shape005_Material_#114_0'].geometry} material={materials.Material_114} />
                <mesh geometry={nodes['Shape005_Material_#115_0'].geometry} material={materials.Material_115} />
              </group>
            </group>
          </group>
          <group position={[135, 259.41, -328.94]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 10.09]}>
              <group position={[-533.04, -684.36, 0.5]}>
                <mesh geometry={nodes['Shape006_Material_#114_0'].geometry} material={materials.Material_114} />
                <mesh geometry={nodes['Shape006_Material_#115_0'].geometry} material={materials.Material_115} />
              </group>
            </group>
          </group>
          <group position={[215, 259.41, -328.94]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 10.09]}>
              <group position={[-533.04, -684.36, 0.5]}>
                <mesh geometry={nodes['Shape007_Material_#114_0'].geometry} material={materials.Material_114} />
                <mesh geometry={nodes['Shape007_Material_#115_0'].geometry} material={materials.Material_115} />
              </group>
            </group>
          </group>
          <group position={[295.01, 259.41, -328.94]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 10.09]}>
              <group position={[-533.04, -684.36, 0.5]}>
                <mesh geometry={nodes['Shape008_Material_#114_0'].geometry} material={materials.Material_114} />
                <mesh geometry={nodes['Shape008_Material_#115_0'].geometry} material={materials.Material_115} />
              </group>
            </group>
          </group>
          <group position={[-322.5, 259.41, 332.5]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 10.09]}>
              <group position={[-533.04, -684.36, 0.5]}>
                <mesh geometry={nodes['Shape009_Material_#114_0'].geometry} material={materials.Material_114} />
                <mesh geometry={nodes['Shape009_Material_#115_0'].geometry} material={materials.Material_115} />
              </group>
            </group>
          </group>
          <group position={[-242.5, 259.41, 332.5]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 10.09]}>
              <group position={[-533.04, -684.36, 0.5]}>
                <mesh geometry={nodes['Shape010_Material_#114_0'].geometry} material={materials.Material_114} />
                <mesh geometry={nodes['Shape010_Material_#115_0'].geometry} material={materials.Material_115} />
              </group>
            </group>
          </group>
          <group position={[-162.49, 259.41, 332.5]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 10.09]}>
              <group position={[-533.04, -684.36, 0.5]}>
                <mesh geometry={nodes['Shape011_Material_#114_0'].geometry} material={materials.Material_114} />
                <mesh geometry={nodes['Shape011_Material_#115_0'].geometry} material={materials.Material_115} />
              </group>
            </group>
          </group>
          <group position={[-242.86, 259.57, 144.62]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Box076_Empty_material_0.geometry} material={materials.Empty_material_0} />
            <mesh geometry={nodes['Box076_*1_0'].geometry} material={materials.material} />
          </group>
          <group position={[440, 164.14, 101.72]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['vol01_003_lod2_mod17_001_Material_#2143566176_0'].geometry} material={materials.Material_2143566176} />
            <mesh geometry={nodes.vol01_003_lod2_mod17_001_0_vol01_01_lod2_001_0.geometry} material={materials['0_vol01_01_lod2_001']} />
            <mesh geometry={nodes['vol01_003_lod2_mod17_001_Material_#2143566177_0'].geometry} material={materials.Material_2143566177} />
          </group>
          <group position={[0, 137.5, -7.5]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[147.92, 203.75, -92.71]} rotation={[0, 0, 3.14]}>
              <mesh geometry={nodes['tampo_001_Material_#2146797865_0'].geometry} material={materials.Material_2146797865} position={[-139.08, -58.15, 25.21]} />
            </group>
            <group position={[-285, -355.56, -137.5]} rotation={[0, 0, Math.PI]}>
              <mesh geometry={nodes['rack_Material_#2146797863_0'].geometry} material={materials.Material_2146797863} position={[0, 0, 45.88]} />
            </group>
            <mesh geometry={nodes['Object002_Material_#2146797859_0'].geometry} material={materials.Material_2146797859} position={[722.68, 268.48, -137.5]} />
            <mesh geometry={nodes['mesacentro_Material_#2146797858_0'].geometry} material={materials.Material_2146797858} position={[-231.03, 231.49, -134.24]} rotation={[0, 0, Math.PI / 2]} scale={[-1, 1, 1]} />
            <mesh geometry={nodes['Object071_Material_#2146797860_0'].geometry} material={materials.Material_2146797860} position={[-290.56, 122.77, -79.74]} rotation={[0, 0, 1.58]} />
            <mesh geometry={nodes['Box078_Material_#2146797856_0'].geometry} material={materials.Material_2146797856} position={[-57.5, -209.01, -137.5]} />
            <mesh geometry={nodes['Shape002_Elements5_Material_#2146797864_0'].geometry} material={materials.Material_2146797864} position={[722.68, 268.48, -137.5]} />
            <mesh geometry={nodes['Object290_Material_#2146797862_0'].geometry} material={materials.Material_2146797862} position={[722.68, 268.48, -137.5]} />
            <mesh geometry={nodes['hbms_046_Material_#2146797857_0'].geometry} material={materials.Material_2146797857} position={[-312.57, -24.54, -109.11]} scale={[-1, 1, 1]} />
          </group>
          <group position={[0, 137.5, -7.5]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['Object110_Material_#2146797861_0'].geometry} material={materials.Material_2146797861} position={[125, 10, -137.5]} />
          </group>
          <group position={[-428.73, 147.53, -192.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
            <group position={[-72.58, -11.43, -44.79]}>
              <mesh geometry={nodes['Rounded+Edge+TV001_Empty_material_0'].geometry} material={materials.Empty_material} />
              <mesh geometry={nodes['Rounded+Edge+TV001_PVC_Black_Matte6_0'].geometry} material={materials.PVC_Black_Matte6} />
              <mesh geometry={nodes['Rounded+Edge+TV001_PVC_Black_Matte7_0'].geometry} material={materials.PVC_Black_Matte7} />
              <mesh geometry={nodes['Rounded+Edge+TV001_0137_Black_0'].geometry} material={materials['0137_Black']} />
              <mesh geometry={nodes['Rounded+Edge+TV001_Material_#107_Slot_#7_0'].geometry} material={materials.Material_107_Slot_7_0} />
            </group>
          </group>
          <group position={[-242.5, 254.42, 361.67]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
            <mesh geometry={nodes._5156_Empty_material_0.geometry} material={materials.Empty_material_1} position={[9.53, 0, 12.78]} scale={0} />
          </group>
          <group position={[-420.47, 254.42, -198.53]} rotation={[-Math.PI / 2, 0, Math.PI]}>
            <mesh geometry={nodes._5156001_Empty_material_0.geometry} material={materials.Empty_material_1} position={[9.53, 0, 12.78]} scale={0} />
          </group>
          <mesh geometry={nodes['Group_051_Material_#2146797845_0'].geometry} material={materials.Material_2146797845} position={[235.81, 94, 85.58]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['Object287_Material_#47_0'].geometry} material={materials.Material_47} position={[-2.4, 93.1, 196.55]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.yhsj1102_vray_CRNvray_yhsj77_0.geometry} material={materials['vray_CRN.vray_yhsj77']} position={[-367.84, 1.03, -101.92]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.yhsj1103_vray_CRNvray_yhsj78_0.geometry} material={materials['vray_CRN.vray_yhsj78']} position={[-389.24, 64.99, -83.84]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.yhsj1104_vray_CRNvray_yhsj77_0.geometry} material={materials['vray_CRN.vray_yhsj77']} position={[-374.99, 71.84, -95.81]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['Box055_Material_#114_0'].geometry} material={materials.Material_114} position={[111.61, 270, 95.79]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['Object288_Material_#115_0'].geometry} material={materials.Material_115} position={[111.61, 270, 95.79]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['Box056_Material_#114_0'].geometry} material={materials.Material_114} position={[352.93, 270, 95.88]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['Object289_Material_#115_0'].geometry} material={materials.Material_115} position={[352.93, 270, 95.88]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes._10899_Color_008_0.geometry} material={materials.Color_008} position={[56.92, 173.36, -200.84]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes._10899001_Color_008_0.geometry} material={materials.Color_008} position={[126.92, 173.36, -200.84]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes._10899002_Color_008_0.geometry} material={materials.Color_008} position={[196.92, 173.36, -200.84]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['Object287_Material_#2146797866_0'].geometry} material={materials.Material_2146797866} position={[-425.61, 4.31, 3.52]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object291_0_vol01_02_lod2_003_0.geometry} material={materials['0_vol01_02_lod2_003']} position={[314, 106.5, -27.5]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['Object292_Material_#2146797867_0'].geometry} material={materials.Material_2146797867} position={[722.68, 0, -275.98]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['Object293_Material_#115_0'].geometry} material={materials.Material_115} position={[722.68, 0, -275.98]} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
    </group>
  )
}

useGLTF.preload('/models/sandra_pedras/scene.gltf')