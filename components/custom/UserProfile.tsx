"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const UserProfile = () => {
  const session = useSession();
  return (
    <div>
      <Image
        src={session?.data?.user?.image || ""}
        width={30}
        height={30}
        alt="user-profile-picture"
        className="rounded-full"
      />
    </div>
  );
};

export default UserProfile;
