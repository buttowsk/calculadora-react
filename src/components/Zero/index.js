import './styles.css'

export default function Zero({onClick, className}) {
    return (
        <button onClick={onClick} className={className}>0</button>
    );
}