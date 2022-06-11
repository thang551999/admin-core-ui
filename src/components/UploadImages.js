import { PlusOutlined } from '@ant-design/icons'
import { Modal, Upload } from 'antd'
import React, { useState } from 'react'

// eslint-disable-next-line react/prop-types
export default function UploadImages({ onChangeImage, title }) {
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onload = () => resolve(reader.result)

      reader.onerror = (error) => reject(error)
    })

  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState([])

  const handleCancel = () => setPreviewVisible(false)

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }

    setPreviewImage(file.url || file.preview)
    setPreviewVisible(true)
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
  }

  const handleChange = async ({ fileList: newFileList }) => {
    await setFileList(newFileList)
    onChangeImage(newFileList)
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  )
  return (
    <>
      <div
        style={{
          padding: '10px',
          background: 'white',
          border: '1px dashed grey',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '10px 0',
        }}
      >
        <p>{title}</p>
        <Upload
          action="http://localhost:3500/upload/s3"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          data={(e) => console.log(e)}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
          <img
            alt="example"
            style={{
              width: '100%',
            }}
            src={previewImage}
          />
        </Modal>
        <p onClick={() => console.log(fileList)}>click</p>
      </div>
    </>
  )
}
