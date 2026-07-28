"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type Props = {
  search: string;
  setSearch: React.Dispatch<
    React.SetStateAction<string>
  >;
};

const SearchConversation = ({
  search,
  setSearch,
}: Props) => {
  return (
    <div className="search-box">
      <Search size={18} />

      <Input
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Search conversations"
        className="
          border-0
          bg-transparent
          shadow-none
          focus-visible:ring-0
          focus-visible:ring-offset-0
        "
      />
    </div>
  );
};

export default SearchConversation;