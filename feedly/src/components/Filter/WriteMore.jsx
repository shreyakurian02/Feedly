import React from "react";
import { Modal } from "@bigbinary/neetoui/v2";
import { Formik, Form } from "formik";
import { Button, Typography } from "@bigbinary/neetoui/v2";
import { Input, Textarea } from "@bigbinary/neetoui/v2/formik";
import { INITIAL_VALUES, VALIDATION_SCHEMA } from "./constants";
import axios from "axios";

const WriteMore = ({ setShowWriteMoreModal }) => {
  const URL = process.env.REACT_APP_WEBHOOK_URL
  const handleSubmit = (values) => {
    axios.post(URL, values);
    setShowWriteMoreModal(false);
  };

  return (
    <>
      <Modal
        isOpen={setShowWriteMoreModal}
        onClose={() => setShowWriteMoreModal(false)}
        size="md"
      >
        <Modal.Header>
          <Typography style="h2">Can’t find what you came for?</Typography>
          <Typography style="body2">
            Write to us about which category interests you and we will fetch
            them for you daily, for free.
          </Typography>
        </Modal.Header>
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={handleSubmit}
          validationSchema={VALIDATION_SCHEMA}
        >
          <Form className="w-full">
            <Modal.Body>
              <div className="space-y-5 w-full">
                <div className="flex flex-row items-center justify-center space-x-8 space-x-2">
                  <Input label="Name" name="name" placeholder="Oliver Smith" />
                  <Input label="Email" name="email" placeholder="Enter Email" />
                </div>
                <Textarea
                  label="Message"
                  name="message"
                  rows={3}
                  placeholder="Write your meassage here"
                />
              </div>
            </Modal.Body>
            <Modal.Footer className="flex space-x-4">
              <Button type="submit" label="Save Changes" />
              <Button
                style="text"
                label="Cancel"
                onClick={() => setShowWriteMoreModal(false)}
              />
            </Modal.Footer>
          </Form>
        </Formik>
      </Modal>
    </>
  );
};

export default WriteMore;
