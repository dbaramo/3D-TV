/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Timothy Ahene (https://sketchfab.com/timothyahene)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/crt-tv-9ba4baa106e64319a0b540cf0af5aa9e
title: CRT TV
*/

import React, { useEffect, useState } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import videoList from "./video-list.json"
import { useFrame } from "@react-three/fiber";
import moment from "moment";

export default function Tv(props) {
  const { nodes, materials } = useGLTF("./crt_tv_2_mb.glb");
  const [currentVid, changeVid] = useState("./videos/static.mp4");
  const [vidLength, changeVidLength] = useState(moment());
  const [vidIndex, changeVidIndex] = useState(0);
  const [initialRenderStarted, setRenderStarted] = useState(false)

  const getNextVideo = () => {

    if(vidIndex >= videoList.length){
      changeVidIndex(0)
    }

    let video = videoList[vidIndex]
    let { url, length } = video

    changeVid(url)
    changeVidLength(moment().add(length, 's'))

    changeVidIndex(vidIndex + 1)
    
    return video
  }

  useEffect(() => {
    getNextVideo()
    setRenderStarted(true)
  }, [])

  const videoTexture = useVideoTexture(currentVid, { muted: true, loop: false, start: true })  
  
  useFrame((state, delta) => {
    if(moment().isSameOrAfter(vidLength) && initialRenderStarted){
      getNextVideo()
    }
  })

  return (
    <group {...props}>
      <group
        position={[0, 0, -36.57]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <group rotation={[Math.PI / 2, props.turn || 0, 0]}>
          <group position={[0, 26.84, 0]}>
            <group position={[0, -0.04, 0]} scale={[0.99, 0.99, 1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial.geometry}
                material={materials.TVback}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_1.geometry}
              material={materials.TVfront}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_2.geometry}
              material={materials.TVfront}
            />
            <group position={[0, 0, -166.62]} scale={398.22}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial_3.geometry}
              >
              <meshBasicMaterial map={videoTexture} />
              </mesh>
            </group>
            <group
              position={[3.17, -20.05, -18.3]}
              rotation={[0, 0, -0.6]}
              scale={[0.38, 0.38, 0.22]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial_4.geometry}
                material={materials.TVfront}
              />
            </group>
            <group position={[0, -26.84, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial_5.geometry}
                material={materials.TVfront}
              />
            </group>
            <group
              position={[11.06, -26.3, -18.65]}
              rotation={[-Math.PI, 0, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial_6.geometry}
                material={materials.TVfront}
              />
            </group>
            <group
              position={[26.91, -17.62, -17.22]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={[0.17, 0.16, 0.17]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial_7.geometry}
                material={materials.TVfront}
              />
            </group>
            <group position={[0, -19.83, 0.85]} scale={0.11}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial_8.geometry}
                material={materials.TVfront}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./crt_tv_2_mb.glb");
