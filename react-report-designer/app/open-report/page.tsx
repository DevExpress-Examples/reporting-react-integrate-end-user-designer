'use client';
import React from 'react'
import ReportDesigner, { RequestOptions, DxReportDesignerRef } from 'devexpress-reporting-react/dx-report-designer';

function App() {
  const designerRef = React.useRef<DxReportDesignerRef>();

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