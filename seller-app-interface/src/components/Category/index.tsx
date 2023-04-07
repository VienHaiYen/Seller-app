import Product from "../Product";

function Category() {
    return ( 
        <>
            <p className="text-xl mb-2 ">Deal Chop Nhoang</p>
            <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 [&>*:not(:last-child)]:mr-2">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </>
     );
}

export default Category;