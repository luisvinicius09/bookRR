import { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Input, FormFeedback, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogin, handleRegistration } from '../state/actions';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schemaSignIn = yup.object().shape({
  email: yup.string().email("Please enter a valid email. Ex: example@email.com").required("Email is required!"),
  password: yup.string().required("Password is required!").min(4, "Your password must be 6 characters long!"),
});

const schemaSignUp = yup.object().shape({
  username: yup.string().required("Name is required!"),
  email: yup.string().email("Please enter a valid email. Ex: example@email.com").required("Email is required!"),
  password: yup.string().required("Password is required!").min(4, "Your password must be 6 characters long!"),
  password_confirmation: yup.string().required("Password confirmation is required!").min(4, "Your password confirmation must be 6 characters long!"),
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
    dispatch(handleLogin(data));
    console.log(data);
  }

  const submitSignUp = (data) => {
    dispatch(handleRegistration(data));
  }

  const displaySignUp = () => {
    setDisplay(true);
  };

  const displaySignIn = () => {
    setDisplay(false);
  };

  if (errorsSignIn) {
    console.log(errorsSignIn);
  }

  if (errorsSignUp) {
    console.log(errorsSignUp);
  }

  return (
    <>
      {!state.user.loggedIn ? (
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
                    <Input type="email" {...registerSignIn('email')} key="signUpEmail" />
                    <FormFeedback>
                      {/* {errors.email.message ? errors?.email.message : null} */}
                    </FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">
                      Password
                    </Label>
                    <Input type="password" {...registerSignIn('password')} key="signUpPassowrd" />
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
                    <Input type="text" {...registerSignUp('username')} />
                    <FormFeedback>
                      {/* {errorsSignUp.username.message ? errorsSignUp?.username.message : null} */}
                    </FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">
                      Email
                    </Label>
                    <Input type="email" {...registerSignUp('email')} />
                    <FormFeedback>
                      {/* {errorsSignUp.email.message ? errorsSignUp?.email.message : null} */}
                    </FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">
                      Password
                    </Label>
                    <Input type="password" {...registerSignUp('password')} />
                    <FormFeedback>
                      {/* {errorsSignUp.password.message ? errorsSignUp?.password.message : null} */}
                    </FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label for="password_confirmation">
                      Password Confirmation
                    </Label>
                    <Input type="password" {...registerSignUp('password_confirmation')} />
                    <FormFeedback>
                      {/* {errorsSignUp.password_confirmation.message ? errorsSignUp?.password_confirmation.message : null} */}
                    </FormFeedback>
                  </FormGroup>
                  <Button type="submit">Submit</Button>
                </Form>
              </div>
            )}
          </ModalBody>
        </Modal>
      ) : <Modal isOpen={isOpen} toggle={toggleHandler}>
      <ModalHeader>
        <button type="button" onClick={displaySignIn}>Sign In</button>
        <button type="button" onClick={displaySignUp}>Sign Up</button>
        <button type="button" onClick={toggleHandler}>Close</button>
      </ModalHeader>
      <ModalBody>
        {!display ? (
          <div>

          </div>
        ) : (
          <div>
            lol
          </div>
        )}
      </ModalBody>
    </Modal>}
    </>
  );
};

export default ProfileModal;