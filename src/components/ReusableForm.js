import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReusableForm(props) {
  const {contact} = props
  let formType = null;
  if (props.contact === null) {
    formType = <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Control
            type='text'
            name='firstName'
            placeholder='FirstName.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            name='lastName'
            placeholder='LastName.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='phoneNumber'
            placeholder='PhoneNumber.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='email'
            placeholder='Email.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='contract'
            placeholder='Contract.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='companyName'
            placeholder='CompanyName.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='notes'
            placeholder='Notes.' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='bool'
            name='contractClosed'
            placeholder='ContractClosed.' />
          </Form.Group>
        <div style={{padding: 10}}>
          <Button variant="info" type='submit'>{props.buttonText}</Button>
        </div>
      </Form>
    </React.Fragment>
  } else {
    formType = <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
      <Form.Group>
          <Form.Control
            type='text'
            name='firstName'
            placeholder='FirstName.' 
            defaultValue= {contact.firstName} />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            name='lastName'
            placeholder='LastName.' 
            defaultValue= {contact.lastName} />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='phoneNumber'
            placeholder='PhoneNumber.' 
            defaultValue= {contact.phoneNumber} />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='email'
            placeholder='Email.'
            defaultValue= {contact.email} />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='contract'
            placeholder='Contract.' 
            defaultValue= {contact.contract} />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='companyName'
            placeholder='CompanyName.' 
            defaultValue= {contact.companyName} />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            name='notes'
            placeholder='Notes.'
            defaultValue= {contact.notes} />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='bool'
            name='contractClosed'
            placeholder='ContractClosed.'
            defaultValue= {contact.contractClosed} />
          </Form.Group>
        <div style={{padding: 10}}>
          <Button variant="info" type='submit'>{props.buttonText}</Button>
        </div>
      </Form>
    </React.Fragment>
  }
  return formType
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;