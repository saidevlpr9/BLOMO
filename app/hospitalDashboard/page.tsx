import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DonorsTable from "../myCustomComponents/donorsTable";
import Pagination from "../myCustomComponents/pagination";
import ConductCamp from "../myCustomComponents/conductCamp";
import PostBlog from "../myCustomComponents/blogPosting";

const UserDashboardPage = () => {
  return (
    <div className="px-10">
      <h1 className="text-[#8A0303] ml-10 max-sm:leading-none max-sm:text-5xl max-sm:ml-0">
        Available Donors
      </h1>
      <div className="flex justify-start m-10 w-full ">
        <div className="flex w-full max-w-sm items-center space-x-2 text-black border-black max-sm:mr-10 ">
          <Input
            type="email"
            placeholder="Search for BloodType,Location or any related Keywords....."
          />
          <Button type="submit" className="max-sm:hover:bg-[#8A0303]">
            Search
          </Button>
        </div>
      </div>
      <div className="flex justify-end -mt-7 max-sm:mr-5">
        <div className="max-sm:hover:bg-[#8A0303] m-3">
          <ConductCamp />
        </div>
        
        <div className="max-sm:hover:bg-[#8A0303] m-3"><PostBlog /></div>
      </div>
      <DonorsTable />
      <div className="mt-6 "></div>
      <Pagination />
    </div>
  );
};
export default UserDashboardPage;
