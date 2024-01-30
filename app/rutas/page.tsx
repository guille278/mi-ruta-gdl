'use client'
import Map from "@/components/Map";
import Sidebar from "@/components/Sidebar";
import { agencies } from "@/constants";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator";
import { FaBus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";




export default function page() {
  const [loading, setLoading] = useState(true)

  const handleClick = (e: React.MouseEvent, routeId: string) => {
    console.log(routeId);

  }

  useEffect(() => {
    const getData = () => {
      setInterval(() => {
        setLoading(false)
      }, 1500)
    }
    getData()
  }, [])


  return (
    <main>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultValue={25} maxSize={25}>
          <Sidebar>
            {loading ?
              (
                <div className="w-full h-screen flex justify-center items-center">
                  <div className="animate-spin">
                    <AiOutlineLoading3Quarters className="w-6 h-6 fill-slate-800" />
                  </div>
                </div>
              )
              :
              (
                <div className="flex flex-col gap-6">
                  {agencies.map((agency, index) => (
                    <div key={index} className="mx-2 flex flex-col gap-2">
                      <h1 className="text-lg uppercase"><strong>{agency.agency_name}</strong></h1>
                      <Separator />
                      <div className="flex flex-col gap-2">
                        {agency.routes.map((route, index) => (
                          <button key={index} className="text-left hover:bg-neutral-50 px-4 py-2 shadow-sm rounded flex items-center gap-2 transition-colors focus:border-slate-500 border" onClick={(e) => handleClick(e, route.route_id)}>
                            <div className="bg-slate-800 p-4 rounded">
                              <FaBus className="fill-slate-50" />
                            </div>

                            <div className="flex flex-col w-full">
                              <p><strong>{route.route_short_name}</strong></p>
                              <small className="text-neutral-400">{route.route_long_name}</small>
                            </div>

                          </button>
                        ))}
                      </div>
                      <Separator />
                    </div>
                  ))}
                </div>
              )
            }
          </Sidebar>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75} className="">
          <div className="w-full h-screen p-2">

            <Map />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  )
}
