import Link from "next/link"

const HomePage = () => {
  return (
    <div className='hero min-h-screen bg-[#012222]'>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl text-[#ffd700]">NimiraTech AI</h1>
          <p className="py-6 text-lg text-[#fffaf0] lh-lg">Project on Hold</p>
          <Link href='/chat' className='btn btn-dark btn-dark:hover'>Start Now</Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage
