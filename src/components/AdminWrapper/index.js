export default function AdminWrapper({ children }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-1">
            <div className="z-10 w-full items-center justify-between text-sm lg:flex">
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    {children}
                </div>
            </div>
        </main>
    )
}