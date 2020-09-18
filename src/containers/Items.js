import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../components/Item/Item';
import AddItem from '../components/AddItem/AddItem';
import * as actionTypes from '../store/actions';
import Aside from '../components/Aside/Aside';

class Items extends Component {

    render() {
        return (
            <div>
                <Aside />

                {
                    this.props.isSelect === 'personality' ?
                        <div>
                            <AddItem itemAdded={this.props.onAddedItem} />

                            {this.props.prs.map(item => (
                                <div>
                                    <Item
                                        key={item.id}
                                        name={item.name}
                                        clicked={() => this.props.onRemovedItem(item.id)} />

                                </div>
                            ))}

                        </div>
                        : ''
                    // <p>Hello</p>
                }

                {
                    this.props.isSelect === 'work' ?
                        <div>
                            <AddItem itemAdded={this.props.onAddedItem} />
                            {this.props.prs.map(item => (
                                <div>
                                    <Item
                                        key={item.id}
                                        name={item.name}
                                        clicked={() => this.props.onRemovedItem(item.id)} />

                                </div>
                            ))}

                        </div>
                        : ''
                    // <p>Hello</p>
                }

                {
                    this.props.isSelect === 'family' ?
                        <div>
                            <AddItem itemAdded={this.props.onAddedItem} />

                            {this.props.prs.map(item => (
                                <div>
                                    <Item
                                        key={item.id}
                                        name={item.name}
                                        clicked={() => this.props.onRemovedItem(item.id)} />

                                </div>
                            ))}

                        </div>
                        : ''
                    // <p>Hello</p>
                }

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prs: state.persons,
        // newPersonality: state.persons[0].personality,
        // newWork: state.persons[1].work,
        // newFamily: state.persons.family,

        // list: state.list,
        // personalityCategory: state.personality.map((item, index) => {
        //     return (
        //         <div>
        //             <p key={index} > {item.task} </p>
        //         </div>
        //     );
        // }),

        // workCategory: state.work.map((item, index) => {
        //     return (
        //         <p key={index} > {item.task} </p>
        //     );
        // }),

        // familyCategory: state.family.map((item, index) => {
        //     return (
        //         <p key={index} > {item.task} </p>
        //     );
        // }),
        isSelect: state.isSelect
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedItem: (name) => dispatch({ type: actionTypes.ADD_ITEM, itemData: { name: name } }),
        onRemovedItem: (id) => dispatch({ type: actionTypes.REMOVE_ITEM, itemId: id })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);