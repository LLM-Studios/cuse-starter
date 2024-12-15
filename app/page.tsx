import Chat from '@/components/Chat'
import Preview from '@/components/Preview'

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 border-r">
        <Chat />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <Preview />
      </div>
    </div>
  )
}

