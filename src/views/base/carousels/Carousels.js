import React from 'react'
import {
  CFormFloating,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CCol,
  CRow,
  CLink,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import UploadImages from 'src/components/UploadImages'
import { Button } from 'antd'

const Carousels = () => {
  return (
    <div style={{ paddingBottom: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 className="header-add-place">Thêm mới voucher</h1>
        <Button type="primary">Lưu</Button>
      </div>
      <CFormFloating className="mb-3">
        <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
        <CFormLabel htmlFor="floatingInput">Tên Sân</CFormLabel>
      </CFormFloating>
      <CFormFloating className="mb-3">
        <CFormInput type="password" id="floatingPassword" placeholder="Password" />
        <CFormLabel htmlFor="exampleFormControlTextarea1">Địa chỉ</CFormLabel>
      </CFormFloating>
      <CFormTextarea
        className="mb-3"
        placeholder="Leave a comment here"
        id="floatingTextarea2"
        floatingLabel="Thông tin thêm"
        style={{ height: '100px' }}
      ></CFormTextarea>
      <CFormFloating className="mb-3">
        <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
        <CFormLabel htmlFor="floatingInput">Thời gian mở cửa</CFormLabel>
      </CFormFloating>
      <CFormFloating className="mb-3">
        <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
        <CFormLabel htmlFor="floatingInput">Thời gian đóng cửa</CFormLabel>
      </CFormFloating>
      <CFormFloating className="mb-3">
        <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
        <CFormLabel htmlFor="floatingInput">Giá giờ thuê từ</CFormLabel>
      </CFormFloating>
      <CFormFloating className="mb-3">
        <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
        <CFormLabel htmlFor="floatingInput">Thời gian đóng cửa</CFormLabel>
      </CFormFloating>
      <CFormFloating className="mb-3">
        <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
        <CFormLabel htmlFor="floatingInput">Số người có thể tham gia sân</CFormLabel>
      </CFormFloating>
      <CFormFloating className="mb-3">
        <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
        <CFormLabel htmlFor="floatingInput">Thời gian giữa các khung giờ</CFormLabel>
      </CFormFloating>
      <UploadImages />
      <UploadImages />
    </div>
  )
}

export default Carousels
