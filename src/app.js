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
document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('#yuvraj-video')
  const plane = document.querySelector('#videoPlane')
  const target = document.querySelector('#yuvrajTarget')

  if (!video || !plane || !target) {
    console.log('❌ Elements not found')
    return
  }

  // ✅ CLICK → play video with sound
  plane.addEventListener('click', () => {
    video.muted = false
    video.currentTime = 0

    video.play().then(() => {
      console.log('▶ Video playing with sound')

      // switch from thumb → video
      plane.setAttribute('material', 'src', '#yuvraj-video')
    }).catch(err => {
      console.log('Autoplay blocked:', err)
    })
  })

  // ❌ TARGET LOST → pause + mute + reset to thumbnail
  target.addEventListener('targetLost', () => {
    console.log('❌ Target Lost')

    video.pause()
    video.muted = true

    // show thumbnail again
    plane.setAttribute('material', 'src', '#yuvraj-thumb')
  })

  // ✅ TARGET FOUND → do nothing (wait for tap)
  target.addEventListener('targetFound', () => {
    console.log('✅ Target Found')
  })
})