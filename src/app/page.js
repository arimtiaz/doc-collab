import Image from "next/image";
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function Home() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) { 
    redirect('/sign-up')
  }
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>Hello World {data.user.email}</p>
    </div>
  );
}
