'use client';
import dynamic from 'next/dynamic'
import React from 'react'
import  {  DxReportDesignerRef } from 'devexpress-reporting-react/dx-report-designer';
import Callbacks from 'devexpress-reporting-react/dx-report-designer/options/Callbacks'
import RequestOptions from 'devexpress-reporting-react/dx-report-designer/options/RequestOptions';
const ReportDesigner = dynamic(() => import('devexpress-reporting-react/dx-report-designer'), {ssr: false})

function App() {
  const designerRef = React.useRef<DxReportDesignerRef>(null);

  function onBeforeRender(event: any): void {
    // Get the property of the XtraReport class with the "Border Color" display name.
    var info = event.sender.GetPropertyInfo("DevExpress.XtraReports.UI.XtraReport", "Border Color");
    // Disable the property's editor if its default value is "Black".
    if (info.defaultVal == "Black") info.disabled = true;

    // Get the "Watermarks" section.
    info = event.sender.GetPropertyInfo("DevExpress.XtraReports.UI.XtraReport", ["Watermarks"]);
    // Hide the section in the Property panel.
    info.visible = false;

    // Hide the XtraReport.DrawWatermark property.
    info = event.sender.GetPropertyInfo("DevExpress.XtraReports.UI.XtraReport", "DrawWatermark");
    info.visible = false;

    // Hide the Separator property (located by the XtraReport.ExportOptions.Csv.Separator path).
    info = event.sender.GetPropertyInfo("DevExpress.XtraReports.UI.XtraReport", "ExportOptions.Csv.Separator");
    info.visible = false;

    // Hide the property of the XRLabel class with the "Can Grow" display name.
    info = event.sender.GetPropertyInfo("XRLabel", "Can Grow");
    info.disabled = true;

    // Hide the Edit Options section (the XRLabel.EditOptions property) in the XRLabel's property panel.
    info = event.sender.GetPropertyInfo("XRLabel", "EditOptions");
    info.visible = false;
  }

  return (
    <ReportDesigner ref={designerRef} reportUrl="TestReport">
      <RequestOptions host="http://localhost:5000/" getDesignerModelAction="DXXRD/GetDesignerModel" />
      <Callbacks BeforeRender={onBeforeRender} />
    </ReportDesigner>
  )
}

export default App