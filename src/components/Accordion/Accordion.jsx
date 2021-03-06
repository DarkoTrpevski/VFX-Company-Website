import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { AccordionContent, AccordionHeader, AccordionIcon } from '../../styles/homeStyles'
import { useGlobalStateContext } from '../../context/globalContext'


const Accordion = ({ details, expanded, setExpanded, onCursor }) => {

  const isOpen = details.id === expanded
  const [hovered, setHovered] = useState(false)
  const { currentTheme } = useGlobalStateContext()

  return (
    <>
      <AccordionHeader initial={false} onClick={() => setExpanded(isOpen ? false : details.id)}
        whileHover={{ color: !isOpen && currentTheme === "dark" ? "#ffffff" : "#000000", }}
        onHoverStart={() => setHovered(!hovered)} onHoverEnd={() => setHovered(!hovered)}
        onMouseEnter={() => onCursor("hovered")} onMouseLeave={onCursor}>
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key="content" animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}>
        {details.results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </AccordionContent>
    </>
  )
}

export default Accordion