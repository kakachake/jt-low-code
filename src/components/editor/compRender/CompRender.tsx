import React, { FC, ReactElement } from 'react'
import { FieldCompNode, FieldNode } from '../dataCore/types'
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
}

const CompRender: FC<CompRenderProps> = ({ comp, compWraps }) => {
  const { comps: editorComps } = useEditorContext()
  const { type, props, module, children } = comp
  const childrenComp = children?.map((child) => <EditorCompRender key={child.compId} comp={child} />) || []
  const Comp = React.cloneElement(
    comps[type](props),
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
