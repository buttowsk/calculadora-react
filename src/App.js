import { Container, Content, Linha } from './styles';
import Input from './components/Input'
import Button from './components/Button';
import { useState } from 'react';


function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      handleAddNumber('+')
      setOperation('+')
    } else {
      const indexSymbol = currentNumber.indexOf('+')
      const secondNumber = currentNumber.slice((indexSymbol + 1))
      console.log(firstNumber, currentNumber, secondNumber)
      const operacao = Number(firstNumber) + Number(secondNumber)
      setCurrentNumber(String(operacao))
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      handleAddNumber('-')
      setOperation('-')
    } else {
        const indexSymbol = currentNumber.indexOf('-')
        const secondNumber = currentNumber.slice((indexSymbol + 1))
        const operacao = Number(firstNumber) - Number(secondNumber)
        setCurrentNumber(String(operacao))
        setOperation('')
    }
  }

  const handleTimesNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      handleAddNumber('×')
      setOperation('×')
    } else {
      const indexSymbol = currentNumber.indexOf('×')
      const secondNumber = currentNumber.slice((indexSymbol + 1))
      const operacao = Number(firstNumber) * Number(secondNumber)
      setCurrentNumber(String(operacao))
      setOperation('')
    }
  }

  const handleDividedByNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      handleAddNumber('÷')
      setOperation('÷')
    } else {
      const indexSymbol = currentNumber.indexOf('÷')
      const secondNumber = currentNumber.slice((indexSymbol + 1))
      const operacao = Number(firstNumber) / Number(secondNumber)
      setCurrentNumber(String(operacao))
      setOperation('')
    }
  }

  const handleAddNumber = (number) => {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
    }

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation) {
          case '+':
            handleSumNumbers()
            break;
          case '-':
            handleMinusNumbers()
            break;
          case '÷':
            handleDividedByNumbers()
            break;
          case '×':
            handleTimesNumbers()
            break;
          default:
            break;
      }
  }
}

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Linha>
          <Button label={'C'} onClick={handleOnClear} />
          <Button label={'+'} onClick={handleSumNumbers}/>
        </Linha>
        <Linha>
          <Button label={7} onClick={() => handleAddNumber('7')}/>
          <Button label={8} onClick={() => handleAddNumber('8')}/>
          <Button label={9} onClick={() => handleAddNumber('9')}/>
          <Button label={'-'} onClick={handleMinusNumbers}/>
        </Linha>
        <Linha>
          <Button label={4} onClick={() => handleAddNumber('4')}/>
          <Button label={5} onClick={() => handleAddNumber('5')}/>
          <Button label={6} onClick={() => handleAddNumber('6')}/>
          <Button label={'×'} onClick={handleTimesNumbers}/>
        </Linha>
        <Linha>
          <Button label={1} onClick={() => handleAddNumber('1')}/>
          <Button label={2} onClick={() => handleAddNumber('2')}/>
          <Button label={3} onClick={() => handleAddNumber('3')}/>
          <Button label={'÷'} onClick={handleDividedByNumbers}/>
        </Linha>
        <Linha>
          <Button label={'0'} onClick={() => handleAddNumber('0')} />
          <Button label={'='} onClick={handleEquals}/>
        </Linha>
      </Content>
    </Container>
  );
}

export default App;
