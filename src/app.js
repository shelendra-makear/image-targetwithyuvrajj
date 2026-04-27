// ✅ 8th Wall config
const onxrloaded = () => {
  XR8.XrController.configure({
    imageTargetData: [
      require('../image-targets/yuvraj-target-image.json'),
    ],
  })
}

window.XR8
  ? onxrloaded()
  : window.addEventListener('xrloaded', onxrloaded)

// ✅ MAIN LOGIC
