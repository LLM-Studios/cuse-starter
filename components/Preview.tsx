import ThemeToggle from './ThemeToggle'
import { Card } from "@/components/ui/card"

export default function Preview() {
  const url = 'http://localhost:6080/'
  return (
    <div className="h-full w-full flex flex-col p-4">
      <div className="mb-4 flex justify-end">
        <ThemeToggle />
      </div>
      <div className="flex-1 overflow-hidden flex items-center justify-center">
        <Card className="w-full aspect-video border-none overflow-hidden">
          <iframe src={url} className='w-full h-full border-0'/>
        </Card>
      </div>
    </div>
  )
}

