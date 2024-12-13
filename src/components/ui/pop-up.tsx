import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import React from 'react'

export default function PopUp({
  children,
  selected,
  setSelected
}: {
  children: React.ReactNode
  selected: boolean | null
  setSelected: React.Dispatch<React.SetStateAction<boolean | null>>
}) {
  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-2 sm:p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-lg bg-white p-4 shadow-xl dark:bg-neutral-700 sm:p-4 md:p-6"
          >
            {children}
            <X onClick={() => setSelected(null)} className="absolute right-4 top-5 h-4" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
