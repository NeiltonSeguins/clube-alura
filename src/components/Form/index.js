import React from 'react';
import * as yup from 'yup';
import Input from './Input';
import InputSucess from '../InputSucess';
import { phoneNumber, cep } from '../../utils/validation.js';

export default function Form() {
  const [status, setStatus] = React.useState({
    type: '',
    path: '',
    message: '',
  });

  const [user, setUser] = React.useState({
    nome: '',
    email: '',
    telefone: '',
    cep: '',
    endereco: '',
    estado: '',
    pais: '',
  });

  async function handleSubmit(event) {
    event.preventDefault();

    if (!(await validate())) return;

    setUser({
      nome: '',
      email: '',
      telefone: '',
      cep: '',
      endereco: '',
      estado: '',
      pais: '',
    });

    setStatus({
      type: 'sucesso',
      path: '',
      message: 'Usuário cadastrado com sucesso!',
    });

    console.log(user);
  }

  async function validate() {
    const validationSchema = yup.object().shape({
      nome: yup.string().required('O campo nome é obrigatório'),
      email: yup
        .string()
        .email('O email digitado é inválido')
        .required('O campo email é obrigatório'),
      telefone: yup
        .string()
        .matches(phoneNumber, 'O telefone informado é inválido'),
      cep: yup
        .string()
        .required('O campo cep é obrigatório')
        .matches(cep,'cep é inválido'),
      endereco: yup.string().required('O campo endereço é obrigatório'),
      estado: yup.string().required('O campo estado é obrigatório'),
      pais: yup.string().required('O campo país é obrigatório'),
    });

    try {
      await validationSchema.validate(user);
      return true;
    } catch (erro) {
      setStatus({
        type: 'erro',
        path: erro.path,
        message: erro.errors,
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col bg-white p-6 rounded-lg drop-shadow-2xl'
    >
      <Input
        htmlFor='nome'
        id='nome'
        label='Nome'
        type='text'
        placeholder='Ex: Carlos de Souza'
        value={user.nome}
        handleChange={(value) => setUser({ ...user, nome: value })}
        status={status}
      />
      <Input
        htmlFor='email'
        id='email'
        label='E-mail'
        type='text'
        placeholder='Ex: carlos@email.com'
        value={user.email}
        handleChange={(value) => setUser({ ...user, email: value })}
        status={status}
      />
      <div className='flex justify-between'>
        <div className='container w-1/2 mr-2'>
          <Input
            htmlFor='telefone'
            id='telefone'
            label='Telefone'
            type='text'
            placeholder='Ex: (99) 99999-9999'
            value={user.telefone}
            handleChange={(value) => setUser({ ...user, telefone: value })}
            status={status}
          />
        </div>
        <div className='container w-1/2'>
          <Input
            htmlFor='cep'
            id='cep'
            label='CEP'
            type='text'
            placeholder='Ex: 66666-666'
            value={user.cep}
            handleChange={(value) => setUser({ ...user, cep: value })}
            status={status}
          />
        </div>
      </div>
      <Input
        htmlFor='endereco'
        id='endereco'
        label='Endereço'
        type='text'
        placeholder='Ex: Av. Paulista, 42, São Paulo'
        value={user.endereco}
        handleChange={(value) => setUser({ ...user, endereco: value })}
        status={status}
      />
      <div className='flex justify-between'>
        <div className='container w-1/2 mr-2'>
          <Input
            htmlFor='estado'
            id='estado'
            label='Estado'
            type='text'
            placeholder='Ex: São Paulo'
            value={user.estado}
            handleChange={(value) => setUser({ ...user, estado: value })}
            status={status}
          />
        </div>
        <div className='container w-1/2'>
          <Input
            htmlFor='pais'
            id='pais'
            label='País'
            type='text'
            placeholder='Ex: Brasil'
            value={user.pais}
            handleChange={(value) => setUser({ ...user, pais: value })}
            status={status}
          />
        </div>
      </div>
      {status.type === 'sucesso' && <InputSucess status={status} />}
      <button
        className='font-bold text-white bg-azul-medio w-full mt-2 py-2 rounded-lg shadow-2xl hover:bg-gradient-escuro duration-150'
        type='submit'
      >
        Quero participar!
      </button>
    </form>
  );
}
