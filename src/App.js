import { Container, Content, Row } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");

  const [showNumber, setShowNumber] = useState("0");

  const handleOnClear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setShowNumber("");
  };
  const handleAddNumber = (number) => {
    let result = "";
    if (operation === "") {
      result = firstNumber + number;
      setFirstNumber(result);
    } else {
      result = secondNumber + number;
      setSecondNumber(result);
    }
    setShowNumber(result);
  };
  const handleRemoveNumber = () => {
    let result = "";
    if (operation === "") {
      if (firstNumber.length > 0) {
        result = firstNumber.substring(0, firstNumber.length - 1);
        setFirstNumber(result);
      }
    } else {
      if (secondNumber.length > 0) {
        result = secondNumber.substring(0, secondNumber.length - 1);
        setSecondNumber(result);
      }
    }
    setShowNumber(result);
  };

  const handleSumNumbers = () => {
    setOperation("+");
    setShowNumber("+");
  };
  const handleMultipleNumbers = () => {
    setOperation("*");
    setShowNumber("*");
  };
  const handleDividerNumbers = () => {
    setOperation("/");
    setShowNumber("/");
  };

  const handleMinusNumbers = () => {
    setOperation("-");
    setShowNumber("-");
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && firstNumber !== "0") {
      let result = 0;
      switch (operation) {
        case "+":
          result = parseFloat(firstNumber) + parseFloat(secondNumber);
          break;
        case "-":
          result = parseFloat(firstNumber) - parseFloat(secondNumber);
          break;
        case "*":
          result = parseFloat(firstNumber) * parseFloat(secondNumber);
          break;
        case "/":
          result = parseFloat(firstNumber) / parseFloat(secondNumber);
          break;
        default:
          break;
      }

      setShowNumber(result);
      setFirstNumber(result);
      setOperation("+");
      setSecondNumber("");
    }
  };
  return (
    <div className="App">
      <Container>
        <Content>
          <Input value={showNumber} />
          <Row>
            <Button label="7" onClick={() => handleAddNumber("7")} />
            <Button label="8" onClick={() => handleAddNumber("8")} />
            <Button label="9" onClick={() => handleAddNumber("9")} />
            <Button label="/" onClick={handleDividerNumbers} />
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber("4")} />
            <Button label="5" onClick={() => handleAddNumber("5")} />
            <Button label="6" onClick={() => handleAddNumber("6")} />
            <Button label="x" onClick={handleMultipleNumbers} />
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber("1")} />
            <Button label="2" onClick={() => handleAddNumber("2")} />
            <Button label="3" onClick={() => handleAddNumber("3")} />
            <Button label="-" onClick={handleMinusNumbers} />
          </Row>

          <Row>
            <Button label="0" onClick={() => handleAddNumber("0")} />
            <Button label="." onClick={() => handleAddNumber(".")} />
            <Button label="DEL" onClick={() => handleRemoveNumber()} />
            <Button label="+" onClick={handleSumNumbers} />
          </Row>
          <Row>
            <Button label="C" onClick={handleOnClear} />
            <Button label="=" onClick={handleEquals} />
          </Row>
        </Content>
      </Container>
    </div>
  );
}

export default App;
