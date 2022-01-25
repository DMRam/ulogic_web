import {
    Button,
    Form,
    TextArea,
    TextInput,
  } from "carbon-components-react";
  import React from "react";
  
  export const FormComp = () => {
    return (
  
      <Form>
        <div style={{ marginBottom: "2rem" }}>
          <TextInput
            helperText="Please type your name"
            id="test2"
            invalidText="No name entered"
            labelText="Name"
            placeholder="Your name"
          />
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <TextInput
            helperText="Please type your last name"
            id="test2"
            invalidText="No name entered"
            labelText="Last Name"
            placeholder="Last Name"
          />
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <TextArea
            cols={50}
            helperText="(~100 character count maximum)"
            id="test5"
            invalidText="Invalid error message."
            labelText="Message"
            placeholder="Please, leave your message"
            rows={4}
          />
         
        </div>
  
        <Button style={{float:"left"}} kind="primary" tabIndex={0} type="submit">
          Submit
        </Button>
        <br/>
  
      </Form>
    );
  };
  