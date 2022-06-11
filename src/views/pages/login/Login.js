import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import AuthService from '../../../service/auth'
import { CODE_API_SUCCESS } from '../../../common/constant'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
const Login = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = async () => {
    console.log(email, password)
    const data = await AuthService.handleLogin({ email: email, password: password })
    if (data.code === CODE_API_SUCCESS) {
      dispatch({ type: 'set', loginInfor: data })
      navigate('/')
    } else {
      alert(data.message)
    }
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Đăng nhập</h1>
                    <p className="text-medium-emphasis">Đăng nhập bằng tài khoản chủ sân</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        inputMode="email"
                        value={email}
                        placeholder="Username"
                        autoComplete="username"
                        onChange={(text) => {
                          setEmail(text.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        value={password}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(text) => {
                          setPassword(text.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={() => handleLogin()}>
                          Đăng nhập
                        </CButton>
                      </CCol>
                      <CRow xs={6}>
                        <CCol className="text-right">
                          <CButton color="link" className="px-0">
                            Quên mật khẩu?
                          </CButton>
                        </CCol>
                        <CCol xs={4} className="text-right">
                          <CButton
                            color="link"
                            className="px-0"
                            onClick={() => navigate('/register')}
                          >
                            Đăng ký
                          </CButton>
                        </CCol>
                      </CRow>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
