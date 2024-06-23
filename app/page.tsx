import { signinAction } from "@/actions/auth-actions";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <form action={signinAction}>
        <Button type="submit"> Log In </Button>
      </form>
    </main>
  );
}
