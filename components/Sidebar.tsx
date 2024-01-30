import { KeyboardEvent } from "react";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  function handleSearch(e: KeyboardEvent<HTMLInputElement>) {
    console.log("Pressed!");
    
  }

  return (
    <aside className="h-screen bg-white">
      <div className="m-2">
        <Input name="searchText" className="h-12" type="text" placeholder="Buscar..." onKeyUp={(e) => handleSearch(e)}/>
      </div>
      <ScrollArea className="h-full w-full">
        {children}
      </ScrollArea>
    </aside>
  )
}
