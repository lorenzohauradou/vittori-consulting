import { redirect } from 'next/navigation'
import { AREA_PATH } from '@/lib/auth-cookie'

export default function AreaRiservataHome() {
    redirect(`${AREA_PATH}/task`)
}
