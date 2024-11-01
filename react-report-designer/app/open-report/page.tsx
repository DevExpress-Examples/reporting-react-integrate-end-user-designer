'use client';
import dynamic from 'next/dynamic'
import React from 'react'
import  {  DxReportDesignerRef } from 'devexpress-reporting-react/dx-report-designer';
import RequestOptions from 'devexpress-reporting-react/dx-report-designer/options/RequestOptions';
const ReportDesigner = dynamic(() => import('devexpress-reporting-react/dx-report-designer'), {ssr: false})

function App() {
  const designerRef = React.useRef<DxReportDesignerRef>(null);

  function doOpenReport() {
    designerRef.current?.instance().OpenReport("XtraReport1");
  }

  return (
    <>
      <button onClick={doOpenReport}>Open a Report</button>
      <ReportDesigner ref={designerRef} reportUrl="TestReport">
        <RequestOptions host="http://localhost:5000/" getDesignerModelAction="DXXRD/GetDesignerModel" />
      </ReportDesigner>
    </>
  )
}

export default App