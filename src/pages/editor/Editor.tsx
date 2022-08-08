import EditorLayout from '@/layout/editorLayout/EditorLayout'
import { FC } from 'react'

import EditorComps from '@/components/editor'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import EditorProvider from '@/components/editor/editorProvider/EditorProvider'

const Editor: FC = () => {
  return (
    <div>
      <EditorProvider>
        <DndProvider backend={HTML5Backend}>
          <EditorLayout
            Header={<div>header</div>}
            Menu={<EditorComps.EditorMenu />}
            Editor={<EditorComps.Canvas />}
            Operation={<EditorComps.Operation />}
          />
        </DndProvider>
      </EditorProvider>
    </div>
  )
}

export default Editor
