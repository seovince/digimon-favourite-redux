import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native'
import {
    Layout,
    Text,
    Toggle,
    Icon,
    List,
    ListItem,
    Button,
    Input,
    Avatar,
    Divider
} from '@ui-kitten/components';
import SafeAreaView from 'react-native-safe-area-view';
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader'
import ModalFilter from '../../components/ModalFilter/ModalFilter'
import { connect } from 'react-redux'
import { setTheme } from '../../redux/actions/themes'
import { setModalfilter } from '../../redux/actions/modalfilter'
import { setAllDigimon, filterDigimons, } from '../../redux/actions/digimons'
import { addFavourite } from '../../redux/actions/favourites'

import CallAPI from '../../utils/api/CallAPI'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoadingData: false,
            searchKeyword: ""
        }

        this.onChangeText = this.onChangeText.bind(this)
        this.renderButton = this.renderButton.bind(this)
        this.renderSearchIcon = this.renderSearchIcon.bind(this)
        this.renderItemImage = this.renderItemImage.bind(this)
        this.renderItem = this.renderItem.bind(this)
    }

    componentDidMount() {
        CallAPI.callAllDigimonData().then((resp) => {
            this.props.setDigimons(resp.data)
        })
    }

    onChangeText(value) {
        this.setState({
            searchKeyword: value
        }, () => {
            setTimeout(() => {
                this.props.filterDigimons(value)
            }, 200)
        })
    }

    renderButton(item) {
        return (
            <Button
                size='small'
                disabled={this.props.favouritesList.indexOf(item.name) > -1 ? true : false}
                onPress={() => this.props.addFavourite(item)}
            >
                {this.props.favouritesList.indexOf(item.name) > -1 ? 'Favourited' : '+ Favourite'}
            </Button>
        )
    }

    renderSearchIcon() {
        return (
            <Icon
                name='search-outline'
                width={25}
                height={25}
                fill={'gray'}
            />

        )
    }

    renderItemImage(path) {
        return (
            <Avatar
                size='medium'
                style={{
                    alignSelf: 'center'
                }}
                source={{
                    uri: path,
                }}
            />
        )
    }

    renderItem({ item, index }) {
        return (
            <Layout style={{ marginBottom: index === this.props.allDigimons.length - 1 ? 30 : 0 }}>
                <Layout style={{ flexDirection: 'row', flex: 1, padding: 5 }}>
                    {this.renderItemImage(item.img)}
                    <Layout style={{ flexDirection: 'column', paddingHorizontal: 10, justifyContent: 'center', flex: 1 }}>
                        <Text category='s1'>{item.name}</Text>
                        <Text category='p2'>{item.level}</Text>
                    </Layout>
                    {this.renderButton(item)}
                </Layout>
                <Divider />
            </Layout>
        )
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} forceInset={{ bottom: 'never' }}>
                <ModalFilter />
                <Layout style={styles.HomeContainer}>
                    <Layout style={styles.UpperContent}>
                        <Text style={styles.Title} category='h4'>Digimon Index</Text>
                        <Layout style={styles.DarkModeToggleContainer}>
                            <Toggle checked={this.props.isDark} onChange={() => this.props.changeTheme(this.props.isDark)}>
                                {this.props.isDark ? 'Dark Mode' : 'Light Mode'}
                        </Toggle>
                        </Layout>
                        <Layout style={{ flexDirection: 'row' }}>
                            <Input
                                style={{
                                    marginLeft: 5,
                                    flex: 1
                                }}
                                placeholder='Search specific digimon'
                                value={this.state.searchKeyword}
                                onChangeText={nextValue => this.onChangeText(nextValue)}
                                accessoryRight={this.renderSearchIcon}
                            />
                            <Button style={{ marginTop: -3 }} appearance='ghost' status='info' onPress={() => this.props.toggleModal(true)}>
                                Level
                            </Button>
                        </Layout>
                    </Layout>
                    <Layout style={styles.LowerContent}>
                        <List
                            data={this.props.allDigimons}
                            renderItem={this.renderItem}
                        />
                    </Layout>
                </Layout>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isDark: state.theme.isDark,
        allDigimons: state.digimons.digimonList,
        favouritesList: state.favourites.favouriteList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeTheme: (isDark) => dispatch(setTheme(!isDark)),
        setDigimons: (data) => dispatch(setAllDigimon(data)),
        filterDigimons: (keyword) => dispatch(filterDigimons(keyword)),
        toggleModal: (isVisible) => dispatch(setModalfilter(isVisible)),
        addFavourite: (fav) => dispatch(addFavourite(fav))
    }
}

const styles = StyleSheet.create({
    HomeContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    DarkModeToggleContainer: {
        padding: 5,
        flexDirection: 'row',
    },
    Title: {
        margin: 5
    },
    UpperContent: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 4,
        zIndex: 10
    },
    LowerContent: {
        zIndex: 1,
        flex: 1,
    },
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)