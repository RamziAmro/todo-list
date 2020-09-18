import React from 'react';
import { connect } from 'react-redux'
import './Aside.css'
//import { useDispatch } from 'react-redux';

const Aside = (props) => {
    // const dispatch = useDispatch();

    // const itemHandler = () => {
    //     return props.getItems;
    // }

    return (
        <div className='Aside'>
            <p onClick={props.personalityItem} className='first_paragraph' >Personality</p> 
            <p onClick={props.workItem}  className='second_paragraph' >Work</p>
            <p onClick={props.familyItem} className='third_paragraph' >Family</p>

        </div>
    );
}

// let mapStateToProps = (state) => {
//     return {
//         person: state
//     };
// }

let mapDispatchToProps = (dispatch) => {
    return {
        personalityItem: () => dispatch({ type: 'PERSONALITY'}),
        workItem: () => dispatch({ type: 'WORK' }),
        familyItem: () => dispatch({ type: 'FAMILY' })
    }
}

export default connect(null ,mapDispatchToProps)(Aside);