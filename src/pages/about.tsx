import React from 'react'
import Link from 'next/link'

const Page: React.FC = () => (
    <div className="container">
        <Link href="/">Go to home page</Link>
    </div>
)

Page.displayName = 'About page'
export default Page
