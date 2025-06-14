import {
  SignInButton,
  UserButton,
  SignedIn,
  SignedOut,
  SignUp,
  SignUpButton,
} from "@clerk/tanstack-react-start";
import Logo from "../Logo";
import { Button } from "../ui/button";
import { LayoutDashboardIcon } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-primary backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />

        <SignedOut>
          <div className="flex items-center gap-2">
            <Button asChild variant={"link"} className="text-white">
              <SignInButton />
            </Button>

            <div className="h-6 w-px bg-white/50" />

            <Button asChild variant={"link"} className="text-white">
              <SignUpButton />
            </Button>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton
            showName
            appearance={{
              elements: {
                userButtonOuterIdentifier: {
                  color: "white",
                },
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Action
                label="Dashboard"
                labelIcon={<LayoutDashboardIcon size={14} />}
                onClick={() => navigate({ to: "/dashboard" })}
              />
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
