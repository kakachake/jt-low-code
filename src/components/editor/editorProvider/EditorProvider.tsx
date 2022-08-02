import { createContext, FC, useContext, useState } from 'react'
import { FieldCompNode, FieldNode } from '../dataCore/types'
import { v4 as uuid } from 'uuid'
import { message } from 'antd'
import { traverse } from '../utils'
interface IEditorProvider {
  children: React.ReactNode
}

interface IEditorType {
  comps: FieldCompNode[]
  selectedComps: string[]
  addComps: (comps: FieldNode, parentItem?: FieldCompNode) => void
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
    options: {
      width: 400
    },
    addComps: (comp: FieldNode, parentItem?: FieldCompNode) => {
      // setComps([...comps])
      setComps((comps) => {
        if (!parentItem) {
          return [...comps, createNewComp(comp)]
        } else {
          traverse<{ children: FieldCompNode[]; compId?: string }>({ children: comps }, (item) => {
            if (item?.compId === parentItem.compId) {
              item.children.push(createNewComp(comp))
              return true
            }
            return false
          })
          return comps
        }
      })
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
    }
  }
  return <editorContext.Provider value={value}>{children}</editorContext.Provider>
}

function createNewComp(item: FieldNode, parentItem?: FieldCompNode): FieldCompNode {
  return {
    ...item,
    compId: uuid(),
    children: [],
    parentId: parentItem?.compId
  }
}

export const useEditorContext = () => useContext(editorContext)

export default EditorProvider
