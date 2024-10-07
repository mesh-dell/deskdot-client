import { Input, Textarea } from "@chakra-ui/react";
import { Form } from "react-router-dom";

export default function SettingsSeller() {
  return (
    <div className="space-y-10">
      <h1 className="font-semibold">Settings</h1>

      <div className="space-y-1">
        <h2>Profile</h2>
        <h3 className="text-light-grey">Logged in as julia24@gmail.com</h3>
      </div>

      <div>
        <Form className="space-y-8">
          <div className="space-y-8 md:flex md:space-x-10 md:space-y-0">
            <div>
              <label htmlFor="first">First Name</label>
              <Input id="first" placeholder="Jane" />
            </div>
            <div>
              <label htmlFor="last">Last Name</label>
              <Input id="last" placeholder="Doe" />
            </div>
          </div>

          <div className="space-y-8 md:block md:space-y-8">
            <div>
              <label htmlFor="storeName">Store Name</label>
              <Input id="storeName" placeholder="" />
            </div>
            <div>
              <label htmlFor="description">Store Description</label>
              <Textarea id="description" placeholder="" />
            </div>
          </div>

          <button
            className="rounded-md bg-dark-green px-6 py-2 text-white"
            type="submit"
          >
            Update Profile
          </button>
        </Form>
      </div>
    </div>
  );
}
