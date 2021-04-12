const isElementOutViewport = (ref, state, setState) => {
  const rect = ref && ref.getBoundingClientRect()

  if (!state && rect && rect.top < window.innerHeight) {
    setState(true)
  }
}

export default isElementOutViewport
