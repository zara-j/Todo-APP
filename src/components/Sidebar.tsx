import type { CategoryFilter } from "../App";

interface ISidebarProps {
  selectedCategory: CategoryFilter;
  setSelectedCategory: (category: CategoryFilter) => void
}

const Sidebar = (props: ISidebarProps) => {
  return (
    <>
      {/* aside for larger screens */}
      <aside className="w-full lg:w-1/4 border-r border-r-gray-400 hidden lg:block">
        <ul className="py-20 mx-auto px-5 flex flex-col gap-2">
          <li className="text-green-900 hover:bg-emerald-700 rounded-lg p-2">All</li>
          <li className=" hover:bg-emerald-700 rounded-lg p-2">Groceries</li>
          <li className=" hover:bg-emerald-700 rounded-lg p-2">College</li>
          <li className=" hover:bg-emerald-700 rounded-lg p-2">Payments</li>
        </ul>
      </aside>
      {/* aside for mobile devices */}
      <aside className="drawer block lg:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="btn drawer-button absolute left-2 top-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>
        <div className="drawer-side z-20">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-full bg-base-200 text-lg relative">
            <label
              htmlFor="my-drawer"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl"
            >
              &times;
            </label>
            <ul className="py-20 flex flex-col gap-2 px-5">
            {["All", "Groceries", "College", "Payments"].map((cat)=> (
              <li 
              className="hover:bg-emerald-700 rounded-lg p-2"
              onClick={() => props.setSelectedCategory(cat as CategoryFilter)}>
               {cat}
              </li>
            ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
