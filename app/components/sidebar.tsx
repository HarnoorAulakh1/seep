import Direct_Message from './dm';
import ToolBar from './toolbar';

function Sidebar() {
  return (
    <div className="bg-[#2f343d] h-full w-[24%]">
      <ToolBar/>
      <hr className=' border-[#474f5d] w-full h-[2px]'/><br />
      <Direct_Message/>
    </div>
  );
}

export default Sidebar;