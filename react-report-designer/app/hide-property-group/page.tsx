'use client';
import React from 'react'
import { groups } from 'devexpress-reporting/dx-reportdesigner'
import ReportDesigner, { RequestOptions, DxReportDesignerRef, Callbacks } from 'devexpress-reporting-react/dx-report-designer';

function App() {
    const designerRef = React.useRef<DxReportDesignerRef>();
    
    function onBeforeRender(args: any): void {
        var group = groups["Appearance"];
        group.info.splice(0, group.info.length);
    }

  return (
    <ReportDesigner ref={designerRef} reportUrl="TestReport">
      <RequestOptions host="http://localhost:5000/" getDesignerModelAction="DXXRD/GetDesignerModel" />
      <Callbacks BeforeRender={onBeforeRender} />
    </ReportDesigner>       
  )
}

export default App