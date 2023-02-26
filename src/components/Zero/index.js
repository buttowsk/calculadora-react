import './styles.css'

export default function Zero({onClick, className, disabled}) {
    return (
        <button onClick={onClick} className={className} disabled={disabled}>0</button>
    );
}