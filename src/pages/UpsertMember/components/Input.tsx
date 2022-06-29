import { UseFormRegisterReturn } from 'react-hook-form';

const Input: React.FC<{
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string | undefined;
  defaultValue?: string | number;
}> = (props) => {
  return (
    <div className='relative'>
      <input
        type={props.type}
        placeholder={props.placeholder}
        {...props.register}
        defaultValue={props.defaultValue}
        className='w-44 h-14 font-bpg-arial text-center border border-primary-dark-blue rounded-md outline-none'
      />
      {props.error && (
        <p className='absolute text-sm text-light-red text-center'>
          {props.error}
        </p>
      )}
    </div>
  );
};

export default Input;
