import { TreeSelect } from 'antd'
import React, { useState } from 'react'
const { SHOW_PARENT } = TreeSelect
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
]

const MultiSelect = () => {
  const [value, setValue] = useState(['0-0-0'])

  const onChange = (newValue) => {
    console.log('onChange ', value)
    setValue(newValue)
  }

  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Chọn các địa điểm áp dụng voucher',
    style: {
      width: '100%',
    },
  }
  return <TreeSelect {...tProps} />
}

export default MultiSelect
