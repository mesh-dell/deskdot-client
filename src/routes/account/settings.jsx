import { Input } from "@chakra-ui/react";
import { Form } from "react-router-dom";

export default function Settings() {
  return (
    <div className="space-y-10">
      <h1 className="font-semibold">Settings</h1>

      <div className="space-y-1">
        <h2>Profile</h2>
        <h3 className="text-light-grey">Logged in as julia24@gmail.com</h3>
      </div>

      <div>
        <Form className="space-y-8">
          <div className="md:flex md:space-x-10 md:space-y-0 space-y-8">
            <div>
              <label htmlFor="first">First Name</label>
              <Input id="first" placeholder="Jane" />
            </div>
            <div>
              <label htmlFor="last">Last Name</label>
              <Input id="last" placeholder="Doe" />
            </div>
          </div>

          <button className="px-6 py-2 bg-dark-green text-white rounded-md" type="submit">Update Profile</button>
        </Form>
      </div>
    </div>
  );
}
