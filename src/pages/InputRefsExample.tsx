/* eslint-disable no-console */

import { FormEvent, useCallback, useRef } from 'react';

import Input from '../components/Input';

export default function InputRefsExample() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const acceptTermsRef = useRef({ value: false });

  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value;
  }, []);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    console.log(nameInputRef.current?.value);
    console.log(acceptTermsRef.current.value);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <p>Abra o console</p>

      <Input ref={nameInputRef} name="name" label="Nome completo" />

      <button type="button" onClick={handleAcceptTerms}>
        Aceitar termos
      </button>

      <button type="submit">Enviar</button>
    </form>
  );
}
