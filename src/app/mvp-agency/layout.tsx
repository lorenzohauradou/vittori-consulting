export default function MvpAgencyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-[#09090b] text-white antialiased">
            <main>
                {children}
            </main>
        </div>
    )
}
