import Image from 'next/image'
import { cn } from '@/lib/utils'
import { teamProfile } from './team-profiles'

const SIZES = {
    xs: { box: 'size-5 text-[9px]', px: 40 },
    sm: { box: 'size-7 text-[11px]', px: 56 },
    lg: { box: 'size-16 text-lg', px: 128 },
}

export default function MemberAvatar({
    name,
    size = 'sm',
    className,
}: {
    name: string
    size?: keyof typeof SIZES
    className?: string
}) {
    const profile = teamProfile(name)
    const { box, px } = SIZES[size]

    return (
        <span
            className={cn(
                'relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-100 font-semibold text-slate-600 ring-1 ring-slate-200',
                box,
                className
            )}
        >
            {profile ? (
                <Image
                    src={profile.photo}
                    alt={name}
                    width={px}
                    height={px}
                    className="size-full object-cover"
                    style={profile.style}
                />
            ) : (
                name
                    .split(' ')
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((part) => part[0]!.toUpperCase())
                    .join('')
            )}
        </span>
    )
}
