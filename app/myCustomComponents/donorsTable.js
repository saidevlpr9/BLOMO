import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
const DonorData = [
  {
    donorId: "D001",
    name: "John Doe",
    bloodGroup: "A+",
    availability: "Available",
    distance: "2 km",
    request: "Pending"
  },
  {
    donorId: "D002",
    name: "Jane Smith",
    bloodGroup: "B+",
    availability: "Unavailable",
    distance: "5 km",
    request: "Accepted"
  },
  {
    donorId: "D003",
    name: "Michael Lee",
    bloodGroup: "O-",
    availability: "Available",
    distance: "1 km",
    request: "Rejected"
  },
  {
    donorId: "D004",
    name: "Emily Clark",
    bloodGroup: "AB+",
    availability: "Unavailable",
    distance: "8 km",
    request: "Pending"
  },
  {
    donorId: "D005",
    name: "Chris Johnson",
    bloodGroup: "A-",
    availability: "Available",
    distance: "3 km",
    request: "Accepted"
  },
  {
    donorId: "D006",
    name: "Sarah Williams",
    bloodGroup: "B-",
    availability: "Unavailable",
    distance: "4 km",
    request: "Rejected"
  },
  {
    donorId: "D007",
    name: "David Brown",
    bloodGroup: "O+",
    availability: "Available",
    distance: "6 km",
    request: "Pending"
  }
  
];

const donorsTable = () => {
  return (
    <>
      <Table className="text-black text-xl border border-black" style={{fontFamily:"DosisMedium"}}>
        <TableCaption>A List Of Donors Under 12Km Radius</TableCaption>
        <TableHeader>
          <TableRow className="border border-black" >
            <TableHead className="w-[100px] text-black text-3xl">Donor Id</TableHead>
            <TableHead className="text-black text-3xl">Name</TableHead>
            <TableHead className="text-black text-3xl">Blood Group</TableHead>
            <TableHead className="text-right text-black text-3xl">Avaliablity</TableHead>
            <TableHead className="text-right text-black text-3xl">Distance</TableHead>
            <TableHead className="text-right text-black text-3xl">Request</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border border-black">
          {DonorData.map((DonorData) => (
            <TableRow key={DonorData.donorId}>
              <TableCell className="font-medium">{DonorData.donorId}</TableCell>
              <TableCell>{DonorData.name}</TableCell>
              <TableCell className="text-center">{DonorData.bloodGroup}</TableCell>
              <TableCell className="text-end">{DonorData.availability}</TableCell>
              <TableCell className="text-end">{DonorData.distance}</TableCell>
              <TableCell className="text-right">
                <Button className="hover:[#8A0303]">Request</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
    </>
  );
};

export default donorsTable;