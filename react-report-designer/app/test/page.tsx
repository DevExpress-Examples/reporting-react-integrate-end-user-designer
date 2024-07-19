'use client';
import React from 'react'
import ReportDesigner, { RequestOptions, DxReportDesignerRef, Callbacks } from 'devexpress-reporting-react/dx-report-designer';

function App() {
    const designerRef = React.useRef<DxReportDesignerRef>();
    
    function onBeforeRender(event: any): void {
          // Get the property of the XtraReport class with the "Border Color" display name.
          var info = event.sender.GetPropertyInfo("DevExpress.XtraReports.UI.XtraReport", "Border Color");
          // Disable the property's editor if its default value is "Black".
          if (info.defaultVal == "Black") info.disabled = true;

            // Get the XtraReport's property that is located in the "Watermark" section and has the "Image Alignment" display name.
          info = event.sender.GetPropertyInfo("DevExpress.XtraReports.UI.XtraReport", ["Watermark", "Image Alignment"]);
          // Hide the property in the Property panel.
          info.visible = false;

          // Get the XtraReport.DrawWatermark property.
          info = event.sender.GetPropertyInfo("DevExpress.XtraReports.UI.XtraReport", "DrawWatermark");
          info.visible = false;

          // Get the Separator property (found in the XtraReport.ExportOptions.Csv.Separator path).
          info = event.sender.GetPropertyInfo("DevExpress.XtraReports.UI.XtraReport", "ExportOptions.Csv.Separator");
          info.visible = false;

          // Get the property of the XRLabel class with the "Can Grow" display name.
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