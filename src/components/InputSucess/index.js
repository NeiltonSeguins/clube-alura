const InputSucess = ({ status }) => {
    return (
      <span className='text-center text-sm  text-green-700 py-2'>
        {status.message}
      </span>
    );
  };
  
  export default InputSucess;