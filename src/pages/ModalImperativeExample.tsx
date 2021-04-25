import { useCallback, useRef } from 'react';

import Modal, { IModalHandles } from '../components/Modal';

export default function ModalImperativeExample() {
  const modalRef = useRef<IModalHandles>(null);

  const handleOpenModal = useCallback(() => {
    modalRef.current?.toggleVisibility();
  }, []);

  return (
    <>
      <Modal ref={modalRef} />
      <button type="button" onClick={handleOpenModal}>
        Toggle Modal Visibility
      </button>
    </>
  );
}
