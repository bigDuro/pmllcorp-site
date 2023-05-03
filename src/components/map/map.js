'use client';

import * as React from 'react';


export const Map = ({ mwidth, mheight }) => {
    return (
        <>
          <iframe
            width="100%"
            title="gMap"
            height="400px"
            id = "gmap_canvas"
            src = "https://maps.google.com/maps?q=%20260%20Northland%20Blvd%20Suite%20114-F%20Cincinnati%20OH%2045246&t=&z=9&ie=UTF8&iwloc=&output=embed"
            />
        </>
    )
}