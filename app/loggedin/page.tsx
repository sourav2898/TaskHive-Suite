import Tasks from "@/components/custom/Tasks";
import UserProfile from "@/components/custom/UserProfile";

export default function LoggedIn() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1> Todo List </h1>
      <UserProfile />
      <Tasks />
    </main>
  );
}
