'use client';
import React from 'react';
import { ShowMessage, NotifyType } from '@devexpress/analytics-core/analytics-internal';
import { getLocalization } from '@devexpress/analytics-core/analytics-utils';
import ReportDesigner, { RequestOptions, DxReportDesignerRef } from 'devexpress-reporting-react/dx-report-designer';

function App() {
    const designerRef = React.useRef<DxReportDesignerRef>();

    // Saves a modified report in the active tab
    // and clears the modification flag.
    function saveCurrentReport() {
        if (designerRef.current?.instance().IsModified()) {
            designerRef.current?.instance().SaveNewReport("Rep1");
            designerRef.current?.instance().ResetIsModified();
        }
    };
    // Saves modified reports in all tabs,
    // clears modification flags,
    // and displays a message when the report is successfully saved.
    function saveAllReports() {
        var tabs = designerRef.current?.instance().GetTabs();
        tabs.forEach((tab => {
            if (tab.isModified()) {
                if (!tab.url()) tab.url('Report' + Date.now());
                designerRef.current?.instance().ReportStorageSetData(tab.context().report.serialize(), tab.url())
                    .done(function (result) {
                        tab.resetIsModified();
                        ShowMessage(getLocalization("The report has been successfully saved.",
                            "ASPxReportsStringId.ReportDesigner_SaveReport_Message_OK"), NotifyType.success);
                    });
            }
        }));
    };

    return (
        <>
            <button onClick={saveCurrentReport}>Save Current Report</button>
            <br />
            <button onClick={saveAllReports}>Save All Reports</button>
            <ReportDesigner ref={designerRef} reportUrl="TestReport">
                <RequestOptions host="http://localhost:5000/" getDesignerModelAction="DXXRD/GetDesignerModel" />
            </ReportDesigner>
        </>
    )

}

export default App