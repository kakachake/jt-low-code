import React, { FC, ReactElement } from 'react'
import { FieldCompNode } from '../dataCore/types'
import style from './CompRender.module.scss'
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
  comp: FieldCompNode
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
    comps[type](props as any),
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

export default CompRender
