~function(){
  // 1. 创建场景
  const scene = new THREE.Scene()
  // 2. 创建摄像机
  const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)

  // 创建渲染器（抗锯齿）
  const renderer = new THREE.WebGLRenderer({antialias: true});
  // 设置渲染器场景的大小
  renderer.setSize(window.innerWidth,window.innerHeight)
  console.log('xx ',renderer.domElement);
  // 把渲染器添加到页面中
  document.body.appendChild(renderer.domElement)

  // 创建基础几何模型,参数(x轴长,y轴长,z轴长)
  const geometry = new THREE.BoxGeometry(2,2,2)
  // 创建贴图
  const texture = new THREE.TextureLoader().load('2.jpeg')
  // 创建材质
  // const material = new THREE.MeshBasicMaterial({color:0x00ff00})
  const material = new THREE.MeshBasicMaterial({map:texture})
  // 创建网格对象
  const cure = new THREE.Mesh(geometry,material)
  // 把网格对象添加到场景中去
  scene.add(cure)

  function animate() {
    requestAnimationFrame(animate)
    // 网格对象自旋转
    cure.rotation.x += 0.01
    cure.rotation.y += 0.01
    // 渲染器渲染 场景和摄像机
    renderer.render(scene,camera)
  }
  animate()
  // 摄像机空间位置
  camera.position.z = 6

  window.addEventListener('resize', ()=>{
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth/window.innerHeight)
  })
}()