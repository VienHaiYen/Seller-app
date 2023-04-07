import NavChangeItem from "../NavChangeItem";
import {item} from "../../utils"
const items : Array<item> = [
    {
        script: "LazMall", icon:"https://laz-img-cdn.alicdn.com/images/ims-web/TB15wgLWBr0gK0jSZFnXXbRRXXa.png"
    },
    {
        script: "Mã Giảm Giá", icon:"//laz-img-cdn.alicdn.com/images/ims-web/TB1UiNthUT1gK0jSZFhXXaAtVXa.png"
    },
    {
        script: "Nạp Thẻ & eVoucher", icon:"//laz-img-cdn.alicdn.com/images/ims-web/TB1DahvhO_1gK0jSZFqXXcpaXXa.png"
    },
    {
        script: "LazGlobal", icon:"//laz-img-cdn.alicdn.com/images/ims-web/TB1CDWbBYj1gK0jSZFuXXcrHpXa.png"
    }
]

function NavChange() {
    return (
        <div className="my-10 flex">
            {
                items.map((item:item) =>
                    <NavChangeItem abc={item} />
                )
            }
        </div>
     );
}

export default NavChange;