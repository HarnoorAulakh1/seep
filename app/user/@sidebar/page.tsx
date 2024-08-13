import ToolBar from "@/app/components/toolbar";
import Direct_Message from "@/app/components/dm";

function Sidebar() {
  return (
    <div className="bg-[#2f343d] h-full">
      <ToolBar/>
      <hr className=' border-[#474f5d] w-full h-[2px]'/><br />
      <Direct_Message/>
    </div>
  );
}

export default Sidebar;