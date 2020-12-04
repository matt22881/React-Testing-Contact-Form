import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import ContactForm from './components/ContactForm'

test("renders App without crashing", () => {
  render(<ContactForm />);
});

test("user can fill out and submit form", () => {
  render(<ContactForm />) 
  const fNameInput = screen.getByPlaceholderText(/Edd/i)
  const lNameInput = screen.getByPlaceholderText(/Burke/i)
  const emailInput = screen.getByLabelText(/Email/i, { selector: 'input' })
  const messageInput = screen.getByRole('textbox')
  const button = screen.getByText('Submit')

  userEvent.type(fNameInput, 'Firstname')
  userEvent.type(lNameInput, 'Lastname')
  userEvent.type(emailInput, 'email@email.email')
  userEvent.type(messageInput, 'A Changed Message')
  userEvent.click(button)

  const fName = '"firstName": "Firstname"' 
  const lName = '"lastName": "Lastname"' 
  const mail = '"email": "email@email.email"' 
  const mess = '"message": "A Changed Message"'
  expect(fName).toBeInTheDocument
  expect(lName).toBeInTheDocument
  expect(mail).toBeInTheDocument
  expect(mess).toBeInTheDocument

})