import { RouteType } from "@/common.types";
import { Button } from "./ui/button";

export default function RouteCard({ route }: { route: RouteType }) {
  return (
    <li className="mx-4">
      <Button variant={"ghost"} className="w-auto">
        {route.route_long_name}
      </Button>
    </li>
  )
}
