import React from 'react'

const Footer = () => {
  return (
    <footer className="hidden md:block  text-gray-500 mt-2 ">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex flex-wrap space-x-4 ">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Accessibility</a>
          <a href="#" className="hover:underline">Help Center</a>
          <a href="#" className="hover:underline">Privacy & Terms</a>
          <a href="#" className="hover:underline">Ad Choices</a>
          <a href="#" className="hover:underline">Advertising</a>
          <a href="#" className="hover:underline">Business Services</a>
          <a href="#" className="hover:underline">Get the LinkedIn app</a>
          <a href="#" className="hover:underline">More</a>
        </div>
        <div className="mt-4 md:mt-0">
          <span className="text-gray-500 text-wrap">LinkedIn Clone Corporation © 2024</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer