import { useLocation, Link } from "react-router-dom";

export default function CategoryTabs() {
  const location = useLocation();
  const currentFilter = new URLSearchParams(location.search).get('filter');

  const activeStyle = "underline font-bold text-black dark:text-white";
  const defaultStyle = "hover:underline text-gray-600 dark:text-gray-400";

  return (
    <div className="flex justify-center gap-14 text-gray-700 dark:text-gray-300 font-medium text-xl pb-2 pt-4 bg-white dark:bg-gray-900">
      <Link to="/shop" className={!currentFilter ? activeStyle : defaultStyle}>All</Link>
      <Link to="/shop?filter=bestSeller" className={currentFilter === "bestSeller" ? activeStyle : defaultStyle}>Best Seller</Link>
      <Link to="/shop?filter=women" className={currentFilter === "women" ? activeStyle : defaultStyle}>Women</Link>
      <Link to="/shop?filter=men" className={currentFilter === "men" ? activeStyle : defaultStyle}>Men</Link>
    </div>
  );
}