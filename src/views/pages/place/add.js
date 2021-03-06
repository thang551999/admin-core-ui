import React, { useState, useEffect, useRef } from 'react'
import {
  CFormFloating,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CFormSelect,
  CToastHeader,
  CToast,
  CToastBody,
  CToaster,
} from '@coreui/react'
import UploadImages from 'src/components/UploadImages'
import { Button } from 'antd'
import placeService from 'src/service/place'
import { useSelector } from 'react-redux'
import { getToken } from '../../../service/api'
import { useNavigate } from 'react-router-dom'

const AddPlace = () => {
  let navigate = useNavigate()
  const token = useSelector((state) => state.loginInfor)
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  const [timeOpen, setTimeOpen] = useState('')
  const [timeClose, setTimeClose] = useState('')
  const [priceMin, setPriceMin] = useState('')
  const [limitUsers, setLimitUsers] = useState('')
  const [timeDistance, setTimeDistance] = useState('')
  const [imageBanner, setImageBanner] = useState([])
  const [imageDetails, setImageDetails] = useState([])
  const [placeTypes, setPlaceTypes] = useState([])
  const [placeType, setPlaceType] = useState()
  const [isLoadingDataDone, setIsLoadingDataDone] = useState(false)
  const getTypePlaces = async () => {
    const places = await placeService.getTypePlace()
    await setTimeout(() => {
      setIsLoadingDataDone(true)
      setPlaceTypes(places.data)
    }, 500)
  }
  useEffect(() => {
    getTypePlaces()
    console.log(token)
  }, [])

  const onChangeImageBanner = (images) => {
    console.log(images)
    const imageBanner = images.map((image) => image?.response?.data)
    console.log(imageBanner)
    setImageBanner(imageBanner)
  }
  const onChangeImageDetails = (images) => {
    console.log(images)
    const imageBanner = images.map((image) => image?.response?.data)
    console.log(imageBanner)
    setImageDetails(imageBanner)
  }
  return (
    <div style={{ paddingBottom: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 className="header-add-place">Th??m m???i s??n thi ?????u</h1>
        <Button
          type="primary"
          onClick={async () => {
            addToast(exampleToast)
            const typePlace = placeTypes.find((e) => e.id === placeType)
            if (placeType == null) {
              alert('Vui long chon kieu san')
            }
            const place = {
              timeOpen,
              name,
              address,
              description,
              timeClose,
              timeDistance,
              priceMin,
              imageBanner,
              imageDetails,
              timeGold: [],
              services: [],
              limitUsers,
              typePlace,
            }
            getToken(token.token)
            const createPlace = await placeService.createPlace(place)
            navigate('/place', { replace: true })
            console.log(createPlace)
          }}
        >
          L??u
        </Button>
      </div>
      <CFormSelect className="mb-3" onChange={(e) => setPlaceType(e.target.value)}>
        <option>Lo???i s??n</option>
        {placeTypes.map((e) => {
          return (
            <>
              <option value={e.id}>{e.name}</option>
            </>
          )
        })}
      </CFormSelect>
      <CFormFloating className="mb-3">
        <CFormInput value={name} onChange={(text) => setName(text.target.value)} />
        <CFormLabel htmlFor="floatingInput">T??n S??n</CFormLabel>
      </CFormFloating>
      <CFormFloating className="mb-3">
        <CFormInput value={address} onChange={(text) => setAddress(text.target.value)} />
        <CFormLabel htmlFor="exampleFormControlTextarea1">?????a ch???</CFormLabel>
      </CFormFloating>
      <CFormTextarea
        value={description}
        onChange={(text) => setDescription(text.target.value)}
        className="mb-3"
        placeholder="Leave a comment here"
        id="floatingTextarea2"
        floatingLabel="Th??ng tin th??m"
        style={{ height: '100px' }}
      ></CFormTextarea>
      <CFormFloating className="mb-3">
        <CFormInput value={timeOpen} onChange={(text) => setTimeOpen(text.target.value)} />
        <CFormLabel htmlFor="floatingInput">Th???i gian m??? c???a</CFormLabel>
      </CFormFloating>
      <CFormFloating className="mb-3">
        <CFormInput value={timeClose} onChange={(text) => setTimeClose(text.target.value)} />
        <CFormLabel htmlFor="floatingInput">Th???i gian ????ng c???a</CFormLabel>
      </CFormFloating>
      <CFormFloating className="mb-3">
        <CFormInput value={priceMin} onChange={(text) => setPriceMin(text.target.value)} />
        <CFormLabel htmlFor="floatingInput">Gi?? gi??? thu?? t???</CFormLabel>
      </CFormFloating>
      <CFormFloating className="mb-3">
        <CFormInput value={limitUsers} onChange={(text) => setLimitUsers(text.target.value)} />
        <CFormLabel htmlFor="floatingInput">S??? ng?????i c?? th??? tham gia s??n</CFormLabel>
      </CFormFloating>
      <CFormFloating className="mb-3">
        <CFormInput value={timeDistance} onChange={(text) => setTimeDistance(text.target.value)} />
        <CFormLabel htmlFor="floatingInput">Th???i gian gi???a c??c khung gi???</CFormLabel>
      </CFormFloating>
      <UploadImages onChangeImage={onChangeImageBanner} title="???nh Banner" />
      <UploadImages onChangeImage={onChangeImageDetails} title="???nh chi ti???t" />
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </div>
  )
}

const exampleToast = (
  <CToast autohide={true} delay={1000}>
    <CToastHeader closeButton>
      <svg
        className="rounded me-2"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
      >
        <rect width="100%" height="100%" fill="#007aff"></rect>
      </svg>
      <strong className="me-auto">Th??ng b??o</strong>
    </CToastHeader>
    <CToastBody>B???n t???o s??n th??nh c??ng</CToastBody>
  </CToast>
)

export default AddPlace
