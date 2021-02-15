function addObject(x, y, obj)
{
  obj.position.x = x * spread;
  obj.position.y = y * spread;

  scene.add(obj);
  objects.push(obj);
}

function createMaterial()
{
  const material = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
  });

  const hue = Math.random();
  const saturation = 1;
  const luminance = .5;
  material.color.setHSL(hue, saturation, luminance);

  return material;
}

function addSolidGeometry(x, y, geometry)
{
  const mesh = new THREE.Mesh(geometry, createMaterial());
  addObject(x, y, mesh);
}

function create_points_obj()
{
  const geometry = new THREE.SphereGeometry(10, 10, 10);
  const material = new THREE.PointsMaterial({color: 'green',
                                              size: 1, });
  const points = new THREE.Points(geometry, material);
  scene.add(points);
  objects.push(points);
}
