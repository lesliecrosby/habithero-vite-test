import App from './app'

const isStaging = window.location.host.match(/webflow.io/)

const getScript = (url) => new Promise((resolve, reject) => {
  const script = document.createElement('script')
  script.src = url
  // script.type = module
  script.async = true
  script.onerror = reject
  script.onload = script.onreadystatechange = function() {
    const loadState = this.readyState
    if (loadState && loadState !== 'loaded' && loadState !== 'complete') return
    script.onload = script.onreadystatechange = null
    resolve()
  }
  document.head.appendChild(script)
})

if (isStaging && !window.__DK__) {
  getScript('http://localhost:3000/main.js')
    .then(() => {
      console.log('🙊 DK LITE Started')
      window.__DK__ = true
    })
    .catch(() => {
      console.error('Could not load script')
      App()
    })
} else {
  App()
}

export default null