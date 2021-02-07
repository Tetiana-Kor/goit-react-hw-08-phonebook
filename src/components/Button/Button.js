import s from './Button.module.css';

export default function Button({ children, onClick, ...props }) {
  return (
    <button type="submit" className={s.btn} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
