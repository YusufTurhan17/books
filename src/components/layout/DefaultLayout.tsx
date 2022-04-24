import View from '../view/View'
import Grid from '../grid/Grid'
import Navbar from './Navbar'
import Header from './Header'

interface DefaultLayoutProps {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Grid
      gridTemplateColumns="1fr"
      height="100%"
      gridTemplateRows="auto 1fr auto"
    >
      <Header>
        <Navbar />
      </Header>
      <View>{children}</View>
    </Grid>
  )
}

export default DefaultLayout
