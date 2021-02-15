scene = null;
camera = null;
renderer = null;

init_three();
init_lights();

const objects = [];
const spread = 15;

function init_lights()
{
  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);
}

addSolidGeometry(0, 0, new THREE.ConeGeometry(6, 8, 16));
create_points_obj();

// const fire_sticks = []
//
// for (i = 0; i < 100; i++)
// {
//
//     addSolidGeometry(i, 0, new THREE.OctahedronGeometry(1, 8));
// }


//main loop
function animate()
{
  requestAnimationFrame(animate);

  if (resizeRendererToDisplaySize(renderer))
  {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  // objects.forEach((obj, i) => {
  //   if (obj.position.y >= 30)
  //   {
  //     obj.position.y = 0
  //   }
  //   obj.position.y += 0.5;
  // });

  speed = 0.01;
  objects.forEach((obj, i) => {
    speed *= -1
    obj.rotation.x += speed;
    obj.rotation.y += speed;
  });


  renderer.render(scene, camera);
}

animate();
