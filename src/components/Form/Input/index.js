import InputErro from '../../InputError';

const Input = (props) => {
  const placeholder = `${props.placeholder}`;

  function handleChange(event) {
    event.preventDefault();
    props.handleChange(event.target.value);
  }

  return (
    <div>
      <label className='text-sm font-bold text-azul-medio mb-2' htmlFor={props}>
        {props.label}
      </label>
      <input
        className={`text-sm placeholder:italic placeholder:text-xs w-full pl-2 rounded border border-azul-claro hover:border-azul-claro hover:ring-1 hover:ring-azul-medio focus:border-azul-medio focus:ring-1 focus:ring-azul-medio py-2 mb-1 shadow focus:outline-none  ${
          props.status.path === props.id && props.status.type === 'erro'
            ? 'border-red-500'
            : ''
        }`}
        id={props.id}
        value={props.value}
        onChange={handleChange}
        type={props.type}
        placeholder={placeholder}
      />
      {props.status.path === props.id && <InputErro status={props.status} />}
    </div>
  );
};

export default Input;
