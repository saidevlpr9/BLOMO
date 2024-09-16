import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DonorsTable from "../myCustomComponents/donorsTable"
import Pagination  from "../myCustomComponents/pagination";

const UserDashboardPage = () => {
  return (
    <div className="px-10">
      <h1 className="text-[#8A0303] ml-10">Available Donors</h1>
      <div className="flex justify-center m-10 w-full">
        <div className="flex w-full max-w-sm items-center space-x-2 text-black border-black">
          <Input type="email" placeholder="Search for BloodType,Location or any related Keywords....." />
          <Button type="submit">Search</Button>
        </div>
      </div>
      <DonorsTable/>
      <div className="mt-6 "></div>
      <Pagination/>
    </div>
  );
};
export default UserDashboardPage;
