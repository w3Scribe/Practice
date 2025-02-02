import { createFileRoute } from '@tanstack/react-router'
import { motion, Variant } from 'motion/react'



export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <motion.div></motion.div>
}
