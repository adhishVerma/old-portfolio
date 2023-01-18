import React from 'react';
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack'

const Resume = () => {


  return (
    <div id="Resume">
      <a href='resume.pdf' download="resume-Adhish-Kumar-Verma">
      <button className='button-link'>Download</button></a>
      <Document file="/resume.pdf">
        <Page height={window.innerWidth > 600? `` : `480`} pageNumber={1}/>
      </Document>
    </div>
  )
}

export default Resume
