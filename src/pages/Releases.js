import React, { Component } from 'react'
import { releases } from '../firmware/firmwares'
import { FormattedMessage } from 'react-intl'
// import { Button, ButtonsGroup } from '@quentinguidee/react-jade-ui';
import ReleaseCard from '../components/releasecard/ReleaseCard';
import './sass/releases.sass'

export default class Releases extends Component {
    constructor(props) {
        super(props);
        
        document.title = "NSIos — Releases"
    }

    render() {
        return (
            <div className="content">
                <div className="releases__banner">
                    <div className="releases__banner__title">
                        <FormattedMessage id="releases.title" defaultMessage="NSIos version history (template of OMEGA)" />
                    </div>
                </div>
                <div style={ { height: "16px" } }></div>
                <div className="releases__cards">
                {
                    releases.firmwares.map(version => {
                        return <ReleaseCard version={version} />
                    })
                }
                </div>
                <div style={ { height: "16px" } }></div>
            </div>
        )
    }
}
