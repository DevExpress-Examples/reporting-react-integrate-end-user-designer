import './App.css';
import { useEffect, useRef } from 'react';
import { DxReportDesigner } from 'devexpress-reporting/dx-reportdesigner';
import * as ko from 'knockout';

const ReportDesigner = () => {
  const reportUrl = ko.observable("TestReport");
  const designerRef = useRef();
  const requestOptions = {
    host: "https://localhost:54114/",
    getDesignerModelAction: "DXXRD/GetDesignerModel"
  };
  useEffect(() => {
    const designer = new DxReportDesigner(designerRef.current, { reportUrl, requestOptions });
    designer.render(); 
    return () => designer.dispose();
  })
  return (<div ref={designerRef}></div>);
}

function App() {
  return (<div style={{ width: "100%", height: "1000px" }}>
      <ReportDesigner />
  </div>);
  }

export default App;