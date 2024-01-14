import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div>Landing Page (unprotected)

      <Link href="/sign-in">
        <Button>
          Log in
        </Button>
      </Link>
    </div>
  )
}