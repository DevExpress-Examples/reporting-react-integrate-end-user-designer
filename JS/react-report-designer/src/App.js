import React from 'react';
import ko from 'knockout';
import 'devexpress-reporting/dx-reportdesigner';
import './App.css';

class ReportDesigner extends React.Component {
  constructor(props) {
    super(props);
    this.reportUrl = ko.observable("TestReport");
    this.requestOptions = {
      host: "http://localhost:54114/",
      getDesignerModelAction: "DXXRD/GetDesignerModel"
    };
  }
  render() {
    return (<div ref="designer" data-bind="dxReportDesigner: $data"></div>);
  }
  componentDidMount() {
    ko.applyBindings({
      reportUrl: this.reportUrl,
      requestOptions: this.requestOptions
    }, this.refs.designer);
  }
  componentWillUnmount() {
    ko.cleanNode(this.refs.designer);
  }
};

function App() {
  return (<div style={{ width: "100%", height: "1000px" }}>
    <ReportDesigner />
  </div>);
}

export default App;