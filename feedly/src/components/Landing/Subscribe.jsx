import React, { useEffect, useState } from "react";
// import "../App.css";
import { Modal } from "@bigbinary/neetoui/v2";
import { Formik, Form } from "formik";
import { Button, Pane, Typography, Toastr } from "@bigbinary/neetoui/v2";
import { Input, Select,Textarea } from "@bigbinary/neetoui/v2/formik";
import { SUBSCRIPPTION_INITIAL_VALUES,VALIDATION_SCHEMA } from "./constants";
import axios from "axios";
import subscribe from './subscribe.png'

const Subscribe = ({setShowSubsribeModal}) => {

  const [subsribeData,setSubsribeData] = useState([])
  const URL = "https://webhook.site/9f54337a-cb5f-43e8-bb10-6caa824fb55a"

  const handleSubmit = (values) => {
    axios.post(URL,values)
    setShowSubsribeModal(false)
  }


  return (
   <>
       <Modal isOpen={setShowSubsribeModal} onClose={() => setShowSubsribeModal(false)} size="xs">
        <Modal.Header>
         <img src={subscribe} alt=""/>
        <Typography style="h2" className="py-2">Subscribe to Feed.ly</Typography>
        </Modal.Header>
        <Formik
        initialValues={SUBSCRIPPTION_INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={VALIDATION_SCHEMA}
      >
        <Form className="w-full">
          <Modal.Body>
            <div className="space-y-3">
            <Typography style="body2">We don’t spam, but, we deliver the latest news in short.</Typography>
            <Input  name="email" placeholder="Oliver@example.com" />
            </div>
          </Modal.Body>
          <Modal.Footer className="flex space-x-4">
            <Button  type="submit" label="Sign Up" />
            <Button
              style="text"
              label="Cancel"
              onClick={() => setShowSubsribeModal(false)}
            />
          </Modal.Footer>
        </Form>
      </Formik>
      </Modal>
   </>
  );
};

export default Subscribe;
