import { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Input, FormFeedback, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { handleProfileModal, handleLogin, handleRegistration } from '../state/actions';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schemaSignIn = yup.object().shape({
  email: yup.string().email().required("Email is required!"),
  password: yup.string().required("Password is required!").min(4, "Your password must be 6 characters long!"),
});

const schemaSignUp = yup.object().shape({
  email: yup.string().email().required("Email is required!"),
  password: yup.string().required("Password is required!").min(4, "Your password must be 6 characters long!"),
});

const ProfileModal = ({ isOpen, toggleHandler }) => {
  const [display, setDisplay] = useState(false);

  const {
    register: registerSignIn,
    handleSubmit: handleSubmitSignIn,
    formState: {
      errors: errorsSignIn
    }
  } = useForm({
    resolver: yupResolver(schemaSignIn),
  });

  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    formState: {
      errors: errorsSignUp
    }
  } = useForm({
    resolver: yupResolver(schemaSignUp),
  });

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    console.log(state);
  }, [state, dispatch]);

  const submitSignIn = (data) => {
  }
  const submitSignUp = (data) => {
    dispatch(handleRegistration(data));
  }

  const handlePM = () => {
    dispatch(handleProfileModal());
  };

  const displaySignUp = () => {
    setDisplay(true);
  };

  const displaySignIn = () => {
    setDisplay(false);
  };

  if (errorsSignIn) {
    console.log(errorsSignIn);
  }

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggleHandler}>
        <ModalHeader>
          <button type="button" onClick={displaySignIn}>Sign In</button>
          <button type="button" onClick={displaySignUp}>Sign Up</button>
          <button type="button" onClick={toggleHandler}>Close</button>
        </ModalHeader>
        <ModalBody>
          {!display ? (
            <div>
              <h2>Sign In</h2>
              <Form onSubmit={handleSubmitSignIn(submitSignIn)}>
                <FormGroup>
                  <Label for="email">
                    Email
                  </Label>
                  <Input {...registerSignIn('email')} />
                  <FormFeedback>
                    {/* {errors.email.message ? errors?.email.message : null} */}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="password">
                    Password
                  </Label>
                  <Input {...registerSignIn('password')} />
                  <FormFeedback>
                    {/* {errors.password.message ? errors?.password.message : null} */}
                  </FormFeedback>
                </FormGroup>
                <Button type="submit">Submit</Button>
              </Form>
            </div>
          ) : (
            <div>
              <h2>Sign Up</h2>
              <Form onSubmit={handleSubmitSignUp(submitSignUp)}>
                <FormGroup>
                  <Label for="username">
                    Username
                  </Label>
                  <Input {...registerSignUp('username')} />
                  <FormFeedback>
                    {/* {errors.username.message ? errors?.username.message : null} */}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="email">
                    Email
                  </Label>
                  <Input {...registerSignUp('email')} />
                  <FormFeedback>
                    {/* {errors.email.message ? errors?.email.message : null} */}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="password">
                    Password
                  </Label>
                  <Input {...registerSignUp('password')} />
                  <FormFeedback>
                    {/* {errors.password.message ? errors?.password.message : null} */}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="password_confirmation">
                    Password Confirmation
                  </Label>
                  <Input {...registerSignUp('password_confirmation')} />
                  <FormFeedback>
                    {/* {errors.password_confirmation.message ? errors?.password_confirmation.message : null} */}
                  </FormFeedback>
                </FormGroup>
                <Button type="submit">Submit</Button>
              </Form>
            </div>
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default ProfileModal;