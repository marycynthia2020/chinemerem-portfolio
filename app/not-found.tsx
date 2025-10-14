import TouchBtn from "@/components/TouchBtn"

const NotFound = () => {
  return (
     <section className=" w-full bg-[url('/bg.png')] h-screen bg-no-repeat bg-cover">
       <div className=' px-5 h-screen mx-auto  max-w-[1440px] grid gap-6 place-content-center' >
            <img src="/404.png" alt="" />
            <div className="place-self-center mt-10">
              <TouchBtn children="back to home" className="px-20" href="/" />
            </div>
       </div>
    </section>
  )
}

export default NotFound