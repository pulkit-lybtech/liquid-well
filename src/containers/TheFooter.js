import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">&copy; 2021 Liquid Well.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://lybtechnology.com/" target="_blank" rel="noopener noreferrer">LYB Technology</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
