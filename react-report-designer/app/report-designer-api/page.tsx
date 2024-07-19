'use client';
import React from 'react'
import ReportDesigner, { RequestOptions, DxReportDesignerRef, Callbacks } from 'devexpress-reporting-react/dx-report-designer';

function App() {
  const designerRef = React.useRef<DxReportDesignerRef>();

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