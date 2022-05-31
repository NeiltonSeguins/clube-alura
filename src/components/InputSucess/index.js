const InputSucess = ({ status }) => {
    return (
      <span className='text-center font-bold text-normal  text-green-700 py-2 mt-2'>
        {status.message}
      </span>
    );
  };
  
  export default InputSucess;