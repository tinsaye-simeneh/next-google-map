import React, { useEffect, useRef } from "react";
import { Viewer, Ion, SceneMode } from "cesium";
import "./css/widgets.css"; // Ensure this path is correct

const CesiumMap = () => {
  const cesiumContainer = useRef(null);

  useEffect(() => {
    try {
      Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhNTllYjZlMy1jMjMyLTQ5YzQtODc1OS0wYzgyODVmNjU5NjgiLCJpZCI6MjQ3NDQ5LCJpYXQiOjE3Mjg2NjQ2MjF9.Xma0fpFrjQMZngABOYougd9HPrKFImrzYbMzSgU0T2k"; // Ensure this is correct

      const viewer = new Viewer(cesiumContainer.current, {
        sceneMode: SceneMode.SCENE3D,
        animation: false,
        timeline: false,
      });

      return () => {
        if (viewer) viewer.destroy();
      };
    } catch (error) {
      console.error("Error initializing Cesium:", error);
    }
  }, []);

  return (
    <div ref={cesiumContainer} style={{ width: "100%", height: "100vh" }} />
  );
};

export default CesiumMap;
