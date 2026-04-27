const onxrloaded = () => {
  XR8.XrController.configure({
    imageTargetData: [
      require('../image-targets/model-target.json'),
      require('../image-targets/yuvraj-target-image.json'),
    ],
  })
}

window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)

// ✅ Wait for scene to load
document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('#yuvraj-video')
  const plane = document.querySelector('#videoPlane')

  if (!plane || !video) {
    console.log('❌ Plane or video not found')
    return
  }

  plane.addEventListener('click', () => {
    setTimeout(() => {
      video.muted = false
      video.volume = 1
      video.play()

      console.log('🔊 Video unmuted & playing')
    }, 100)
  })
})