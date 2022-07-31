import EditorLayout from '@/layout/editorLayout/EditorLayout'
import { FC } from 'react'

import EditorMenu from '@/components/editor/editorMenu/EditorMenu'

const Editor: FC = () => {
  return (
    <div>
      <EditorLayout
        Header={<div>header</div>}
        Menu={<EditorMenu />}
        Editor={<div>editor</div>}
        Operation={<div>operation</div>}
      />
    </div>
  )
}

export default Editor
