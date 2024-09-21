"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "../../hooks/use-toast";
import { Button } from "../../components/ui/button";
import { ToastAction } from "../../components/ui/toast";
import { useState } from "react";
import { Input } from "@/components/ui/input"; // Assuming you're using the UI Input component for form fields.
import { Textarea } from "@/components/ui/textarea"; // Textarea for camp description.

export default function ConductCampFormDialog() {
  const { toast } = useToast();

  // State for form data
  const [campName, setCampName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  // Function to handle form submission
  const handleSubmit = () => {
    // Example: Perform an action like sending the camp data to an API or showing a success toast
    if (campName && location && date && description) {
      // Assuming the API call happens here...
      toast({
        title: "Camp submitted",
        description: `Camp: ${campName} at ${location} on ${date}`,
        action: <ToastAction altText="Undo">Undo</ToastAction>,
      });

      // Reset form
      setCampName("");
      setLocation("");
      setDate("");
      setDescription("");
    } else {
      // Handle validation error
      toast({
        title: "Submission failed",
        description: "All fields are required.",
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-black hover:bg-[#8A0303] text-white"
        >
          Conduct a Camp
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-black text-white">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-lg">Organize a Blood Donation Camp</AlertDialogTitle>
          <AlertDialogDescription className="text-lg">
            Please fill out the details to organize a blood donation camp.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-4">
          <div>
            <label htmlFor="campName" className="block text-lg font-medium">
              Camp Name
            </label>
            <Input
              id="campName"
              type="text"
              value={campName}
              onChange={(e) => setCampName(e.target.value)}
              placeholder="Enter the camp name"
              className="mt-1 block w-full text-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-lg font-medium">
              Location
            </label>
            <Input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter the camp location"
              className="mt-1 block w-full text-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-lg font-medium">
              Date
            </label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block text-lg w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-lg font-medium">
              Description
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the camp details..."
              className="mt-1 block w-full text-lg"
              required
            />
          </div>
        </div>
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel className="text-lg">Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit} className="text-lg">
            Submit Camp
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
