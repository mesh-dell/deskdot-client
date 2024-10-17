import { Input } from "@chakra-ui/react";
import { Form } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { updateProfile } from "../../services/userService";

export async function action({ request }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const formData = await request.formData();
  const payload = { ...Object.fromEntries(formData), email: user.user.email };
  const updatedProfile = await updateProfile(user, payload);
  return { updatedProfile };
}

export default function Settings() {
  const { profile } = useLoaderData();

  return (
    <div className="space-y-10">
      <h1 className="font-semibold">Settings</h1>

      <div className="space-y-1">
        <h2>Profile</h2>
        <h3 className="text-light-grey">Logged in as {profile.email}</h3>
      </div>

      <div>
        <Form className="space-y-8" method="put">
          <div className="space-y-8 md:flex md:space-x-10 md:space-y-0">
            <div>
              <label htmlFor="first">First Name</label>
              <Input
                id="first"
                placeholder="Jane"
                defaultValue={profile.first_name}
                name="first_name"
              />
            </div>
            <div>
              <label htmlFor="last">Last Name</label>
              <Input
                id="last"
                placeholder="Doe"
                defaultValue={profile.last_name}
                name="last_name"
              />
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
