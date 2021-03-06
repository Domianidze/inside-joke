const DashboardButton: React.FC<{
  id?: string;
  color: string;
  onClick?: () => void;
}> = (props) => {
  return (
    <button
      type='button'
      onClick={props.onClick}
      id={props.id}
      className='w-6 h-6 flex justify-center items-center bg-black rounded-full'
      style={{
        border: `1px solid ${props.color}`,
      }}
    >
      <div
        className='w-3 h-3 rounded-full'
        style={{ backgroundColor: props.color }}
      ></div>
    </button>
  );
};

export default DashboardButton;
