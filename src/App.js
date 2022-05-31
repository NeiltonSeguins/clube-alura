import './App.css';
import gift from './img/gift.svg';
import treasure from './img/treasure.svg';
import { ReactComponent as Malha } from './img/malha.svg';
import Form from './components/Form';

function App() {
  return (
    <div className='bg-gradient-to-tr from-gradient-escuro to-gradient-claro font-inter flex justify-center items-center h-screen relative'>
      <Malha className='absolute bottom-0 left-0' />
      <main className='flex px-6 drop-shadow-4xl lg:w-3/4'>
        <div className='bg-azul-claro p-4 hidden lg:block w-1/2 rounded-l-2xl'>
          <img className='p-6 m-auto' src={gift} alt='icone de presente' />
          <div className='text-center container mx-auto w-80'>
            <h1 className='text-5xl mb-2 text-azul-medio font-bold'>
              Clube Alura
            </h1>
            <p className='text-base text-azul-medio mb-2 font normal'>
              Preencha o formulário e participe do Clube de Vantagens da Alura!
            </p>
          </div>
          <img
            className='p-4 m-auto w-96 hidden lg:block'
            src={treasure}
            alt='icone de baú do tesouro'
          />
        </div>
        <div className='bg-azul-claro p-4 flex flex-col rounded-2xl lg:w-8/12 justify-center lg:rounded-l-none lg:p-10'>
          <Form />
        </div>
      </main>
      <Malha className='absolute top-0 right-0' />
    </div>
  );
}

export default App;
