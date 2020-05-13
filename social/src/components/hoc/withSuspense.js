import React from 'react'
import Preloader from '../common/Preloader/Preloader'

export default (Component) => (props) => {
    return <React.Suspense fallback={<Preloader/>}>
        <Component {...props} />
    </React.Suspense>
}