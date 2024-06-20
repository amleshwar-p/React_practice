
import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numbAllowed, setNumbAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [upperAllowed, setupperAllowed] = useState("")
  const [isPassword, setIsPassword] = useState("");

  //ref hook

  const passwordCopy = useRef(null)

  const passGen = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";

    if (numbAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+-={}[]/:"
    }
    if (upperAllowed) {
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setIsPassword(pass)

  }, [length, numbAllowed, charAllowed, upperAllowed, setIsPassword])

  const copyPasswordToCLipboard = useCallback(() => {
    alert("Copied");
    passwordCopy.current?.select(0);
    passwordCopy.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(isPassword)

  }, [isPassword])

  useEffect(() => { passGen() }, [length, numbAllowed, charAllowed, upperAllowed, passGen])



  return (
    <>
      <div className='w-full max-w-md  mx-auto shadow-md rounded-md px-5 my-8 text-green-500 bg-gray-800'>
        <div className='flex justify-between items-center '>
          <h1 className='text-4xl font-bold
          py-2'>Password Generator</h1>
        </div>
        <div className='flex shadow rounded-lg overflow-hidden mb-3'>
          <input
            type="text"
            ref={
              passwordCopy
            }
            value={isPassword}
            className='outline-none w-full px-3
            py-1 text-gray-700'
            placeholder='Password'
            readOnly
          />
          <button
            id='copyIt'
            onClick={
              copyPasswordToCLipboard
            }
            className='bg-green-500
            text-white
            px-3
          '>Copy</button>
        </div>

        <div className='flex text-md gap-x-4 gap-y-5 flex-col py-4'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>
              Length {length}
            </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numbAllowed}
              id='numberInput'
              className='cursor-pointer'
              onChange={() => {
                setNumbAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'>
              Numbers
            </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              className='cursor-pointer'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='charInput'>
              Characters
            </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={upperAllowed}
              id='upperInput'
              className='cursor-pointer'
              onChange={() => {
                setupperAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='upperInput'>
              Upper Case
            </label>
          </div>
          <button className='bg-green-600 py-2 text-white text-2xl border-r-2'
            id='genBtn'
            onClick={passGen}>Generate Now</button>
        </div>

      </div>

    </>
  )
}

export default App
