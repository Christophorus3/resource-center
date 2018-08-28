import { createMuiTheme } from '@material-ui/core/styles'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'
import blueGrey from '@material-ui/core/colors/blueGrey'

// All the following keys are optional.
// We try our best to provide a great default value.
const MyTheme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.3
  }
})

export default MyTheme
