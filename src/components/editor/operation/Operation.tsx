import { Menu } from 'antd'
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import FormRender, { Schema, SchemaBase, useForm } from 'form-render'
import React from 'react'
import { useEffect, useState } from 'react'
import { compSchema } from '../dataCore/schema'
import { FieldCompNodeAll, UnionFieldCompNodeAll } from '../dataCore/types'
import { useEditorContext } from '../editorProvider/EditorProvider'
import { traverse } from '../utils'

interface IOperationProps {}

const Operation = () => {
  const { comps, selectedComps, setProps } = useEditorContext()
  const [comp, setComp] = useState<FieldCompNodeAll>({} as FieldCompNodeAll)
  const [schemas, setSchemas] = useState<SchemaBase[]>([])
  const [tabs, setTabs] = useState<ItemType[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string>()

  const form = useForm()
  useEffect(() => {
    if (!selectedComps.length) return
    console.log(111)
    let _comp: FieldCompNodeAll = {} as FieldCompNodeAll
    const res = traverse<{ children: UnionFieldCompNodeAll; compId?: string }>({ children: comps }, (c) => {
      if (c?.compId === selectedComps[0]) {
        _comp = c as FieldCompNodeAll
        console.log(_comp.props.style)

        return true
      }
      return false
    })
    if (!res) return
    const _schemas: SchemaBase[] = compSchema[_comp.module][_comp.type] || []
    const _selectedKeys = Object.keys(_schemas)[0]
    setComp(_comp)
    if (_comp) {
      setSchemas(_schemas)
    }
    const _tabs: any[] = []
    Object.keys(_schemas).forEach((key) => {
      _tabs.push({
        label: _schemas[key].description!,
        key: key
      })
    })
    setTabs(_tabs)
    setSelectedKeys(_selectedKeys)
    if (_comp.compId) {
      const value = _comp.props[_selectedKeys]
      setTimeout(() => {
        form.setValues(value)
      }, 0)
    }
  }, [selectedComps])
  useEffect(() => {
    if (selectedKeys) {
      form.setValues(comp.props[selectedKeys])
    }
  }, [selectedKeys])
  const watch = {
    // # 为全局
    '#': (val: any) => {
      console.log(222)
      if (comp?.compId) {
        setProps(comp?.compId, selectedKeys!, { ...val })
      }
    }
  }

  return (
    <div>
      {Object.keys(schemas).length && selectedKeys ? (
        <div>
          <Menu
            mode="horizontal"
            items={tabs}
            onSelect={({ key }) => {
              setSelectedKeys(key)
            }}
            selectedKeys={[selectedKeys]}
          />
          <FormRender schema={schemas[selectedKeys]} form={form} watch={watch} />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default React.memo(Operation)
