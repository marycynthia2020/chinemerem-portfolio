import React from 'react'

const ContactForm = () => {
  return (
     <form className="w-full max-w-[900px] bg-[#191919] rounded-md  p-5 md:p-10 border-[#566265]  border">
          <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(min(300px,_100%),_1fr))] gap-8 mb-8">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-md border-[#566265] border focus:outline-none focus:border-[#FEB273]"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="p-4 rounded-md border-[#566265] border focus:outline-none focus:border-[#FEB273]"
            />
            <input
              type="text"
              placeholder="Phone"
              className="p-4  rounded-md border-[#566265] border focus:outline-none focus:border-[#FEB273]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-4 rounded-md  border-[#566265] border focus:outline-none focus:border-[#FEB273]"
            />
          </div>
          <textarea
            name=""
            id=""
            placeholder="Message"
            className="rounded-md min-h-[150px] resize-none  w-full p-4  border-[#566265] border focus:outline-none focus:border-[#FEB273] mb-8"
          ></textarea>

          <button
            className=" w-fit font-medium capitalize flex gap-3 pr-3 items-center border border-[#FEB273] rounded-[100px]"
          >
            <span
              className={`text-black bg-[#FEB273] grid place-content-center py-5 rounded-tr-[150px] rounded-tl-[100px] rounded-bl-[100px] px-12`}
            >
              Submit
            </span>
            <span className="basis-[fit-content]">
              <img src="/arrow.svg" alt="" />
            </span>
          </button>
        </form>
  )
}

export default ContactForm