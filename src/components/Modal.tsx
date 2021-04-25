import { useCallback, useState, forwardRef, useImperativeHandle } from 'react';

export interface IModalHandles {
  toggleVisibility: () => void;
}

const Modal: React.ForwardRefRenderFunction<IModalHandles> = (_props, ref) => {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = useCallback(() => setVisible((state) => !state), []);

  useImperativeHandle(ref, () => ({
    toggleVisibility,
  }));

  if (!visible) {
    return null;
  }

  return (
    <div>
      <p>Modal Aberto</p>
    </div>
  );
};

export default forwardRef(Modal);
