import { createContext, FC, useContext, useState } from 'react'
import { FieldCompNodeAll, UnionFieldCompNodeAll } from '../dataCore/types'
import { v4 as uuid } from 'uuid'
import { message } from 'antd'
import { deepClone, traverse } from '../utils'
interface IEditorProvider {
  children: React.ReactNode
}

interface IEditorType {
  comps: UnionFieldCompNodeAll
  selectedComps: string[]
  addComp: (comp: FieldCompNodeAll, parentItem?: FieldCompNodeAll) => void
  setSelectComp: (comp: FieldCompNodeAll) => void
  removeSelectComp: (comp: FieldCompNodeAll) => void
  removeComp: (compId: string) => void
  setProps: (compId: string, key: string, payload: any) => void
  options: {
    width: number
  }
}

export const editorContext = createContext<IEditorType>({} as IEditorType)

const EditorProvider: FC<IEditorProvider> = ({ children }) => {
  const [comps, setComps] = useState<UnionFieldCompNodeAll>([])
  const [selectedComps, setSelectedComps] = useState<string[]>([])

  const value = {
    comps,
    selectedComps,
    options: {
      width: 400
    },
    addComp: (comp: FieldCompNodeAll, parentItem?: FieldCompNodeAll) => {
      // setComps([...comps])

      setComps((comps) => {
        if (!parentItem) {
          return [...comps, createNewComp(comp)]
        } else {
          traverse<{ children: UnionFieldCompNodeAll; compId?: string }>({ children: comps }, (item) => {
            if (item?.compId === parentItem.compId) {
              item?.children?.push(createNewComp(comp))
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
    setSelectComp: (comp: FieldCompNodeAll) => {
      setSelectedComps([comp.compId])
    },
    removeSelectComp: (comp: FieldCompNodeAll) => {
      setSelectedComps((comps) => {
        return comps.filter((c) => c !== comp.compId)
      })
    },
    setProps: (compId: string, key: string, payload: any) => {
      setComps((comps) => {
        console.log(compId, key, payload)
        traverse<FieldCompNodeAll>({ children: comps as any, compId: '' }, (item) => {
          if (item?.compId === compId) {
            item.props![key] = payload
            return true
          }
          return false
        })
        return [...comps]
      })
    }
  }
  console.log(comps)

  return <editorContext.Provider value={value}>{children}</editorContext.Provider>
}

function createNewComp(item: FieldCompNodeAll, parentItem?: FieldCompNodeAll): FieldCompNodeAll {
  return {
    ...deepClone(item),
    compId: uuid(),
    children: [],
    parentId: parentItem?.compId
  }
}

export const useEditorContext = () => useContext(editorContext)

export default EditorProvider
