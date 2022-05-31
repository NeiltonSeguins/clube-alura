import './App.css';
import gift from './img/gift.svg';
import treasure from './img/treasure.svg';
import Form from './components/Form';

function App() {
  return (
    <div className='bg-gradient-to-tr from-gradient-escuro to-gradient-claro font-inter flex justify-center items-center h-screen'>
      <main className='flex px-6 drop-shadow-4xl lg:w-3/4'>
        <div className='bg-azul-claro hidden lg:block w-1/2 rounded-l-2xl'>
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
            className='p-6 m-auto w-96'
            src={treasure}
            alt='icone de baú do tesouro'
          />
        </div>
        <div className='bg-azul-claro p-10 gap-6 flex flex-col rounded-2xl lg:w-1/2 justify-center lg:rounded-l-none'>
          <Form />
        </div>
      </main>
    </div>
  );
}

export default App;
