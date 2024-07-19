'use client';
import React from 'react'
import ReportDesigner, { RequestOptions, DxReportDesignerRef } from 'devexpress-reporting-react/dx-report-designer';

function App() {
  const designerRef = React.useRef<DxReportDesignerRef>();

  function doSaveReport() {
    designerRef.current?.instance().SaveReport();
  }

  return (
    <>
      <button onClick={doSaveReport}>Save Report</button>
      <ReportDesigner ref={designerRef} reportUrl="TestReport">
        <RequestOptions host="http://localhost:5000/" getDesignerModelAction="DXXRD/GetDesignerModel" />
      </ReportDesigner>
    </>
  )
}

export default App