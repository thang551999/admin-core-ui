import React from 'react'
import { CFormFloating, CFormInput, CFormLabel, CFormSelect } from '@coreui/react'
import MultiSelect from 'src/components/MultiSelect'
import { Button } from 'antd'
const CreateVoucher = () => {
  return (
    <div style={{ paddingBottom: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 className="header-add-place">Thêm mới voucher</h1>
        <Button type="primary">Lưu</Button>
      </div>
      <CFormFloating className="mb-3">
        <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
        <CFormLabel htmlFor="floatingInput">Tên Voucher</CFormLabel>
      </CFormFloating>
      <CFormFloating className="mb-3">
        <CFormInput type="password" id="floatingPassword" placeholder="Password" />
        <CFormLabel htmlFor="exampleFormControlTextarea1">Số lượng</CFormLabel>
      </CFormFloating>
      <CFormFloating className="mb-3">
        <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
        <CFormLabel htmlFor="floatingInput">Số tiền giảm tối đa</CFormLabel>
      </CFormFloating>
      <CFormFloating className="mb-3">
        <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
        <CFormLabel htmlFor="floatingInput">Số tiền để được áp dụng voucher</CFormLabel>
      </CFormFloating>
      <CFormFloating className="mb-3">
        <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
        <CFormLabel htmlFor="floatingInput">Thời gian kết thúc</CFormLabel>
      </CFormFloating>

      <MultiSelect />
    </div>
  )
}

export default CreateVoucher
