import React, { FC, ReactElement } from 'react'
import { FieldNode } from '../dataCore/typs'

import comps from '../dataCore/comps/index'

interface CompComposerProps {
  compWraps?: ReactElement[]
  children: ReactElement
}

const CompComposer: FC<CompComposerProps> = ({ compWraps, children }) => {
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
  comp: FieldNode
  compWraps?: ReactElement[]
}

const CompRender: FC<CompRenderProps> = ({ comp, compWraps }) => {
  const { type, props, module } = comp
  return <CompComposer compWraps={compWraps}>{comps[type](props)}</CompComposer>
}

export default CompRender
