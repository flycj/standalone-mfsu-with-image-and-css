import React from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import { url } from 'other'
console.log('url: ', url);

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>2222

        <img src={url} />
      </div>,
    },
]);
const testPromise = () => new Promise((resolve) => {
  setTimeout(() => resolve(123), 1000)
})
createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
