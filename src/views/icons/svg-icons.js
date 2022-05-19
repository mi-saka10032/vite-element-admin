const svg = import.meta.globEager('../../icons/svg/*.svg')
// const requireAll = requireContext => requireContext.keys()

const re = /svg\/(.*)\.svg/

const svgIcons = Object.keys(svg).map(i => {
  return i.match(re)[1]
})

export default svgIcons
