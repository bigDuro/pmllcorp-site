import React, { useState, useEffect } from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { usePathname } from 'next/navigation';
import { navigationData } from '@/src/constants/navigationData';
function AppBreadcrumb() {
    const pathname = usePathname();
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    useEffect(() => {
        const paths = pathname ? [...pathname.split('/')].filter(path => path !== '') : [];
        const subLinks = navigationData.reduce((links, item) => {
            return [...links, ...item.links];
        }, []);
        const allNavLinks = [...navigationData, ...subLinks];
        const allNavItems = paths?.map(path => {
            return allNavLinks.filter(item => item.href.includes(path))
        })
        const bcrumbs = allNavItems.map(item => {
            return item[0];
        })
        setBreadcrumbs(bcrumbs)
    }, [pathname])

    return (

        breadcrumbs?.length > 0 ?
            <Container maxWidth="100%" className='headerBGLight' style={{ padding: '10px 0', backgroundColor: 'white' }}>
                <Grid container>
                    <Grid item xs={12}>
                        <div style={{ padding: '0 10%' }}>
                            <Breadcrumbs aria-label="breadcrumb" style={{ fontSize: "10px"}}>

                                <Link color="inherit" href="/">
                                    Home
                                </Link>
                                {breadcrumbs.map((breadcrumb, idx) =>
                                    breadcrumb && breadcrumb.name ? (
                                        <Link
                                            key={idx}
                                            color="inherit"
                                            href={breadcrumb.href}
                                            aria-current={idx === breadcrumbs.length - 1 ? "page" : undefined}
                                        >
                                            {breadcrumb.name}
                                        </Link>
                                    ) : null
                                )}
                            </Breadcrumbs>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            : ''

    );
}

export default AppBreadcrumb;
