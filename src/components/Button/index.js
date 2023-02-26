import { ButtonContainer } from "./styles";


export default function Button({label, onClick, disabled}) {
    return (
        <ButtonContainer onClick={onClick} disabled={disabled}>
            {label}
        </ButtonContainer>
    );
}