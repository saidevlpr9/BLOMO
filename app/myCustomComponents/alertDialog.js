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

import { useToast } from "@/hooks/use-toast"

import { Button } from "../../components/ui/button";
// import { ToastAction } from "../../components/ui/toast";
export default function AlertDialogDemo() {
  const { toast } = useToast();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-black hover:bg-[#8A0303] text-white"
        >
          Request
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-black text-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Blood Request</AlertDialogTitle>
          <AlertDialogDescription>
            By proceeding, you will submit a request for blood. Donors in your
            vicinity will be notified, and you will be connected with a suitable
            match. This action can be canceled before confirmation.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              toast({
                title: "Scheduled: Blood donation request received",
                description: "A donor has been requested. We will let you know once we get the confirmation.",                
              });
            }}
          >
            Submit Request
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
