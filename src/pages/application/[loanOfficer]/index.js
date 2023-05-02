'use client';

import React, { useState, useEffect } from "react";
import Script from 'next/script'
import { usePathname } from 'next/navigation';
import { loanOfficerData } from '@/src/constants/loanOfficerData';

export default function Application() {
    const [pathname, setPathname] = useState(usePathname());
    const [{ workFlowId, lar, externalLoginWindow }, setLO] = useState({});

    useEffect(() => {
        const loanOfficer = loanOfficerData.filter(lo => lo.href.includes(pathname))[0];
        setLO(loanOfficer)


    }, [pathname])

    return (
        lar ?
            <main style={{ backgroundColor: '#f9fafa' }}>
                <Script src="https://widget.ellieservices.com/latest/launcher.js" />
                <div className="em-widget"
                    data-width="100%"
                    data-height="800px"
                    data-min-height="800px"
                    data-site-id="5243113918"
                    data-config={`{"workFlowId":"${workFlowId}","lar":"${lar}","externalLoginWindow":"${externalLoginWindow}"}`}
                    data-name="ecc-loan-app"
                    data-aria-label="My Loan Application"
                >
                </div>
            </main> : 'no data'
    )
}
