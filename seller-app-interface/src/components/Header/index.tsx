import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header() {
  return (
    <div className="border-b h-20 bg-white">
      <div className="flex h-full items-center  max-w-7xl m-auto">
        <img className="h-full" src="https://inkythuatso.com/uploads/images/2021/09/lazada-logo-inkythuatso-14-11-38-31.jpg" />
        <form className="h-fit flex-1 mx-5">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="black"/>
        <div className="p-4 ml-8 h-full">
          <img className="h-full" src="https://icms-image.slatic.net/images/ims-web/556a6230-9814-442e-b644-1d720a8f56ce.png"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
