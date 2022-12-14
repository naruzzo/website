import React from 'react'
import Link from 'next/link'

const Page: React.FC = () => (
    <div className="container">
        <Link href="/about">Go to about page</Link>
    </div>
)

Page.displayName = 'Home page'
export default Page
