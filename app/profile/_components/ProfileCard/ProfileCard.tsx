"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import EditProfileModal from "./EditProfileModal";

type Props = {
  profile: {
    id: string;
    userId: string;
    linkedin: string | null;
    github: string | null;
    user: {
      id: string;
      name: string;
      email: string;
      profilePhoto: string | null;
      role: string;
    };
  };
};

const ProfileCard = ({ profile }: Props) => {
  const [openModal, setModal] = useState(false);  
  
  const initials =
    profile.user.name
      ?.split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "U";

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="">
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute -top-20 -left-20 h-100 w-100 rounded-full bg-purple-600/20 blur-[120px]" />

          <div className="absolute -bottom-32 right-0 h-112.5 w-112.5 rounded-full bg-blue-600/20 blur-[120px]" />

          <div className="absolute bottom-0 left-1/2 h-h-62.5 w-h-62.5 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center p-10 lg:p-20">
          {/* LEFT SIDE */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Dotted Ring */}
              <div className=" h-80 w-[320px] rounded-full border border-dashed border-white/15 flex items-center justify-center"
              >
                {profile.user.profilePhoto ? (
                  <Image
                    src={profile.user.profilePhoto}
                    alt="user name"
                    width={180}
                    height={180}
                    className="h-45 w-45 rounded-full object-cover border  border-white/10"
                  />
                ) : (
                  <div
                    className=" h-45 w-45 rounded-full bg-linear-to-br  from-violet-500/40  to-cyan-500/40 border  border-white/10 flex items-center justify-center  text-white text-6xl font-bold">
                    {initials}
                  </div>
                )}
              </div>

              {/* Github Floating */}
              <div className=" absolute top-16 left-10 h-14 w-14 rounded-full border  border-white/10  bg-white/5 backdrop-blur-xl flex items-center justify-center  text-white"
              >
                <FaGithub size={22} />
              </div>

              {/* Linkedin Floating */}
              <div className=" absolute top-16 right-10 h-14 w-14 rounded-full border  border-white/10  bg-white/5 backdrop-blur-xl flex items-center justify-center  text-white">
                <FaLinkedin size={22} />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <p className="uppercase tracking-[4px] text-xs text-zinc-500">
              Profile
            </p>

            <h1 className="mt-4 text-5xl lg:text-6xl font-bold text-white">
              {profile.user.name}
            </h1>

            <div className="flex items-center gap-3 mt-5 text-zinc-400">
              <Mail size={18} />
              {profile.user.email}
            </div>

            <div className="mt-10 border-t border-white/10 pt-10">
              <p className="uppercase tracking-[4px] text-xs text-zinc-500 mb-8 social-margin">
                Connected Accounts
              </p>

              <section className="flex justify-between">
                <div>
                  {/* LinkedIn */}
                  <div className="flex items-center justify-between mb-6 social-margin">
                    <div className="flex items-center gap-4">
                      <div className=" h-12 w-12 rounded-full border  border-white/10 flex items-center justify-center  text-white">
                        <FaLinkedin />
                      </div>

                      <div>
                        <h3 className="text-white">LinkedIn</h3>

                        <p className="text-zinc-500">
                          {profile.linkedin || "Not connected"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Github */}
                  <div className="flex items-center justify-between social-margin">
                    <div className="flex items-center gap-4">
                      <div className=" h-12 w-12 rounded-full border  border-white/10 flex items-center justify-center  text-white">
                        <FaGithub />
                      </div>

                      <div>
                        <h3 className="text-white">GitHub</h3>

                        <p className="text-zinc-500">
                          {profile.github || "Not connected"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="edit-section">
                    <Image src="/edit.png" alt="edit btn" width={30} height={30} className="rotate-30 cursor-pointer" 
                    onClick={() => {
                        setModal(true)
                    }} />
                </div>

                <EditProfileModal
                    open={openModal}
                    onClose={() =>
                        setModal(false)
                    }
                    profile={{
                        github: profile.github,
                        linkedin: profile.linkedin,
                    }}
                />
              </section>
            </div>

            {/* Role Badge */}
            <div className="social-margin">
              <Badge className="bg-indigo-800 text-white profile-badge-padding">
                {profile.user.role}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
