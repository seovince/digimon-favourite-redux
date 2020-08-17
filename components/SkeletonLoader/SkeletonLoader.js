import React, { Component } from 'react'
import ContentLoader, { Rect, Circle } from 'react-content-loader/native'

export default class SkeletonLoader extends React.Component {
    constructor(props) {
        super(props)
        this._renderType = this._renderType.bind(this)
    }

    _renderType() {
        
    }

    render() {
        return (
            <ContentLoader>
                <Circle cx="30" cy="30" r="30" />
                <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
            </ContentLoader>
        )
    }
}
