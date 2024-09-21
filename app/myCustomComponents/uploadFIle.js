import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const InputFile = ({lable})=>{
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">{lable}</Label>
      <Input id="picture" type="file" />
    </div>
  )
}

export default InputFile;