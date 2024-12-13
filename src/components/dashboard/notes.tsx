import { fetchedNotes } from '@/lib/api-data/notes-data'
import { memo, useEffect, useState } from 'react'
import Loading from '../ui/loading'
import NoteBlock from './blocks/note-block'

function Notes() {
  const [notes, setNotes] = useState<Notes[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    const response = fetchedNotes
    setTimeout(() => {
      setNotes(response)
      setLoading(false)
    }, 1050)
  }, [])

  return (
    <div className="w-full">
      {!loading &&
        (notes.length > 0 ? (
          notes.map((note) => <NoteBlock key={note.id} note={note} />)
        ) : (
          <p>No notes found</p>
        ))}
      {loading && (
        <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center backdrop-blur-sm">
          <Loading />
        </div>
      )}
    </div>
  )
}

export default memo(Notes)
