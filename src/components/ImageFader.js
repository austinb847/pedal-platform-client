import React, {useState, useEffect} from 'react'
import { useTransition, animated, config } from 'react-spring'

function ImageFader() {

  const slides = [
    { id: 0, url: 'photo-1546367791-e7447b431084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9' },
    { id: 1, url: 'photo-1560849898-d058f7d93b23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9' },
    { id: 2, url: 'photo-1586611627601-cb6a56b814b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9' },
    { id: 3, url: 'photo-1511203438670-49f8ea8441c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9' },
  ]

  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 5000), [])


  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg"
      style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}
    />
  ))
}

export default ImageFader
