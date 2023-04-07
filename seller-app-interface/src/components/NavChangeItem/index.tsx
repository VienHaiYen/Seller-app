import { item } from "../../utils"
function NavChangeItem({abc}:{abc:item}) {
    console.log(abc);
    
    return (
        <div className="flex items-center text-ml mr-2 h-10 hover:drop-shadow px-2 py- w-64 border-2 rounded-full bg-white">
            <img className="h-full mr-2" src={abc.icon} alt="" />
            <p>{abc.script}</p>
        </div>
     );
}

export default NavChangeItem;
