import MobileNav from "@/components/custom/MobileNav";
import Sidebar from "@/components/custom/Sidebar";
import Tasks from "@/components/custom/Tasks";
import UserProfile from "@/components/custom/UserProfile";

export default function LoggedIn() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <MobileNav />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:px-8">
          <Tasks />
        </main>
      </div>
    </div>
  );
}
