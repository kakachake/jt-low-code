import { createContext, FC, useContext, useState } from 'react'
import { FieldCompNode, FieldNode } from '../dataCore/types'
import { v4 as uuid } from 'uuid'
import { message } from 'antd'
interface IEditorProvider {
  children: React.ReactNode
}

interface IEditorType {
  comps: FieldCompNode[]
  selectedComps: string[]
  addComps: (comps: FieldNode) => void
  setSelectComp: (comp: FieldCompNode) => void
  removeSelectComp: (comp: FieldCompNode) => void
  removeComp: (compId: string) => void
  options: {
    width: number
  }
}

export const editorContext = createContext<IEditorType>({} as IEditorType)

const EditorProvider: FC<IEditorProvider> = ({ children }) => {
  const [comps, setComps] = useState<FieldCompNode[]>([])
  const [selectedComps, setSelectedComps] = useState<string[]>([])
  const value = {
    comps,
    selectedComps,
    addComps: (comp: FieldNode) => {
      // setComps([...comps])
      setComps((comps) => [...comps, createNewComp(comp)])
    },
    removeComp: (compId: string) => {
      setComps((comps) => comps.filter((comp) => comp.compId !== compId))
      message.success('删除成功')
    },
    setSelectComp: (comp: FieldCompNode) => {
      setSelectedComps([comp.compId])
    },
    removeSelectComp: (comp: FieldCompNode) => {
      setSelectedComps((comps) => {
        return comps.filter((c) => c !== comp.compId)
      })
    },
    options: {
      width: 400
    }
  }
  return <editorContext.Provider value={value}>{children}</editorContext.Provider>
}

function createNewComp(item: FieldNode): FieldCompNode {
  return {
    ...item,
    compId: uuid(),
    children: []
  }
}

export const useEditorContext = () => useContext(editorContext)

export default EditorProvider
