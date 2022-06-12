import React from 'react'
//cara yang yang bagus untuk memanggil komponent
// import  Button  from 'Components/Button'
// import  Navigation  from 'Components/Navigation/Navigation'
// import  Footer  from 'Components/Footer/Footer'
// ======================================================
// cara lebih baik untuk memanggil komponent
import { Button, Navigation, Footer } from 'Components'

export default function Home() {
  return (
    <div>
        <Button />
        <Navigation />
        <Footer />
    </div>
  )
}
