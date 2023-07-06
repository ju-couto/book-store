import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {IoMdArrowDropdown} from "react-icons/io"

interface DropdownProps {
    title: string;
    items?: string[];
}

export default function Dropdown({title }: DropdownProps) {
    return (
        <div className="block">
      <Menu as="div" className="relative inline-block text-left">
        <div
            className="hover:text-black"
        >
          <Menu.Button className="inline-flex w-full justify-center  rounded-md hover:font-semibold     focus:outline-none">
            {title}
            <IoMdArrowDropdown
              className="ml-2 -mr-1 h-5 w-5  "
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? '' : ''
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
             
                    Romance
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? '' : ''
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                 
                    Drama
                  </button>
                )}
              </Menu.Item>
            
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? '' : ''
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    
                    Horror
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? '' : ''
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
    
                    Action
                  </button>
                )}
              </Menu.Item>
         
          
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
         
    )
}