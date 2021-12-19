import React from "react";
import { Card } from 'antd';



export default function GoogleMap(props) {
  const { mwidth, mheight } = props;
  return (
    <Card
      hoverable
      style={{padding: '15px', backgroundColor: '#fff', borderRadius: '10px', margin: '10px', textAlign: 'left', height: 'auto'}}
      cover={ <iframe
            width = {mwidth}
            title="gMap"
            height = {mheight}
            id = "gmap_canvas"
            src = "https://maps.google.com/maps?q=%20260%20Northland%20Blvd%20Suite%20114-F%20Cincinnati%20OH%2045246&t=&z=9&ie=UTF8&iwloc=&output=embed"
            frameBorder = "0"
            scrolling = "no"
            marginHeight = "0"
            marginWidth = "0" />}
    >
    </Card>
  );
}
