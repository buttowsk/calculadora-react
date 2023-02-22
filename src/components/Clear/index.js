import './styles.css'

export default function Clear({onClick, className}) {
    return (
        <button onClick={onClick} className={className}>C</button>
    );
}