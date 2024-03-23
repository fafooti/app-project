function Button({ children, icon, className, onClick, type, disabled }) {
  return (
    <button
     className={`flex gap-2 py-2.5 px-4 rounded justify-center items-center text-sm ${className ? className :""}`}
      onClick={onClick}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}

export default Button;
