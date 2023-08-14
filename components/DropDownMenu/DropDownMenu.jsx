import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropDownMenu(props) {
  const data = props.data;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        {data.button}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {data.section.map((info, index) => (
          <React.Fragment key={index + info.title}>
            <DropdownMenuLabel>{info.title}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {info.list.map((list, index) => (
                <DropdownMenuItem
                  key={index + list.name}
                  onClick={() => list.action()}
                >
                  <span>{list.name}</span>
                  <DropdownMenuShortcut>{list.icon}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            {index !== info.list.length - 1 && <DropdownMenuSeparator />}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/** 
 * How To Use
 * 
 * 1. Set Object Like Below
 * const dropDown = {
    button: "CAN BE AN ICON OR TEXT",
    section: [
      {
        title: "Option",
        list: [
          {
            name: "Edit",
            action: () => console.log("Action"),
            icon: <Pencil2Icon />,
          },
          {
            name: "Delete",
            action: () => console.log("Action"),
            icon: <TrashIcon />,
          },
        ],
      },
    ],
  };
*
* 2. Import and Place this component like below
* <DropDownMenu data={dropDown} />
 * */
