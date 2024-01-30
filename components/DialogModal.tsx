
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { EyeIcon } from 'lucide-react'
 
export function DialogDemo({item}:any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button>
      <EyeIcon className="mr-2 h-4 w-4" /> view project details
    </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="" style={{lineHeight:'1.5rem'}}>{item.title}</DialogTitle>
          <DialogDescription className=" text-md max-w-[500px] py-3">
           {item.details}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
           
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            
          </div>
        </div>
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}