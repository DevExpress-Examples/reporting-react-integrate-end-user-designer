'use client';
import dynamic from 'next/dynamic'
import React from 'react'
import  {  DxReportDesignerRef } from 'devexpress-reporting-react/dx-report-designer';
import Callbacks from 'devexpress-reporting-react/dx-report-designer/options/Callbacks'
import RequestOptions from 'devexpress-reporting-react/dx-report-designer/options/RequestOptions';
const ReportDesigner = dynamic(() => import('devexpress-reporting-react/dx-report-designer'), {ssr: false})

function App() {
  const designerRef = React.useRef<DxReportDesignerRef>(null);

  function onBeforeRender(args: any): void {
    // You can adjust Report Designer settings here. 
  }

  function doSomething() {
    // Invokes New Report Wizard
    designerRef.current?.instance().RunWizard('NewViaReportWizard');
  }

  return (
    <>
      <button onClick={doSomething}>Invoke Report Wizard</button>
      <ReportDesigner ref={designerRef} reportUrl="TestReport">
        <RequestOptions host="http://localhost:5000/" getDesignerModelAction="DXXRD/GetDesignerModel" />
        <Callbacks BeforeRender={onBeforeRender} />
      </ReportDesigner>
    </>
  )
}

export default App