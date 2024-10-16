export default function LoginInfo({profile}) {
  return (
    <div className="md:mb-10 space-y-1">
      <h1 className="text-xl font-semibold">{profile.first_name} {profile.last_name}</h1>
      <h2 className="text-light-grey">{profile.email}</h2>
    </div>
  );
}
