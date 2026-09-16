import { FACE_SCALE, Z } from './constants'

const ASSET_PATHS = {
  cover_nose: '/assets/memes/cover_nose.jpeg',
  crashing_out: '/assets/memes/crashing_out.jpeg',
  dance: '/assets/memes/dance.jpeg',
  disgusted: '/assets/memes/disgusted.jpeg',
  flirty: '/assets/memes/flirty.jpeg',
  hand_up: '/assets/memes/hand_up.jpeg',
  heart: '/assets/memes/heart.jpeg',
  nose_closed: '/assets/memes/nose_closed.gif',
  open_mouth: '/assets/memes/open_mouth.jpeg',
  spin: '/assets/memes/spin.gif',
  suspicious: '/assets/memes/suspicious.jpeg',
  talking_to_wall: '/assets/memes/talking_to_wall.gif',
  time_out: '/assets/memes/time_out.jpeg',
  tongue_out: '/assets/memes/tongue_out.jpeg',
}

export class AssetManager {
  constructor() {
    this.images = {}
    this.loaded = false
  }

  preload() {
    if (this.loaded) return
    const promises = Object.entries(ASSET_PATHS).map(([pose, src]) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.src = src
        img.onload = () => {
          this.images[pose] = img
          resolve()
        }
        img.onerror = () => {
          console.warn(`Failed to load asset for pose ${pose} at ${src}`)
          resolve()
        }
      })
    })
    Promise.all(promises).then(() => {
      this.loaded = true
    })
  }

  get(pose) {
    return this.images[pose] || null
  }
}

export class OverlayRenderer {
  constructor() {
    this.assetManager = new AssetManager()
    this.assetManager.preload()
    this.smCenter = null
    this.smH = null
  }

  render({ ctx, W, H, shownPose, face, hands, body, debugData }) {
    ctx.clearRect(0, 0, W, H)

    // Smooth position updates for meme overlay positioning
    if (face) {
      if (!this.smCenter) {
        this.smCenter = [...face.center]
        this.smH = face.h * FACE_SCALE
      } else {
        this.smCenter[0] = 0.7 * this.smCenter[0] + 0.3 * face.center[0]
        this.smCenter[1] = 0.7 * this.smCenter[1] + 0.3 * face.center[1]
        this.smH = 0.7 * this.smH + 0.3 * (face.h * FACE_SCALE)
      }
    } else {
      this.smCenter = [W / 2, H / 2]
      this.smH = H * 0.45
    }

    if (shownPose) {
      const img = this.assetManager.get(shownPose)
      if (img && img.complete && img.naturalWidth > 0) {
        const aspect = img.naturalWidth / img.naturalHeight
        const targetH = Math.min(this.smH, H * 0.95, (W * 0.95) / aspect)
        const targetW = targetH * aspect

        const drawX = this.smCenter[0] - targetW / 2
        const drawY = this.smCenter[1] - targetH / 2 - 0.05 * targetH

        ctx.save()
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
        ctx.shadowBlur = 12
        ctx.drawImage(img, drawX, drawY, targetW, targetH)
        ctx.restore()
      } else {
        ctx.save()
        ctx.fillStyle = 'rgba(239, 68, 68, 0.85)'
        ctx.beginPath()
        ctx.arc(this.smCenter[0], this.smCenter[1], 100, 0, 2 * Math.PI)
        ctx.fill()
        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 22px sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText(shownPose.toUpperCase(), this.smCenter[0], this.smCenter[1] + 8)
        ctx.restore()
      }
    }
  }
}
