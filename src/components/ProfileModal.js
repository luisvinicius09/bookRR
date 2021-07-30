import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Input, FormFeedback, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { handleProfileModal } from '../state/actions';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required("Email is required!"),
  password: yup.string().required("Password is required!").min(6, "Your password must be 6 characters long!"),
});

const ProfileModal = ({ isOpen, toggleHandler }) => {
  const [display, setDisplay] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const submitSignIn = data => console.log(data);
  const submitSignUp = data => console.log(data);
  
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handlePM = () => {
    dispatch(handleProfileModal());
  };


  const displaySignUp = () => {
    setDisplay(true);
  };

  const displaySignIn = () => {
    setDisplay(false);
  };

  if (errors) {
    console.log(errors);
  }

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggleHandler}>
        <ModalHeader>
          <button type="button" onClick={() => setDisplay(false)}>Sign In</button>
          <button type="button" onClick={() => setDisplay(true)}>Sign Up</button>
          <button type="button" onClick={toggleHandler}>Close</button>
        </ModalHeader>
        <ModalBody>
          {!display ? (
            <div>
              <h2>Sign In</h2>
              <Form onSubmit={handleSubmit(submitSignIn)}>
                <FormGroup>
                  <Label for="email">
                    Email
                  </Label>
                  <Input {...register('email')} />
                  <FormFeedback>
                    {/* {errors.email.message ? errors?.email.message : null} */}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="password">
                    Password
                  </Label>
                  <Input {...register('password')} />
                  <FormFeedback>
                    {/* {errors.password.message ? errors?.password.message : null} */}
                  </FormFeedback>
                </FormGroup>
                <Button type="submit">Submit</Button>
              </Form>
            </div>
          ) : (
            <div>
              <h2>Other</h2>
              <Form onSubmit={handleSubmit(submitSignUp)}>
                
              </Form>
            </div>
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default ProfileModal;