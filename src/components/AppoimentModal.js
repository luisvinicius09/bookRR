import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const { Modal, ModalHeader, ModalBody, FormGroup, Label, Input, FormFeedback, Form, Button } = require('reactstrap')

const schema = yup.object().shape({
  name: yup.string().required("Name is required!").min(3, "Name should be at least 3 characters long!"),
});

const AppoimentModal = ({ isOpen, toggleHandler, id }) => {
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  const submitData = (data) => console.log(data);

  return (
    <Modal isOpen={isOpen} toggle={toggleHandler}>
      <ModalHeader>
        Create an appoiment
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit(submitData)}>

          <FormGroup>
            <Label for="name">
              Full Name
            </Label>
            <Input {...register('name')}/>
            <FormFeedback>
              Errors
            </FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="name">
              Full Name
            </Label>
            <Input {...register('name')}/>
            <FormFeedback>
              Errors
            </FormFeedback>
          </FormGroup>

          <Button type="submit">Submit</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default AppoimentModal;