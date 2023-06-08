const CameraPosition = () => {
  const {camera} = useThree();

  useFrame(() => {
    // for main
    camera.position.set(-10.5, 0.8, -8); 
    // camera.position.set(2, 1, 9);
  });

  return null;
};

export default CameraPosition