import { Note } from '@/interface'
import * as React from 'react'

type Props = childProps & Partial<dP>

type childProps = {
  detail: Note
  children: React.ReactNode
}

type dP = {
  name: string
}

const NoteBox: React.FC<Props> = (props) => {
  const { children } = props
  return (
    <div>
      {children} <div>{props.name?.length}</div>
    </div>
  )
}

const defaultProps: dP = {
  name: '10',
}

NoteBox.defaultProps = defaultProps

// const NoteBox: React.FC<childProps> = (props) => {
//   const { children, detail } = props
//   return <div>{children}</div>
// }

export default NoteBox
