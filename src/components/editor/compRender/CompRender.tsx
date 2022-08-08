import React, { FC, ReactElement } from 'react'
import { FieldCompNodeAll } from '../dataCore/types'

import comps from '../dataCore/comps/index'
import EditorCompRender from './EditorCompRender'
import { useEditorContext } from '../editorProvider/EditorProvider'

interface ICompComposerProps {
  compWraps?: ReactElement[]
  children: ReactElement
}

const CompComposer: FC<ICompComposerProps> = ({ compWraps, children }) => {
  return (
    <>
      {compWraps?.length
        ? compWraps.reduceRight((child, parent) => {
            return React.cloneElement(parent, {}, child)
          }, children)
        : children}
    </>
  )
}

interface CompRenderProps {
  comp: FieldCompNodeAll
  compWraps?: ReactElement[]
  mode?: 'edit' | 'preview'
}

const CompRender: FC<CompRenderProps> = ({ comp, compWraps, mode = 'preview' }) => {
  const { comps: editorComps } = useEditorContext()
  const { type, props, module, children } = comp
  const childrenComp =
    children?.map((child) =>
      mode === 'edit' ? (
        <EditorCompRender key={child.compId} comp={child} />
      ) : (
        <CompRender key={child.compId} comp={child} />
      )
    ) || []

  const Comp = React.cloneElement(
    getCompByModuleAndType(module, type)(props as any),
    {
      onClick: () => {
        console.log('click', editorComps)
      }
    },
    ...childrenComp
  )
  return (
    <>
      <CompComposer compWraps={compWraps}>{Comp}</CompComposer>
    </>
  )
}

const getCompByModuleAndType = (module: keyof typeof comps, type: any) => {
  return comps[module][type]
}

export default CompRender
