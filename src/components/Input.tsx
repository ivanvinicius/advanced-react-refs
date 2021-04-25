import { InputHTMLAttributes, forwardRef } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { name, label, ...rest },
  ref,
) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input ref={ref} name={name} type="text" {...rest} />
    </div>
  );
};

export default forwardRef(Input);
