import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Button, Card, Modal, Text, Radio, RadioGroup } from '@ui-kitten/components';
import { connect } from 'react-redux'
import { setModalfilter, setRadioFilter } from '../../redux/actions/modalfilter'
import { filterLevelDigimons } from '../../redux/actions/digimons'

const {width, height} = Dimensions.get('screen')

class ModalFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
    }

    render() {
        return (
            <Modal
                visible={this.props.isVisible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => this.props.toggleModal(false)}>
                <Card style={{ width: width * 0.8, maxWidth: 250}} disabled={true}>
                    <RadioGroup
                        selectedIndex={this.props.selectedLevel}
                        onChange={(index) => {
                            this.props.setFilterLevel(index)
                            this.props.setRadioSelected(index)
                            this.props.toggleModal(false)
                        }}>
                        <Radio>All</Radio>
                        <Radio>Fresh</Radio>
                        <Radio>Training</Radio>
                        <Radio>Rookie</Radio>
                        <Radio>Champion</Radio>
                        <Radio>Ultimate</Radio>
                        <Radio>Mega</Radio>
                    </RadioGroup>
                </Card>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isVisible: state.modalfilter.isVisible,
        selectedLevel: state.modalfilter.indexSelected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: (isVisible) => dispatch(setModalfilter(isVisible)),
        setFilterLevel: (index) => dispatch(filterLevelDigimons(index)),
        setRadioSelected: (index) => dispatch(setRadioFilter(index))
    }
}

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalFilter)