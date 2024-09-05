import { useUser } from "reactfire";

const DashboardPage = () => {
  const { data: user } = useUser();
  console.log({ user });

  return (
    <div>
      <h1 className="text-3xl mb-4">Dashboard Page</h1>
      <p className="mb-2">welcome {user?.displayName}</p>
      <p className="mb-2">email: {user?.email}</p>
    </div>
  );
};
export default DashboardPage;
