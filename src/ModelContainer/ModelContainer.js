import React, { useEffect } from "react";
import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as THREE from 'three';
import './ModelContainer.scss';
import { Menu } from "../Menu/Menu";

export const ModelContainer = () => {

    // create scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const ambient = new THREE.AmbientLight(0xffffff, 0.75);
    const controls = new OrbitControls( camera, renderer.domElement );

    // load mmd
    const loader = new MMDLoader();

    useEffect(() => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        document.getElementById("model").appendChild(renderer.domElement);
        camera.position.z = 28;

        controls.enablePan = false;
        controls.enableZoom = false;

        scene.background = new THREE.Color(0x333136)

        loader.load('./model/sw_3d_2.pmx', // relative to /public folder
            (mmd) => {
                scene.receiveShadow = true;
                mmd.castShadow = true;
                let rotateBy = 0.5 * Math.PI / 180;
                setInterval(() => {
                    mmd.rotateY(rotateBy);
                }, 50)
                scene.add(mmd);
                scene.add(ambient);
            })

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        animate();
    }, [])


    return (
        <div className="cmp-model-container">
            <span className="header">hacked?owner=silver-wolf</span>
            <div className="model" id="model"/>
            <Menu />
        </div>
    )
}