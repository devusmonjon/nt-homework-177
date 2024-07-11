import { IUsersList } from "@/interfaces";
import Image from "next/image";
import React from "react";

const UsersList = ({ data }: IUsersList) => {
    return (
        <>
            <h1 className="text-[#fff] text-[35px] font-bold mb-10 text-center">
                Users List
            </h1>
            <div className="flex">
                {data.map((user) => (
                    <div
                        key={user.id}
                        className="flex flex-col items-center border-[2px] border-[#fff] border-solid p-2 w-[250px] m-2 backdrop-blur-2xl"
                    >
                        <div className="w-[80px] h-[80px] rounded-full border-[2px] border-[#fff] border-solid bg-[#303030] overflow-hidden">
                            <Image
                                src={"https://i.pravatar.cc/300"}
                                alt=""
                                width={80}
                                height={80}
                                className="rounded-full object-cover w-full h-full"
                            />
                        </div>
                        <h1 className="text-[#fff] text-[20px] font-bold mt-2">
                            {user.firstname}
                        </h1>
                        <p className="text-[#fff] text-[16px]">
                            {user.lastname}
                        </p>
                        <p className="text-[#fff] text-[16px] mt-2">
                            {user.email}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default UsersList;