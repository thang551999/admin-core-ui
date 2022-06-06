import React, { useEffect, useState } from 'react'
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CImage,
  CTableDataCell,
  CSpinner,
  CButtonGroup,
  CButton,
} from '@coreui/react'
import placeService from '../../../service/place'
const Accordion = () => {
  const [isLoadingDataDone, setIsLoadingDataDone] = useState(false)
  const [places, setPlaces] = useState([])
  const [totalPage, setTotalPage] = useState(0)
  const [pageCurrent, setPageCurrent] = useState(0)
  const getPlaces = async () => {
    const places = await placeService.getPlace()
    await setTimeout(() => {
      setIsLoadingDataDone(true)
      console.log(places)
      setPlaces(places.data.records)
      setTotalPage(places.data.pageSize)
      setPageCurrent(places.data.currentPage)
    }, 500)
    console.log(places)
  }
  useEffect(() => {
    getPlaces()
  }, [])

  return (
    <>
      <CButton className="Test" color="info" size="lg">
        Tạo sân thể thao
      </CButton>
      <CTable>
        <CTableHead color="dark">
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Tên</CTableHeaderCell>
            <CTableHeaderCell scope="col">Địa chỉ</CTableHeaderCell>
            <CTableHeaderCell scope="col">Trạng thái</CTableHeaderCell>
            <CTableHeaderCell scope="col">Hình ảnh đại diện</CTableHeaderCell>
            <CTableHeaderCell scope="col">Giờ mở của/ đóng của</CTableHeaderCell>
            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        {!isLoadingDataDone ? (
          <CSpinner></CSpinner>
        ) : (
          <CTableBody>
            {places.map((place, index) => {
              return (
                <CTableRow key={place.id}>
                  <CTableHeaderCell scope="row">{index}</CTableHeaderCell>
                  <CTableDataCell>{place.name}</CTableDataCell>
                  <CTableDataCell>{place.address}</CTableDataCell>
                  <CTableDataCell>
                    {place.isEnable === true ? 'Hoạt động' : 'Ngừng hoạt động'}
                  </CTableDataCell>
                  <CImage
                    fluid
                    src={place.imageDetails.length === 0 ? '' : place.imageDetails[0]}
                  />
                  <CTableDataCell>
                    {place.timeClose}/{place.timeClose}
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButtonGroup role="group" aria-label="Basic mixed styles example">
                      <CButton color="warning">Chỉnh sủa</CButton>
                      <CButton color="success">Xóa</CButton>
                    </CButtonGroup>
                  </CTableDataCell>
                </CTableRow>
              )
            })}
          </CTableBody>
        )}
      </CTable>
    </>
  )
}

export default Accordion
