import { Button } from "@/components/ui/button";
import { logout } from "@/service/logout";

export default function homePage() {
  return (
    <div>
      <h2>Home</h2>

      <form action={logout}>
        <Button
          type="submit"
          className="bg-red-500 px-5 cursor-pointer"
        >
          Logout
        </Button>
      </form>
    </div>
  );
}
