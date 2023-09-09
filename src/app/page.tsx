import Image from 'next/image'

import { Button } from '@/components/ui/button';
import { Calendar } from "@/components/ui/calendar"


export default function Home() {
  return (
    <div>

    <h1>hello world</h1>
    <Button variant="outline">Button</Button>
    <Button variant="outline">Button 2</Button>
    <Calendar />
    </div>
    )
}
