function Button({ children, icon, className, onClick, type, disabled }) {
  return (
    <button
     className={`flex gap-2 py-2 px-4 text-xs rounded justify-center items-center  ${className ? className :""}`}
      onClick={onClick}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}

export default Button;
