import "@/app/globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Havoc</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}