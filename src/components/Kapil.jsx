/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useMemo } from "react";
import { useGLTF, useFBX, useAnimations } from "@react-three/drei";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Kapil = (props) => {
    const group = useRef();

    const { nodes, materials } = useGLTF("/65a1412bc941dcc8caefa255.glb");

    const {animations : sillyDancing } = useFBX("/Silly Dancing.fbx");
    const {animations : punching } = useFBX("/Punching.fbx");
    const {animations : reaction } = useFBX("/Reaction.fbx");
    const {animations : idle } = useFBX("/Idle.fbx");
    sillyDancing[0].name = "SillyDancing";
    punching[0].name = "Punching";
    reaction[0].name = "Reaction";
    idle[0].name = "Idle";

    // const { animation } = useControls({animation: {value: idle[0].name, options: {Idle: idle[0].name, SillyDancing: sillyDancing[0].name, Punching: punching[0].name, Reaction: reaction[0].name}}});

    // const { headFollow, cursorFollow, wireframe } = useControls({headFollow: false, cursorFollow: false, wireframe: false});

    const anims = useMemo(() => [idle[0], sillyDancing[0], punching[0], reaction[0]], []);
    
    const { actions } = useAnimations(anims, group);

    const animation = "Idle";

    useEffect(()=>{
        actions[animation].reset().fadeIn(0.5).play();
        return ()=>{
            actions[animation].reset().fadeOut(0.5);
        }
    }, [animation]);

    // useFrame((state, delta) => {
    //     if(headFollow){
    //         group.current.getObjectByName("Head").lookAt(state.camera.position);
    //     }
    //     if(cursorFollow){
    //         const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
    //         group.current.getObjectByName("Spine").lookAt(target);
    //     }
    // });

    // useEffect(()=>{
    //     Object.values(materials).forEach((material)=>{
    //         material.wireframe = wireframe;
    //     });
    // }, [wireframe]);

    return (
        <group {...props} dispose={null} ref={group}>
            <primitive object={nodes.Hips} />
            <skinnedMesh
                name="EyeLeft"
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeLeft.skeleton}
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
                name="EyeRight"
                geometry={nodes.EyeRight.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeRight.skeleton}
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Head"
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Teeth"
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Hair.geometry}
                material={materials.Wolf3D_Hair}
                skeleton={nodes.Wolf3D_Hair.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Body.geometry}
                material={materials.Wolf3D_Body}
                skeleton={nodes.Wolf3D_Body.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials.Wolf3D_Outfit_Top}
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
        </group>
    );
}

export default Kapil;

useGLTF.preload("/65a1412bc941dcc8caefa255.glb");
useFBX.preload("./iron_man/animations/Jab Cross.fbx");
useFBX.preload("./iron_man/animations/Jumping Down.fbx");
useFBX.preload("./iron_man/animations/Crouch To Stand.fbx");
useFBX.preload("./iron_man/animations/Silly Dancing.fbx");
