import { Link } from 'react-router-dom'
import IconGitHub from '../assets/icon/IconGitHub'
import { IconInst } from '../assets/icon/IconInst'
import { IconVK } from '../assets/icon/IconVK'

const myBasket = require('../images/myBasket.jpg')

export function AboutPage() {
  return (
    <div className="w-screen h-screen max-w-full grid grid-cols-[4fr_4fr] bg-white fixed">
      <div className="bg-gradient-to-br from-gray-700 to-amber-400"></div>

      <div className="absolute left-1/2 top-[15%] -translate-x-1/2 w-[65vw] h-[54vh] bg-gray-100 rounded-lg shadow-md p-3">
        <h1 className="text-center text-[40px] text-amber-500 my-5 font-medium">
          About Me
        </h1>

        <div className="grid grid-cols-[4fr_4fr] bg-gray-700 p-3 rounded-lg shadow-lg shadow-gray-600 text-white">
          <div className="flex flex-col items-center justify-between border-r-2 p-3">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden flex-shrink-0">
              <img
                src={myBasket}
                alt="My Photo"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="my-2">
              by{' '}
              <span className="text-gray-300 font-medium text-lg">
                Muhammad
              </span>
            </h2>
            <p className="text-center">
              Project with: React + Typescript + Tailwind CSS + Axios
            </p>
          </div>

          <div className="flex flex-col items-center justify-between p-6">
            <h2 className="my-2 text-gray-300 font-medium text-lg">
              Connect With Me
            </h2>

            <Link to="https://github.com/Magusha1" target="_blank">
              <IconGitHub />
            </Link>

            <Link
              to="https://www.instagram.com/muhammad__abdiev/"
              target="_blank"
            >
              <IconInst />
            </Link>

            <Link to="https://vk.com/muhammad_abdiev" target="_blank">
              <IconVK />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
