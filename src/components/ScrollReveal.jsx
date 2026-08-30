import { useEffect, useRef } from 'react'

export default function ScrollReveal({ children, as: Component = 'div', className = '', direction = 'up', delay = 0, duration = 500 }) {
  const ref = useRef(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      if (ref.current) {
        ref.current.style.opacity = '1'
        ref.current.style.transform = 'none'
      }
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const offset = direction === 'left' ? { x: -24 } : direction === 'right' ? { x: 24 } : { y: 20 }
            node.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease, filter ${duration}ms ease`
            node.style.transitionDelay = `${delay}ms`
            node.style.opacity = '1'
            node.style.transform = `translate3d(${offset.x ?? 0}px, ${offset.y ?? 0}px, 0) scale(1)`
            node.style.filter = 'blur(0)'
            observer.unobserve(node)
          }
        })
      },
      { threshold: 0.15 }
    )

    node.style.opacity = '0'
    node.style.transform = direction === 'left' ? 'translate3d(-24px, 0, 0) scale(1)' : direction === 'right' ? 'translate3d(24px, 0, 0) scale(1)' : 'translate3d(0, 20px, 0) scale(1)'
    node.style.filter = 'blur(2px)'
    node.style.willChange = 'opacity, transform'
    observer.observe(node)

    return () => observer.disconnect()
  }, [delay, direction, duration])

  return <Component ref={ref} className={className}>{children}</Component>
}
