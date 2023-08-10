import { Modal } from 'antd'
import React, { useState } from 'react'


const ModalComponent = (content) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <Modal title="Basic Modal"  onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default ModalComponent