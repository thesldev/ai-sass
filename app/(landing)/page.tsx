import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      Landing page(Unprotected)
      <div>
        {/* set sign-in button */}
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        {/* set sign-up button */}
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
