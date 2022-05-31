const InputErro = ({ status }) => {
    return (
      <span
        className={`text-center text-xs ${
          status.type === 'erro' ? `text-red-500` : `text-green-700`
        } py-1`}
      >
        {status.message}
      </span>
    );
  };
  
  export default InputErro;