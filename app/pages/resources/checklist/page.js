'use client';

import { Divider } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { checklist } from '@/app/constants/resourcesChecklistData';


export default function Checklist() {
  return (
    <main>
      <Container maxWidth="90%" style={{ padding: '2% 10% 5%', backgroundColor: '#f9fafa' }}>
        <Typography gutterBottom variant="h5" component="div" style={{ margin: '3% 0', color: '#666' }}>
          Are you ready for a new home?
        </Typography>
        {checklist.map(item => (
          <>
          <Typography key={item.heading} gutterBottom variant="h5" component="div" style={{ margin: '3% 0', color: '#666' }}>
            {item.heading}
          </Typography>
          {item.list.map(listItem => (
              <FormGroup key={listItem.item}>
                <FormControlLabel style={{ color: '#666' }} control={<Checkbox />} label={listItem.item} />
              </FormGroup>
            ))
          }
          </>

        ))}

      </Container>
    </main>
  )
}