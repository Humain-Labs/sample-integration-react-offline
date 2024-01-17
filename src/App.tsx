import './App.css'
import {PHeading, PButton, PTextFieldWrapper, PSelectWrapper, PButtonPure} from '@porsche-offline-design-system/components-react';


function App() {

  return (
    <>
      <PHeading>Welcome to Porsche Design System</PHeading>
      <br/>
      <PButton>Some Button</PButton>
      <br />
      <br />
      <PButtonPure>Some Button</PButtonPure>
      <br/>
      <br/>
      <PTextFieldWrapper>
        <input type="text" name="foo" />
      </PTextFieldWrapper>
      <br/>
      <PSelectWrapper>
        <select name="bar">
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </PSelectWrapper>
    </>
  )
}

export default App
