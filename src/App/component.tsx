import * as React from 'react';
import { Grommet, Box, Paragraph } from 'grommet';
import theme from '../theme';

export default class App extends React.Component {
  render() {
    return (
      <Grommet theme={theme}>
        <Box>
          <Paragraph color="light">Oh hai</Paragraph>
        </Box>
      </Grommet>
    )
  }
}
