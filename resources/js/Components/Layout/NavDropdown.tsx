import {Link} from '@inertiajs/react';
import {classNames, imageStorageUrl} from "@/Utils/Helper";
import {MenuItem} from "@/types";

export default function NavDropdown({item, isActive = false}: { item: MenuItem, isActive: boolean }) {
    return (
        <div className="group nav-dropdown inline-block">
            <a
                className="outline-none focus:outline-none bg-white flex items-center font-bold text-main-600 hover:text-white hover:bg-main-600 px-2 py-3 rounded-full"
            >
                <span className="pr-1 font-semibold flex-1">{item.label}</span>
                <span>
                  <svg
                      className="fill-current h-4 w-4 transform group-hover:-rotate-180
                    transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                  >
                    <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </span>
            </a>
            <ul
                className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute
                    transition-transform duration-150 ease-in-out origin-top min-w-32"
            >
                {Object.keys(item.children).map((childKey, index) => {
                    var child = item.children[childKey];
                    const hasChildren = child.children && Object.keys(child.children).length > 0;
                    return (
                        <li className="relative hover:bg-gray-100">
                            <Link
                                href={child.data.url}
                                className={classNames(
                                    'flex items-center py-3 px-4 text-main-600 font-bold border-t',
                                    index === 0 ? 'border-t-0' : ''
                                )}
                            >
                                {
                                    child.data.icon ? (
                                        <img
                                            src={imageStorageUrl(child.data.icon)}
                                            alt=""
                                            className="h-5 w-5 mr-1"/>
                                    ) : null
                                }
                                <span className={"pr-1 flex-1"}>
                                    {child.label}
                                </span>

                                {hasChildren ? (
                                    <span className="mr-auto">
                                      <svg
                                          className="fill-current h-4 w-4
                                            transition duration-150 ease-in-out"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                      >
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                        />
                                      </svg>
                                    </span>
                                ) : null}
                            </Link>

                            {
                                child.children && Object.keys(child.children).length > 0 ? (
                                    <ul
                                        className="bg-white border rounded-sm absolute top-0 right-0
                                          transition-transform duration-150 ease-in-out origin-top-left
                                          min-w-32
                                          "
                                    >
                                        {
                                            Object.values(child.children).map((child) =>
                                                <li className="flex items-center py-3 px-4 text-main-600 font-bold border-t hover:bg-gray-100">
                                                    <Link href={child.data.url} className="text-main-600 font-bold">
                                                        {child.label}
                                                    </Link>
                                                </li>
                                            )
                                        }
                                    </ul>
                                ) : null
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
